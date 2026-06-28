import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZE, SPACING, RADIUS } from "../../constants/theme";

type MoodCardProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export default function MoodCard({ label, icon }: MoodCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <Ionicons name={icon} size={28} color={COLORS.primaryLight} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 112,
    height: 92,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  label: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.sm,
    fontWeight: "700",
    marginTop: SPACING.sm,
  },
});