from app.ai.prompts import SYSTEM_PROMPT


class AIProvider:

    def generate_music_intent(self, message: str):

        print(SYSTEM_PROMPT)

        return {
            "reply": f"I understand you're looking for music based on: {message}",
            "intent": {
                "activity": "coding",
                "mood": "focus",
                "genres": ["ambient", "piano"],
                "energy": "low",
                "tempo": "slow",
                "language": "instrumental",
                "confidence": 0.95,
            },
            "suggestions": [
                "Deep Focus Coding",
                "Ambient Piano",
                "Lo-Fi Concentration",
            ],
        }