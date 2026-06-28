import { Text, View, StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING } from "../constants/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aura AI</Text>
      <Text style={styles.subtitle}>Talk to your music.</Text>

      <View style={styles.promptBox}>
        <Text style={styles.promptText}>What do you want to hear?</Text>
      </View>
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
    fontSize: FONT_SIZE.xxl,
    fontWeight: "700",
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.md,
    marginTop: SPACING.sm,
  },
  promptBox: {
    backgroundColor: COLORS.surface,
    padding: SPACING.lg,
    borderRadius: 20,
    marginTop: SPACING.xl,
  },
  promptText: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.md,
  },
});