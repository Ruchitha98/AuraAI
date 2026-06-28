import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";
import PlaylistCard from "../components/ui/PlaylistCard";

const tracks = [
  {
    title: "Calm Piano Focus",
    meta: "Piano • 4:12",
    description: "Soft instrumental focus track.",
    icon: "musical-notes-outline",
  },
  {
    title: "Deep Coding Flow",
    meta: "Ambient • 3:48",
    description: "Low distraction background music.",
    icon: "laptop-outline",
  },
  {
    title: "Night Rain Study",
    meta: "Jazz • 5:01",
    description: "Warm rainy-night atmosphere.",
    icon: "rainy-outline",
  },
] as const;

export default function PlaylistScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <View style={styles.artwork}>
          <Ionicons name="sparkles" size={54} color={COLORS.primaryLight} />
        </View>

        <Text style={styles.label}>AI Generated Playlist</Text>
        <Text style={styles.title}>Deep Focus Coding</Text>
        <Text style={styles.subtitle}>
          Built from your mood: calm, focused, instrumental.
        </Text>

        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={20} color={COLORS.white} />
          <Text style={styles.playText}>Play Playlist</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Tracks</Text>

      {tracks.map((track) => (
        <PlaylistCard
          key={track.title}
          title={track.title}
          meta={track.meta}
          description={track.description}
          icon={track.icon}
        />
      ))}
    </ScrollView>
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
    paddingBottom: 120,
  },
  hero: {
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  artwork: {
    width: 180,
    height: 180,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  label: {
    color: COLORS.primaryLight,
    fontSize: FONT_SIZE.sm,
    fontWeight: "700",
    marginBottom: SPACING.sm,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xxl,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.md,
    textAlign: "center",
    lineHeight: 24,
    marginTop: SPACING.sm,
  },
  playButton: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.xl,
  },
  playText: {
    color: COLORS.white,
    fontWeight: "800",
    marginLeft: SPACING.sm,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.lg,
    fontWeight: "800",
    marginBottom: SPACING.md,
  },
});