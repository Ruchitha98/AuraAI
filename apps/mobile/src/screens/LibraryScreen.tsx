import { Text, View, StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Library</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>❤️ Liked Songs</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎧 Playlists</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🕘 Listening History</Text>
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
    fontSize: FONT_SIZE.xl,
    fontWeight: "700",
    marginBottom: SPACING.xl,
  },
  card: {
    backgroundColor: COLORS.surface,
    padding: SPACING.lg,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
  },
  cardTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.md,
    fontWeight: "600",
  },
});