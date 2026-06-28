from fastapi import APIRouter
from app.schemas.chat import ChatRequest, ChatResponse, MusicIntent

router = APIRouter(prefix="/api/v1/chat", tags=["chat"])


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    return ChatResponse(
        reply=f"I understand you're looking for music based on: {request.message}",
        intent=MusicIntent(
            activity="coding",
            mood="focus",
            genres=["ambient", "piano"],
            energy="low",
        ),
    )