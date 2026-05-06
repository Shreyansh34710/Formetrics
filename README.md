🚀 Formetrics – Movement Analysis (React Prototype) 📌 Overview Formetrics is a React-based prototype that helps users improve posture and exercise form by comparing their movements with a predefined dataset of correct movement patterns. It works as a personal movement coach by giving simple feedback and tracking performance.

🎯 Problem

Incorrect posture and exercise form lead to pain and injuries

No real-time way to compare movement with correct standards

Users rely on guesswork or mirrors

💡 Solution Formetrics uses webcam input + dataset comparison to:

Capture user movement

Compare with ideal movement data

Detect differences

Provide simple correction feedback

⚙️ Features

📷 Webcam-based movement capture

📊 Dataset comparison (no AI)

⚡ Basic feedback (e.g., posture correction)

📈 Movement score based on deviation

🎯 Focused use-case: Exercise form (e.g., squat)

🛠️ Tech Stack

React.js

JavaScript (ES6)

CSS / Tailwind

Web APIs (getUserMedia)

📂 Project Structure /src ├── components │ ├── CameraFeed.jsx │ ├── FeedbackBox.jsx │ ├── MovementScore.jsx │ ├── ComparisonEngine.jsx ├── data │ ├── referenceDataset.json ├── utils │ ├── comparisonLogic.js ├── App.js └── index.js

⚙️ How It Works

User opens the app and allows camera access

Performs movement in front of webcam

System compares movement with stored dataset

Calculates deviation

Shows feedback + score

🧪 Prototype Scope

No AI/ML used

Uses predefined dataset

Focused on concept validation

🔮 Future Scope

AI-based pose detection

Real-time correction system

Wearable sensor integration

Advanced analytics

🎯 Vision To build a scalable movement analysis platform that makes posture correction simple, affordable, and accessible.

👤 Author Shreyansh Mishra