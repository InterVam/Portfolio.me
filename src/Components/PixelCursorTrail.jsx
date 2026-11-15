import { useEffect, useRef, useState } from 'react';
import '../Style/pixelCursor.css';

const COLORS = ['#00f0ff', '#ff2bd6', '#b7ff00', '#f5f2ff'];
const MAX_TRAIL = 72;
const LIFE_MS = 720;

const spawnCluster = (x, y, colorSeed) => {
    const count = 3 + Math.floor(Math.random() * 3);
    const born = Date.now();
    const cluster = [];

    for (let i = 0; i < count; i += 1) {
        const color = COLORS[(colorSeed + i) % COLORS.length];
        const kind = ['block', 'shard', 'dot', 'bracket'][Math.floor(Math.random() * 4)];
        const size = kind === 'dot' ? 3 : 5 + Math.floor(Math.random() * 2) * 2;
        cluster.push({
            id: `${born}-${i}-${Math.random().toString(36).slice(2, 6)}`,
            x: x + (Math.random() - 0.5) * 14,
            y: y + (Math.random() - 0.5) * 14,
            color,
            kind,
            size,
            born,
            vx: (Math.random() - 0.5) * 1.8,
            vy: (Math.random() - 0.5) * 1.8 - 0.4,
            spin: Math.random() * 360,
        });
    }

    return cluster;
};

const PixelCursorTrail = () => {
    const [bits, setBits] = useState([]);
    const [pointer, setPointer] = useState({ x: -40, y: -40, on: false });
    const [, setFrame] = useState(0);
    const colorIndex = useRef(0);
    const lastSpawn = useRef({ x: 0, y: 0, t: 0 });

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined;
        }

        const onMove = (event) => {
            const now = Date.now();
            setPointer({ x: event.clientX, y: event.clientY, on: true });

            const dist = Math.hypot(event.clientX - lastSpawn.current.x, event.clientY - lastSpawn.current.y);
            if (dist < 6 && now - lastSpawn.current.t < 22) return;

            lastSpawn.current = { x: event.clientX, y: event.clientY, t: now };
            const cluster = spawnCluster(event.clientX, event.clientY, colorIndex.current);
            colorIndex.current += 1;

            setBits((current) => [...current, ...cluster].slice(-MAX_TRAIL));
        };

        const onLeave = () => setPointer((current) => ({ ...current, on: false }));

        let frame = 0;
        const tick = () => {
            const now = Date.now();
            setBits((current) => current
                .map((bit) => ({
                    ...bit,
                    x: bit.x + bit.vx,
                    y: bit.y + bit.vy,
                    vy: bit.vy + 0.015,
                    vx: bit.vx * 0.985,
                    spin: bit.spin + 4,
                }))
                .filter((bit) => now - bit.born < LIFE_MS));

            setFrame((count) => count + 1);
            frame = window.requestAnimationFrame(tick);
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        window.addEventListener('pointerleave', onLeave);
        frame = window.requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerleave', onLeave);
            window.cancelAnimationFrame(frame);
        };
    }, []);

    const now = Date.now();

    return (
        <div className="pixel-cursor-layer" aria-hidden="true">
            {bits.map((bit) => (
                <span
                    key={bit.id}
                    className={`pixel-bit pixel-bit--${bit.kind}`}
                    style={{
                        left: bit.x,
                        top: bit.y,
                        width: bit.size,
                        height: bit.kind === 'shard' ? bit.size * 2 : bit.size,
                        backgroundColor: bit.kind === 'bracket' || bit.kind === 'shard' ? 'transparent' : bit.color,
                        borderColor: bit.kind === 'bracket' ? bit.color : undefined,
                        color: bit.color,
                        opacity: Math.max(0, 1 - (now - bit.born) / LIFE_MS),
                        transform: `translate(-50%, -50%) rotate(${bit.spin}deg)`,
                    }}
                />
            ))}
            <span
                className="pixel-cursor-head"
                style={{
                    left: pointer.x,
                    top: pointer.y,
                    opacity: pointer.on ? 1 : 0,
                }}
            />
        </div>
    );
};

export default PixelCursorTrail;