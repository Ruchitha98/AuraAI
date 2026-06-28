import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";
import SectionHeader from "../components/ui/SectionHeader";
import PlaylistCard from "../components/ui/PlaylistCard";

const libraryItems = [
  { title: "Liked Songs", icon: "heart", count: "24 songs" },
  { title: "AI Playlists", icon: "sparkles", count: "8 playlists" },
  { title: "Listening History", icon: "time", count: "Recently played" },
];

const playlists = [
  {
    title: "Deep Focus Coding",
    meta: "AI Playlist • 3 hours",
    description: "Your saved focus playlist.",
    icon: "laptop-outline",
  },
  {
    title: "Rainy Evening",
    meta: "AI Playlist • 2 hours",
    description: "Jazz and acoustic songs for calm nights.",
    icon: "rainy-outline",
  },
] as const;

export default function LibraryScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Your Library</Text>
      <Text style={styles.subtitle}>Saved music, AI playlists, and history.</Text>

      <View style={styles.grid}>
        {libraryItems.map((item) => (
          <TouchableOpacity key={item.title} style={styles.tile}>
            <Ionicons name={item.icon as any} size={28} color={COLORS.primaryLight} />
            <Text style={styles.tileTitle}>{item.title}</Text>
            <Text style={styles.tileCount}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <SectionHeader title="Saved Playlists" />

      {playlists.map((playlist) => (
        <PlaylistCard
          key={playlist.title}
          title={playlist.title}
          meta={playlist.meta}
          description={playlist.description}
          icon={playlist.icon}
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
  title: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xxl,
    fontWeight: "800",
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.md,
    marginTop: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  grid: {
    flexDirection: "row",
    gap: SPACING.md,
  },
  tile: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    minHeight: 132,
    justifyContent: "space-between",
  },
  tileTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.sm,
    fontWeight: "800",
  },
  tileCount: {
    color: COLORS.textMuted,
    fontSize: FONT_SIZE.xs,
  },
});