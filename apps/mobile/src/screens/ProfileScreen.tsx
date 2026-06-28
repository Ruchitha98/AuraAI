import { Text, View, StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>A</Text>
      </View>

      <Text style={styles.title}>Aura Profile</Text>
      <Text style={styles.subtitle}>Personalize your music experience.</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>⚙️ Settings</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>🤖 AI Preferences</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>🌙 Theme</Text>
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
    alignItems: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  avatarText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.xxl,
    fontWeight: "700",
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xl,
    fontWeight: "700",
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  card: {
    width: "100%",
    backgroundColor: COLORS.surface,
    padding: SPACING.lg,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
  },
  cardText: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.md,
    fontWeight: "600",
  },
});