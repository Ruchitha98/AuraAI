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


class SongRecommendation(BaseModel):
    title: str
    artist: str
    album: str
    genre: str
    duration: str
    reason: str


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str
    intent: MusicIntent
    suggestions: List[str]
    recommendations: List[SongRecommendation]