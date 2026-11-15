import { useState, useRef, useEffect } from "react";

const Cake = () => {
  const [progress, setProgress] = useState(0); // от 0 до 100
  const [isBlownOut, setIsBlownOut] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const startBlowing = (e) => {
    if (isBlownOut) return;
    e.preventDefault();

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsBlownOut(true);
          clearInterval(intervalRef.current);
          return 100;
        }
        return prev + 0.8;
      });
    }, 10);
  };

  const stopBlowing = () => {
    clearInterval(intervalRef.current);
    if (isBlownOut) return;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1.5;
      });
    }, 10);
  };

  const flameScale = Math.max(0, 1 - progress / 100);

  return (
    <div className="cake-container">
      <div className="cake">
        <div className="candle c1">
          <div
            className="flame"
            style={{
              transform: `scale(${flameScale})`,
              opacity: flameScale,
              boxShadow: `0 0 ${10 * flameScale}px #f4d03f, 0 0 ${20 * flameScale}px #f39c12`
            }}
          ></div>
        </div>
        <div className="candle c2">
          <div
            className="flame"
            style={{
              transform: `scale(${flameScale})`,
              opacity: flameScale,
              boxShadow: `0 0 ${10 * flameScale}px #f4d03f, 0 0 ${20 * flameScale}px #f39c12`
            }}
          ></div>
        </div>
        <div className="candle c3">
          <div
            className="flame"
            style={{
              transform: `scale(${flameScale})`,
              opacity: flameScale,
              boxShadow: `0 0 ${10 * flameScale}px #f4d03f, 0 0 ${20 * flameScale}px #f39c12`
            }}
          ></div>
        </div>
        <div className="cake-body"></div>
      </div>

      {!isBlownOut ? (
        <div className="hold-button-container">
          <button
            className="blow-btn"
            onMouseDown={startBlowing}
            onMouseUp={stopBlowing}
            onMouseLeave={stopBlowing}
            onTouchStart={startBlowing}
            onTouchEnd={stopBlowing}
          >
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <span className="btn-text">Загадай желание. Удерживай, чтобы задуть!</span>
          </button>
        </div>
      ) : (
        <>
          <h2 className="congrats-text">С Днём Рождения! ✨</h2>
          <p className="text-blue-400">Пусть все твои мечты и желания осуществятся!</p>
        </>
      )}
    </div>
  );
}


export default Cake;