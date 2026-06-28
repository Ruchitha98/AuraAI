import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";
import SectionHeader from "../components/ui/SectionHeader";
import MoodCard from "../components/ui/MoodCard";
import PlaylistCard from "../components/ui/PlaylistCard";
import AIOrb from "../components/ui/AIOrb";

const moods = [
  { label: "Happy", icon: "happy-outline" },
  { label: "Relax", icon: "leaf-outline" },
  { label: "Focus", icon: "laptop-outline" },
  { label: "Rainy", icon: "rainy-outline" },
  { label: "Sleep", icon: "moon-outline" },
] as const;

const suggestions = [
  {
    title: "Deep Focus Coding",
    meta: "3 hours • Piano • Ambient",
    description: "Instrumental tracks to help you stay in the zone.",
    icon: "laptop-outline",
  },
  {
    title: "Rainy Evening",
    meta: "2 hours • Jazz • Acoustic",
    description: "Warm tunes for a calm rainy night.",
    icon: "rainy-outline",
  },
  {
    title: "Fresh Start Morning",
    meta: "2.5 hours • Indie • Upbeat",
    description: "Positive sounds to start your day.",
    icon: "sunny-outline",
  },
] as const;

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.greeting}>✨ Hello, Ruchitha</Text>
          <Text style={styles.title}>
            What soundtrack{"\n"}should today have?
          </Text>
        </View>

        <AIOrb/>
      </View>

      <Text style={styles.subtitle}>
        Describe your mood, activity, or feeling and Aura will find the perfect music.
      </Text>

      <TouchableOpacity style={styles.askCard}>
        <View style={styles.micCircle}>
          <Ionicons name="mic" size={26} color={COLORS.white} />
        </View>

        <View style={styles.askTextWrap}>
          <Text style={styles.askTitle}>Ask Aura...</Text>
          <Text style={styles.askSubtitle}>Try: “Music for deep focus while coding”</Text>
        </View>

        <Ionicons name="chevron-forward" size={24} color={COLORS.textSecondary} />
      </TouchableOpacity>

      <SectionHeader title="Start with a Mood" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {moods.map((mood) => (
          <MoodCard key={mood.label} label={mood.label} icon={mood.icon} />
        ))}
      </ScrollView>

      <SectionHeader title="AI Suggestions" />

      {suggestions.map((item) => (
        <PlaylistCard
          key={item.title}
          title={item.title}
          meta={item.meta}
          description={item.description}
          icon={item.icon}
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  greeting: {
    color: COLORS.primaryLight,
    fontSize: FONT_SIZE.md,
    marginBottom: SPACING.md,
    fontWeight: "600",
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 38,
    lineHeight: 46,
    fontWeight: "800",
  },
  
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.md,
    lineHeight: 24,
    marginTop: SPACING.lg,
  },
  askCard: {
    marginTop: SPACING.xl,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    flexDirection: "row",
    alignItems: "center",
  },
  micCircle: {
    width: 58,
    height: 58,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  askTextWrap: {
    flex: 1,
  },
  askTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.lg,
    fontWeight: "700",
  },
  askSubtitle: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.sm,
    marginTop: SPACING.xs,
  },
});