import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../constants/theme";
import AIOrb from "../components/ui/AIOrb";

const settings = [
  { title: "AI Preferences", subtitle: "Mood, genres, memory", icon: "sparkles-outline" },
  { title: "Music Sources", subtitle: "Local files and providers", icon: "musical-notes-outline" },
  { title: "Theme", subtitle: "Dark mode enabled", icon: "moon-outline" },
  { title: "Privacy", subtitle: "Control your listening data", icon: "shield-checkmark-outline" },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.profileCard}>
        <AIOrb />
        <Text style={styles.title}>Ruchitha</Text>
        <Text style={styles.subtitle}>AuraAI Listener</Text>
      </View>

      <Text style={styles.sectionTitle}>Settings</Text>

      {settings.map((item) => (
        <TouchableOpacity key={item.title} style={styles.row}>
          <View style={styles.iconCircle}>
            <Ionicons name={item.icon as any} size={22} color={COLORS.primaryLight} />
          </View>

          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>{item.title}</Text>
            <Text style={styles.rowSubtitle}>{item.subtitle}</Text>
          </View>

          <Ionicons name="chevron-forward" size={22} color={COLORS.textMuted} />
        </TouchableOpacity>
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
  profileCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.xl,
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.xl,
    fontWeight: "800",
    marginTop: SPACING.md,
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.lg,
    fontWeight: "800",
    marginBottom: SPACING.md,
  },
  row: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  rowText: {
    flex: 1,
  },
  rowTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.md,
    fontWeight: "800",
  },
  rowSubtitle: {
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
});