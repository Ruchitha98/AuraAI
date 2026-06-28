import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";
import AIOrb from "../components/ui/AIOrb";

export default function MusicPlayerScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.nowPlaying}>Now Playing</Text>
        <AIOrb />
      </View>

      <View style={styles.artwork}>
        <Ionicons name="musical-notes" size={72} color={COLORS.primaryLight} />
      </View>

      <Text style={styles.songTitle}>Calm Piano Focus</Text>
      <Text style={styles.artist}>Aura Library</Text>

      <View style={styles.progressWrap}>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>

        <View style={styles.timeRow}>
          <Text style={styles.time}>1:24</Text>
          <Text style={styles.time}>4:12</Text>
        </View>
      </View>

      <View style={styles.controls}>
        <Ionicons name="shuffle" size={24} color={COLORS.textSecondary} />
        <Ionicons name="play-skip-back" size={30} color={COLORS.textPrimary} />

        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="pause" size={34} color={COLORS.white} />
        </TouchableOpacity>

        <Ionicons name="play-skip-forward" size={30} color={COLORS.textPrimary} />
        <Ionicons name="repeat" size={24} color={COLORS.textSecondary} />
      </View>

      <TouchableOpacity style={styles.askAura}>
        <Ionicons name="sparkles" size={20} color={COLORS.primaryLight} />
        <Text style={styles.askText}>Ask Aura for similar music</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
    paddingTop: 64,
    alignItems: "center",
  },
  topRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  nowPlaying: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xl,
    fontWeight: "800",
  },
  artwork: {
    width: 280,
    height: 280,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  songTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xl,
    fontWeight: "800",
    textAlign: "center",
  },
  artist: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.md,
    marginTop: SPACING.sm,
  },
  progressWrap: {
    width: "100%",
    marginTop: SPACING.xl,
  },
  progressBar: {
    height: 6,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.surfaceLight,
    overflow: "hidden",
  },
  progress: {
    width: "35%",
    height: "100%",
    backgroundColor: COLORS.primary,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SPACING.sm,
  },
  time: {
    color: COLORS.textMuted,
    fontSize: FONT_SIZE.sm,
  },
  controls: {
    width: "100%",
    marginTop: SPACING.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playButton: {
    width: 74,
    height: 74,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  askAura: {
    marginTop: SPACING.xl,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    flexDirection: "row",
    alignItems: "center",
  },
  askText: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    marginLeft: SPACING.sm,
  },
});