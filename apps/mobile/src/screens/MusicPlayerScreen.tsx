import { Text, View, StyleSheet } from "react-native";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";

export default function MusicPlayerScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.artwork}>
        <Text style={styles.artworkText}>🎵</Text>
      </View>

      <Text style={styles.songTitle}>Calm Piano Focus</Text>
      <Text style={styles.artist}>Royalty Free Artist</Text>

      <View style={styles.controls}>
        <Text style={styles.control}>⏮</Text>
        <Text style={styles.play}>▶</Text>
        <Text style={styles.control}>⏭</Text>
      </View>

      <Text style={styles.askAI}>Ask Aura for similar music</Text>
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
  artwork: {
    width: 240,
    height: 240,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  artworkText: {
    fontSize: 72,
  },
  songTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xl,
    fontWeight: "700",
  },
  artist: {
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xl,
    marginTop: SPACING.xl,
  },
  control: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xl,
  },
  play: {
    color: COLORS.textPrimary,
    fontSize: 44,
  },
  askAI: {
    color: COLORS.primaryLight,
    marginTop: SPACING.xl,
  },
});