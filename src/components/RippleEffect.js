import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const _color = "#EBC55B";
const _size = 85;

const RippleEffect = () => {
  const dots = useMemo(
    () =>
      [...Array(3).keys()].map((index) => (
        <MotiView
          key={index}
          from={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 3.5 }}
          transition={{
            type: "timing",
            duration: 2000,
            easing: Easing.out(Easing.ease),
            delay: index * 1000,
            repeatReverse: false,
            loop: true,
          }}
          style={[StyleSheet.absoluteFillObject, styles.dot]}
        />
      )),
    []
  );

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.dot, styles.center]}>{dots}</View>
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
    paddingBottom: 130,
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
