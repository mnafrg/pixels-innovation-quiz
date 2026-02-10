export default function Result({ scores }) {
  const top = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const messages = {
    hr: "🤍 You belong in the HR Committee!",
    multimedia: "🎨 You belong in the Multimedia Committee!",
    academic: "💻 You belong in the Academic Committee!",
    pr: "📢 You belong in the PR & Marketing Committee!"
  };

  return (
    <div className="card">
      <div className="result-title">Your Result 🎉</div>
      <div className="result-text">{messages[top]}</div>
      <button className="restart-btn" onClick={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  );
}
