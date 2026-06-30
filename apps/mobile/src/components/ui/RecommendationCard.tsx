import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../../constants/theme";
import type { SongRecommendation } from "../../services/api/chatApi";

type RecommendationCardProps = {
  song: SongRecommendation;
};

export default function RecommendationCard({ song }: RecommendationCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name="musical-notes-outline" size={28} color={COLORS.primaryLight} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.meta}>{song.genre}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.meta}>{song.duration}</Text>
        </View>

        <Text style={styles.reason}>{song.reason}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    flexDirection: "row",
    marginBottom: SPACING.md,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  content: {
    flex: 1,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.md,
    fontWeight: "800",
  },
  artist: {
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.xs,
  },
  meta: {
    color: COLORS.primaryLight,
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
  },
  dot: {
    color: COLORS.textMuted,
    marginHorizontal: SPACING.xs,
  },
  reason: {
    color: COLORS.textMuted,
    marginTop: SPACING.sm,
    lineHeight: 20,
  },
});