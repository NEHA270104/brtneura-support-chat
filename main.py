from fastapi import FastAPI
from routers import tickets, chat

app = FastAPI(title="BRTNeura Support Chat")

# Routers
app.include_router(tickets.router, prefix="/tickets", tags=["Tickets"])
app.include_router(chat.router, prefix="/chat", tags=["Chat"])

@app.get("/")
def root():
    return {"message": "BRTNeura API running"}
