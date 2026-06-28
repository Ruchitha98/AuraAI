from fastapi import FastAPI
from app.api.chat import router as chat_router

app = FastAPI(
    title="AuraAI Backend",
    description="Backend API for AuraAI",
    version="0.1.0",
)

app.include_router(chat_router)


@app.get("/")
def root():
    return {
        "status": "ok",
        "service": "AuraAI Backend",
        "version": "0.1.0",
    }


@app.get("/health")
def health():
    return {"healthy": True}