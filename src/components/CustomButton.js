import { StyleSheet, Text } from "react-native";
import React, { useMemo } from "react";
import { MotiPressable } from "moti/interactions";
import Colors from "../utilities/Colors";

const CustomButton = ({ onPress, text, width }) => {
  return (
    <MotiPressable
      onPress={onPress}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            "worklet";

            return {
              opacity: hovered || pressed ? 0.5 : 1,
            };
          },
        []
      )}
      transition={useMemo(
        () =>
          ({ hovered, pressed }) => {
            "worklet";

            return {
              delay: hovered || pressed ? 0 : 100,
            };
          },
        []
      )}
      style={[styles.container, { width }]}
    >
      <Text style={styles.text}>{text}</Text>
    </MotiPressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.SPLASH_BLACK,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
    color: Colors.PRIMARY_WHITE,
    fontSize: 18,
  },
});
