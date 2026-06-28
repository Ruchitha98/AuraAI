import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../../constants/theme";

type PlaylistCardProps = {
  title: string;
  meta: string;
  description: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function PlaylistCard({
  title,
  meta,
  description,
  icon = "musical-notes",
}: PlaylistCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.artwork}>
        <Ionicons name={icon} size={32} color={COLORS.primaryLight} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>{meta}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.playButton}>
        <Ionicons name="play" size={18} color={COLORS.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  artwork: {
    width: 76,
    height: 76,
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
  meta: {
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  description: {
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
    lineHeight: 20,
  },
  playButton: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SPACING.sm,
  },
});