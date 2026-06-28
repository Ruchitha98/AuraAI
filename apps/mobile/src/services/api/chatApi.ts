export type MusicIntent = {
    activity: string;
    mood: string;
    genres: string[];
    energy: string;
  };
  
  export type ChatResponse = {
    reply: string;
    intent: MusicIntent;
  };
  
  const API_BASE_URL = "http://127.0.0.1:8000";
  
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