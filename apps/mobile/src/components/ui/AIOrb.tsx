import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/theme";

export default function AIOrb() {
  return (
    <View style={styles.outer}>
      <View style={styles.middle}>
        <View style={styles.inner} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: 54,
    height: 54,
    borderRadius: 999,
    backgroundColor: "rgba(124, 58, 237, 0.22)",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: 18,
    height: 18,
    borderRadius: 999,
    backgroundColor: COLORS.primaryLight,
  },
});