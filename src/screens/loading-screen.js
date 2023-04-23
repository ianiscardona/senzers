import { StyleSheet, View } from "react-native";
import React from "react";
import { MotiView } from "moti";
import Colors from "../utilities/Colors";

const _size = 90;

const LoadingScreen = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <MotiView
        from={{
          width: _size,
          height: _size,
          borderRadius: _size / 2,
          borderWidth: 0,
          shadowOpacity: 0.5,
        }}
        animate={{
          width: _size + 30,
          height: _size + 30,
          borderRadius: (_size + 30) / 2,
          borderWidth: _size / 10,
          shadowOpacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 1000,
          loop: true,
        }}
        style={{
          width: _size,
          height: _size,
          borderRadius: _size / 2,
          borderWidth: _size / 10,
          borderColor: Colors.SECONDARY_LIGHT_YELLOW,
          shadowColor: Colors.SECONDARY_LIGHT_YELLOW,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      ></MotiView>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY_WHITE,
  },
});
