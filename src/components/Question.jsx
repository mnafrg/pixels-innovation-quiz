export default function Question({ data, onAnswer, progress }) {
  return (
    <div className="card">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <h2>{data.question}</h2>

      {data.options.map((opt, i) => (
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
