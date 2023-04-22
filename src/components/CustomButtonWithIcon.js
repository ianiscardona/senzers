import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { MotiPressable } from "moti/interactions";
import Colors from "../utilities/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomButtonWithIcon = ({
  onPress,
  text,
  width,
  icon,
  color,
  marginRight,
  size,
}) => {
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
      <View
        style={{ marginRight, justifyContent: "center", alignItems: "center" }}
      >
        <FontAwesome5 name={icon} size={size} color={color} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </MotiPressable>
  );
};

export default CustomButtonWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.SPLASH_BLACK,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },

  text: {
    textAlign: "center",
    color: Colors.PRIMARY_WHITE,
    fontSize: 18,
  },
});
