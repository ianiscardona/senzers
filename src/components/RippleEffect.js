import { StyleSheet, View } from "react-native";
import React, { useMemo, useState, useEffect } from "react";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import Colors from "../utilities/Colors";
import moment from "moment";

const _size = 85;

const RippleEffect = ({ isActive }) => {
  const dotColor = isActive ? "red" : Colors.PRIMARY_YELLOW;

  const dots = useMemo(
    () =>
      [...Array(3).keys()].map((index) => (
        <MotiView
          key={`${index}-${isActive}`}
          from={{ opacity: 0.7, scale: 0 }}
          animate={{ opacity: 0, scale: 3.5 }}
          transition={{
            type: "timing",
            duration: 2000,
            easing: Easing.out(Easing.ease),
            delay: index * 1000,
            repeatReverse: false,
            loop: true,
          }}
          style={[
            StyleSheet.absoluteFillObject,
            styles.dot,
            { backgroundColor: dotColor },
          ]}
        />
      )),
    [dotColor]
  );
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.dot, styles.center]}>{dots}</View>
      </View>
    </>
  );
};

export default RippleEffect;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
