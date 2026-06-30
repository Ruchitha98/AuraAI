export type SongRecommendation = {
    title: string;
    artist: string;
    album: string;
    genre: string;
    duration: string;
    reason: string;
  };
  
  export type MusicIntent = {
    activity: string;
    mood: string;
    genres: string[];
    energy: string;
    tempo: string;
    language: string;
    confidence: number;
  };
  
  export type ChatResponse = {
    reply: string;
    intent: MusicIntent;
    suggestions: string[];
    recommendations: SongRecommendation[];
  };
  const API_BASE_URL = "http://192.168.1.96:8000";
  
  export async function sendChatMessage(message: string): Promise<ChatResponse> {
    const response = await fetch(`${API_BASE_URL}/api/v1/chat/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to send message to Aura backend");
    }
  
    return response.json();
  }