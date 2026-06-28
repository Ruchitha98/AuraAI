from fastapi import APIRouter
from app.schemas.chat import ChatRequest, ChatResponse
from app.ai.provider import AIProvider

router = APIRouter(prefix="/api/v1/chat", tags=["chat"])

provider = AIProvider()


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    result = provider.generate_music_intent(request.message)
    return result