from fastapi import APIRouter
from app.schemas.chat import ChatRequest, ChatResponse
from app.ai.provider import AIProvider
from app.music.recommender import RecommendationEngine

router = APIRouter(prefix="/api/v1/chat", tags=["chat"])

provider = AIProvider()
recommender = RecommendationEngine()


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    ai_result = provider.generate_music_intent(request.message)

    recommendations = recommender.recommend(ai_result["intent"])

    return {
        **ai_result,
        "recommendations": recommendations,
    }