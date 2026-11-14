import { useCallback, useEffect, useState } from 'react';
import '../Style/playgroundStyle.css';

const GAME_LENGTH = 20;

const randomPosition = () => ({
    left: `${12 + Math.random() * 76}%`,
    top: `${16 + Math.random() * 64}%`,
});

const NeonGame = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_LENGTH);
    const [isPlaying, setIsPlaying] = useState(false);
    const [position, setPosition] = useState(randomPosition);

    const startGame = useCallback(() => {
        setScore(0);
        setTimeLeft(GAME_LENGTH);
        setPosition(randomPosition());
        setIsPlaying(true);
    }, []);

    useEffect(() => {
        if (!isPlaying) return undefined;

        const timer = window.setInterval(() => {
            setTimeLeft((current) => {
                if (current <= 1) {
                    window.clearInterval(timer);
                    setIsPlaying(false);
                    return 0;
                }
                return current - 1;
            });
        }, 1000);

        return () => window.clearInterval(timer);
    }, [isPlaying]);

    const catchSignal = () => {
        if (!isPlaying) return;
        setScore((current) => current + 1);
        setPosition(randomPosition());
    };

    return (
        <div className="game-panel">
            <div className="game-header">
                <div>
                    <p className="eyebrow"><span className="eyebrow-mark" /> Mini arcade</p>
                    <h2>Catch the <em>signal.</em></h2>
                </div>
                <div className="game-stats" aria-live="polite">
                    <span>SCORE <b>{String(score).padStart(2, '0')}</b></span>
                    <span>TIME <b>{String(timeLeft).padStart(2, '0')}s</b></span>
                </div>
            </div>
            <div className="game-arena">
                {!isPlaying && (
                    <div className="game-overlay">
                        <span className="game-prompt">
                            {timeLeft === 0 ? `Run complete — ${score} signals caught` : 'A tiny reaction test'}
                        </span>
                        <button className="game-start" onClick={startGame}>
                            {timeLeft === 0 ? 'Play again' : 'Start run'} <span>↗</span>
                        </button>
                    </div>
                )}
                {isPlaying && (
                    <button
                        className="signal-target"
                        style={position}
                        onClick={catchSignal}
                        aria-label="Catch the neon signal"
                    />
                )}
                <span className="arena-corner arena-corner-tl" />
                <span className="arena-corner arena-corner-br" />
            </div>
            <p className="game-help">Click the signal as many times as you can before the clock hits zero.</p>
        </div>
    );
};

export default NeonGame;
