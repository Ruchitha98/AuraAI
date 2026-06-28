import { Text, View, TextInput, StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING } from "../constants/theme";

export default function AIChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask Aura</Text>
      <Text style={styles.subtitle}>Describe the music you want.</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. relaxing piano while coding"
        placeholderTextColor={COLORS.textMuted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
    justifyContent: "center",
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xl,
    fontWeight: "700",
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
  },
  input: {
    backgroundColor: COLORS.surface,
    color: COLORS.textPrimary,
    padding: SPACING.md,
    borderRadius: 16,
    marginTop: SPACING.xl,
  },
});