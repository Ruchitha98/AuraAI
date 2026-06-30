import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";
import AIOrb from "../components/ui/AIOrb";
import RecommendationCard from "../components/ui/RecommendationCard";
import { sendChatMessage } from "../services/api/chatApi";
import type { SongRecommendation } from "../services/api/chatApi";

type ChatMessage = {
  role: "user" | "aura";
  text: string;
};

const suggestions = [
  "Music for deep focus while coding",
  "Rainy evening jazz",
  "Songs like Interstellar",
  "Calm music after work",
];

export default function AIChatScreen() {
  const [input, setInput] = useState("");
  const [recommendations, setRecommendations] = useState<SongRecommendation[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "aura",
      text: "Hi Ruchitha, what kind of soundtrack do you need today?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function handleSend(messageText?: string) {
    const text = messageText ?? input.trim();

    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setRecommendations([]);
    setLoading(true);

    try {
      const response = await sendChatMessage(text);
      setRecommendations(response.recommendations ?? []);

      setMessages((prev) => [
        ...prev,
        {
          role: "aura",
          text: `${response.reply}\n\nMood: ${response.intent.mood}\nActivity: ${response.intent.activity}\nGenres: ${response.intent.genres.join(", ")}\nEnergy: ${response.intent.energy}`,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "aura",
          text: "Sorry, I couldn't connect to Aura backend. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <AIOrb />
          <Text style={styles.title}>Ask Aura</Text>
          <Text style={styles.subtitle}>
            Describe your mood, activity, memory, or moment.
          </Text>
        </View>

        {messages.map((message, index) => (
          <View
            key={`${message.role}-${index}`}
            style={message.role === "user" ? styles.messageUser : styles.messageAura}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}

        {recommendations.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Recommended for you</Text>
            {recommendations.map((song) => (
              <RecommendationCard key={`${song.title}-${song.artist}`} song={song} />
            ))}
          </>
        )}

        <Text style={styles.sectionTitle}>Try asking</Text>

        {suggestions.map((item) => (
          <TouchableOpacity key={item} style={styles.suggestion} onPress={() => handleSend(item)}>
            <Ionicons name="sparkles" size={18} color={COLORS.primaryLight} />
            <Text style={styles.suggestionText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {loading && <Text style={styles.loading}>Aura is thinking...</Text>}
      </ScrollView>

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Tell Aura what you want..."
          placeholderTextColor={COLORS.textMuted}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => handleSend()}>
          <Ionicons name="send" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: {
    padding: SPACING.lg,
    paddingTop: 64,
    paddingBottom: 160,
  },
  header: {
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xxl,
    fontWeight: "800",
    marginTop: SPACING.md,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.md,
    textAlign: "center",
    lineHeight: 24,
    marginTop: SPACING.sm,
  },
  messageAura: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    alignSelf: "flex-start",
    maxWidth: "92%",
  },
  messageUser: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    alignSelf: "flex-end",
    maxWidth: "92%",
  },
  messageText: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.md,
    lineHeight: 24,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.lg,
    fontWeight: "800",
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
  },
  suggestion: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  suggestionText: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.md,
    fontWeight: "600",
    marginLeft: SPACING.sm,
  },
  loading: {
    color: COLORS.primaryLight,
    marginTop: SPACING.md,
  },
  inputBar: {
    position: "absolute",
    left: SPACING.lg,
    right: SPACING.lg,
    bottom: 96,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.full,
    padding: SPACING.sm,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    paddingHorizontal: SPACING.md,
    fontSize: FONT_SIZE.md,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});