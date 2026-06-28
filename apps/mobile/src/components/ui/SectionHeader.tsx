import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT_SIZE, SPACING } from "../../constants/theme";

type SectionHeaderProps = {
  title: string;
  actionText?: string;
};

export default function SectionHeader({ title, actionText = "See all" }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.action}>{actionText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.xl,
    marginBottom: SPACING.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.lg,
    fontWeight: "800",
  },
  action: {
    color: COLORS.primaryLight,
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
  },
});