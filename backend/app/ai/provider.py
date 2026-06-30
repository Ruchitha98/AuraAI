import json
import os
from pathlib import Path

from dotenv import load_dotenv
from google import genai

from app.ai.prompts import SYSTEM_PROMPT

env_path = Path(__file__).resolve().parents[2] / ".env"
load_dotenv(env_path)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")


class AIProvider:
    def __init__(self):
        if not GEMINI_API_KEY:
            raise ValueError("GEMINI_API_KEY is not set")

        self.client = genai.Client(api_key=GEMINI_API_KEY)

    def generate_music_intent(self, message: str):
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

        return json.loads(text)