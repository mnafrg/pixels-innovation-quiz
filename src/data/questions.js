const questions = [
    {
        question: "When working in a team, you are usually…",
        options: [
            { text: "The creative idea person 🎨", scores: { design: 2 } },
            { text: "The one who talks to people 📢", scores: { pr: 2 } },
            { text: "The organizer and planner 📋", scores: { hr: 2 } },
            { text: "The technical problem solver 💻", scores: { tech: 2 } }
        ]
    },
    {
        question: "What do you enjoy doing most?",
        options: [
            { text: "Designing posts or visuals ✨", scores: { design: 2 } },
            { text: "Presenting and speaking 🎤", scores: { pr: 2 } },
            { text: "Organizing tasks and schedules 🗂️", scores: { hr: 2 } },
            { text: "Coding or building projects 🧠", scores: { tech: 2 } }
        ]
    },
    {
        question: "Your friends describe you as…",
        options: [
            { text: "Creative and artistic 🎨", scores: { design: 2 } },
            { text: "Social and confident 😄", scores: { pr: 2 } },
            { text: "Responsible and organized 📅", scores: { hr: 2 } },
            { text: "Logical and analytical 🤓", scores: { tech: 2 } }
        ]
    }
];

export default questions;
