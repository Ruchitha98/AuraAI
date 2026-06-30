from app.music.schemas import Song


class RecommendationEngine:

    def recommend(self, intent: dict):

        mood = intent.get("mood", "").lower()
        activity = intent.get("activity", "").lower()

        recommendations = []

        if mood == "relaxing":

            recommendations.extend([
                Song(
                    title="River Flows in You",
                    artist="Yiruma",
                    album="First Love",
                    genre="Piano",
                    duration="3:30",
                    reason="Relaxing solo piano",
                ),
                Song(
                    title="Nuvole Bianche",
                    artist="Ludovico Einaudi",
                    album="Una Mattina",
                    genre="Classical",
                    duration="5:57",
                    reason="Calm focus music",
                ),
            ])

        elif activity == "gym":

            recommendations.extend([
                Song(
                    title="Believer",
                    artist="Imagine Dragons",
                    album="Evolve",
                    genre="Rock",
                    duration="3:24",
                    reason="High energy workout",
                ),
            ])

        else:

            recommendations.extend([
                Song(
                    title="Weightless",
                    artist="Marconi Union",
                    album="Weightless",
                    genre="Ambient",
                    duration="8:10",
                    reason="Default relaxing recommendation",
                ),
            ])

        return recommendations