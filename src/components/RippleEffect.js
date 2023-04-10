import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const _color = "#141414";
const _size = 85;

const RippleEffect = () => {
  return (
    <View
      style={{
        backgroundColor: "steelblue",
      }}
    >
      <View style={styles.container}>
        <View style={[styles.dot, styles.center]}>
          {[...Array(5).keys()].map((index) => {
            return (
              <MotiView
                from={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: 0, scale: 3.5 }}
                transition={{
                  type: "timing",
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 400,
                  repeatReverse: false,
                  loop: true,
                }}
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
              />
            );
          })}
        </View>
      </View>
      <Text style={styles.indicator}>Senzer is in standby...</Text>
    </View>
  );
};

export default RippleEffect;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: { fontWeight: "bold", fontSize: 20 },
});
