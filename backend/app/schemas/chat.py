from pydantic import BaseModel
from typing import List


class MusicIntent(BaseModel):
    activity: str
    mood: str
    genres: List[str]
    energy: str
    tempo: str
    language: str
    confidence: float


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str
    intent: MusicIntent
    suggestions: List[str]