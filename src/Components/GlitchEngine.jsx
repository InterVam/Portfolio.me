import { useEffect, useState } from 'react';
import '../Style/glitchEngine.css';

const noiseBg =
    'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px), ' +
    'repeating-linear-gradient(90deg, rgba(0,240,255,0.04) 0 1px, transparent 1px 4px), ' +
    '#100b22';

const randomEdgePosition = (w, h) => {
    const roll = Math.random();
    if (roll < 0.25) {
        return { x: Math.random() * 10, y: Math.random() * (100 - h) };
    }
    if (roll < 0.5) {
        return { x: 90 - Math.random() * 6 - w, y: Math.random() * (100 - h) };
    }
    if (roll < 0.75) {
        return { x: Math.random() * (100 - w), y: Math.random() * 8 };
    }
    return { x: Math.random() * (100 - w), y: 90 - Math.random() * 6 - h };
};

const createPatches = () => {
    const count = 5 + Math.floor(Math.random() * 6);
    const patches = [];

    for (let i = 0; i < count; i += 1) {
        const channel = Math.random() > 0.5 ? 'cyan' : 'pink';
        const w = 1.2 + Math.random() * 2.8;
        const h = 1 + Math.random() * 2.4;
        const { x, y } = randomEdgePosition(w, h);

        patches.push({
            id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 6)}`,
            type: Math.random() > 0.7 ? 'shard' : 'tile',
            channel,
            x,
            y,
            w,
            h,
            dx: (Math.random() - 0.5) * 22,
            dy: (Math.random() - 0.5) * 14,
            skew: (Math.random() - 0.5) * 6,
            flicker: Math.random() > 0.75,
        });
    }

    return patches;
};

const createMicroBlocks = (patch) => {
    if (Math.random() > 0.55) {
        return [];
    }

    return [
        {
            x: Math.random() * 55,
            y: Math.random() * 55,
            w: 22 + Math.random() * 26,
            h: 22 + Math.random() * 26,
            dx: (Math.random() - 0.5) * 8,
        },
    ];
};

const GlitchEngine = () => {
    const [burst, setBurst] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined;
        }

        let timeoutId = 0;
        let clearId = 0;

        const fire = () => {
            const patches = createPatches().map((patch) => ({
                ...patch,
                blocks: createMicroBlocks(patch),
            }));
            const shift = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 5);

            setBurst({ patches, shift });
            document.documentElement.style.setProperty('--glitch-shift', `${shift}px`);
            document.documentElement.classList.add('glitch-hit');

            clearId = window.setTimeout(() => {
                setBurst(null);
                document.documentElement.classList.remove('glitch-hit');
                document.documentElement.style.removeProperty('--glitch-shift');
            }, 70 + Math.random() * 50);

            timeoutId = window.setTimeout(fire, 3200 + Math.random() * 2800);
        };

        timeoutId = window.setTimeout(fire, 1800);

        return () => {
            window.clearTimeout(timeoutId);
            window.clearTimeout(clearId);
            document.documentElement.classList.remove('glitch-hit');
        };
    }, []);

    return (
        <div className={`glitch-engine ${burst ? 'glitch-engine--burst' : ''}`} aria-hidden="true">
            {burst?.patches.map((patch) => (
                <div
                    key={patch.id}
                    className={`glitch-patch glitch-patch--${patch.type} glitch-patch--${patch.channel} ${patch.flicker ? 'glitch-patch--flicker' : ''}`}
                    style={{
                        left: `${patch.x}vw`,
                        top: `${patch.y}vh`,
                        width: `${patch.w}vw`,
                        height: `${patch.h}vh`,
                        minWidth: '14px',
                        minHeight: '12px',
                        maxWidth: '72px',
                        maxHeight: '56px',
                        transform: `translate(${patch.dx}px, ${patch.dy}px) skewX(${patch.skew}deg)`,
                        backgroundImage: noiseBg,
                    }}
                >
                    <span
                        className="glitch-patch-ghost glitch-patch-ghost--cyan"
                        style={{ transform: `translate(${-patch.dx * 0.25}px, ${patch.dy * 0.15}px)` }}
                    />
                    <span
                        className="glitch-patch-ghost glitch-patch-ghost--pink"
                        style={{ transform: `translate(${patch.dx * 0.28}px, ${-patch.dy * 0.18}px)` }}
                    />
                    {patch.blocks.map((block, index) => (
                        <span
                            key={index}
                            className="glitch-micro"
                            style={{
                                left: `${block.x}%`,
                                top: `${block.y}%`,
                                width: `${block.w}%`,
                                height: `${block.h}%`,
                                transform: `translateX(${block.dx}px)`,
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GlitchEngine;