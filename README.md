# BRTNeura Support Chat System

This project is a **Support Ticket & Chat System** with **AI-based ticket triage**, built using:

- **Backend:** FastAPI + SQLAlchemy + SQLite/PostgreSQL
- **Frontend:** React + TypeScript + Vite
- **Authentication:** Firebase (Google Sign-In placeholder in this build)
- **Database:** SQLite (local) / PostgreSQL (Docker)
- **AI:** Simple classifier assigns ticket priority
- **Real-time Communication:** Chat under each ticket
- **Dockerized** for easy setup

---

## 🚀 Features
- User login with Google (Firebase Auth placeholder in this build)
- Create and list support tickets
- AI-powered **priority classification** (Low / Medium / High)
- Send & view messages under each ticket
- REST API with **FastAPI + Swagger docs**
- Dockerized for easy startup
- Pagination for tickets and messages
- Pre-seeded data for demo (if `seed.py` used)

---

## 📂 Project Structure
brtneura-support-chat/
│── api/ # FastAPI backend
│ ├── main.py
│ ├── database.py
│ ├── models/
│ ├── routers/
│ ├── schemas/
│ ├── requirements.txt
│ └── .env.example
│
│── web/ # React frontend
│ ├── src/
│ ├── package.json
│ └── .env.example
│
│── docker-compose.yml
│── README.md
## 🛠️ Installation

### **1. Clone or Extract**
Download and extract the ZIP:  
```bash
unzip brtneura-support-chat.zip
cd brtneura-support-chat
2. Run with Docker (Recommended)


docker-compose up --build
Frontend → http://localhost:5173

Backend API → http://localhost:8000

Swagger Docs → http://localhost:8000/docs

3. Run Without Docker
Backend

cd api
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
Frontend

cd web
npm install
npm run dev
📊 API Endpoints
GET /tickets/ → List tickets (paginated)

POST /tickets/ → Create new ticket

GET /chat/{ticket_id}/messages → Get messages for a ticket

POST /chat/{ticket_id}/messages → Send a message

🧪 Testing
Try creating a new ticket

Send messages in the chat

Check AI priority assignment in ticket list

Explore API docs at → http://localhost:8000/docs