export default function Result({ scores }) {
    const top = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    const messages = {
        design: "🎨 You belong in the Design Committee!",
        pr: "📢 You belong in the PR Committee!",
        hr: "📋 You belong in the HR Committee!",
        tech: "💻 You belong in the Tech Committee!"
    };

    return (
        <div>
            <h2>Your Result 🎉</h2>
            <p>{messages[top]}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
    );
}
