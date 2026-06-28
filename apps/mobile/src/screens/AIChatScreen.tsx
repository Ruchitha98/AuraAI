import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";
import AIOrb from "../components/ui/AIOrb";

const suggestions = [
  "Music for deep focus while coding",
  "Rainy evening jazz",
  "Songs like Interstellar",
  "Calm music after work",
];

export default function AIChatScreen() {
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

        <View style={styles.messageAura}>
          <Text style={styles.messageText}>
            Hi Ruchitha, what kind of soundtrack do you need today?
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Try asking</Text>

        {suggestions.map((item) => (
          <TouchableOpacity key={item} style={styles.suggestion}>
            <Ionicons name="sparkles" size={18} color={COLORS.primaryLight} />
            <Text style={styles.suggestionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Tell Aura what you want..."
          placeholderTextColor={COLORS.textMuted}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.lg,
    paddingTop: 64,
    paddingBottom: 140,
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
    marginBottom: SPACING.xl,
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