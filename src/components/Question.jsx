import { useMemo } from "react";

export default function Question({ data, onAnswer, progress }) {
  const shuffledOptions = useMemo(() => {
    return [...data.options].sort(() => Math.random() - 0.5);
  }, [data]);

  return (
    <div className="card">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <h2>{data.question}</h2>

      {shuffledOptions.map((opt, i) => (
        <button
          key={i}
          className="option-btn"
          onClick={() => onAnswer(opt.scores)}
        >
          {opt.text}
        </button>
      ))}
    </div>
  );
}
