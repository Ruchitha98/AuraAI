import json
import logging

from google import genai
from app.ai.prompts import SYSTEM_PROMPT
from app.core.config import settings

logger = logging.getLogger(__name__)


class AIProvider:
    def __init__(self):
        self.client = genai.Client(api_key=settings.gemini_api_key)

    def generate_music_intent(self, message: str):
        logger.info("Generating music intent")

        prompt = f"""
{SYSTEM_PROMPT}

User message:
{message}
"""

        response = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        text = response.text.strip()
        text = text.replace("```json", "").replace("```", "").strip()

        try:
            return json.loads(text)
        except json.JSONDecodeError:
            logger.exception("Gemini returned invalid JSON")
            return {
                "reply": "Sorry, I could not understand that properly. Please try again.",
                "intent": {
                    "activity": "unknown",
                    "mood": "unknown",
                    "genres": [],
                    "energy": "unknown",
                    "tempo": "unknown",
                    "language": "unknown",
                    "confidence": 0.0,
                },
                "suggestions": [],
            }