import { Text, View, StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";

export default function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generated Playlist</Text>
      <Text style={styles.subtitle}>Made by Aura AI</Text>

      <View style={styles.card}>
        <Text style={styles.songTitle}>Calm Piano Focus</Text>
        <Text style={styles.artist}>Royalty Free Artist</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.songTitle}>Deep Coding Flow</Text>
        <Text style={styles.artist}>Aura Library</Text>
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
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  card: {
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
  },
  songTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.md,
    fontWeight: "600",
  },
  artist: {
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
});