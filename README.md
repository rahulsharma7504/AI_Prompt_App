# 🚀 MERN AI Flow App

A full-stack MERN application that allows users to input a prompt, generate an AI response using OpenRouter API, visualize the flow using React Flow, and store results in MongoDB.

---

## 📌 Features

- 🧠 AI-powered response generation (OpenRouter API)
- 🔗 Visual flow UI using React Flow
- 💾 Save prompt & response to MongoDB
- 📜 Fetch history (latest first)
- ⚡ Fast and responsive UI
- 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Flow
- Axios
- CSS Modules

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- OpenRouter API

---

## ⚙️ Project Structure

root/
│
├── Backend/
│ ├── routes/
│ ├── models/
│ ├── server.js
│ └── .env
│
├── Frontend/
│ ├── src/
│ ├── App.js
│ └── App.module.css
│
└── README.md

---

## 🔑 Environment Variables

Create `.env` file in Backend folder:



PORT=5000
OPENROUTER_API_KEY=your_api_key_here
MONGO_URI=your_mongodb_connection_string


---

## ▶️ How to Run Locally

### 1. Clone Repository

git clone https://github.com/your-username/mern-ai-flow.git

cd mern-ai-flow


---

### 2. Setup Backend
cd Backend
npm install
npm run dev


---

### 3. Setup Frontend


cd Frontend

npm install
npm start


---

## 🌐 API Endpoints

| Method | Endpoint           | Description              |
|--------|------------------|--------------------------|
| POST   | /api/ask-ai       | Get AI response          |
| POST   | /api/save         | Save prompt & response   |
| GET    | /api/history      | Fetch saved data         |

---

## 🎯 How It Works

1. User enters prompt in Input Node
2. Clicks **Run Flow**
3. Frontend sends request to backend
4. Backend calls OpenRouter AI API
5. Response is shown in Result Node
6. User can save the result to MongoDB

---

## 🚀 Deployment

- Backend: Render / Railway
- Frontend: Vercel / Netlify

---

## 🎥 Demo

(Attach Loom / YouTube link here)

---

## 📌 Future Improvements

- Add loading spinner
- Add history UI panel
- Add authentication
- Improve UI animations

---

## 👨‍💻 Author

Rahul Sharma  
- GitHub: https://github.com/rahulsharma7504
- LinkedIn: https://www.linkedin.com/in/rahul-sharma-aa6b61247/

---

## ⭐ If you like this project, give it a star!