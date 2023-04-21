import { StyleSheet, Text, View, ImageBackground } from "react-native";
import topBarBG from "../../assets/images/topbar-bg-1.png";
import React, { useEffect, useState, useRef } from "react";
import { MotiView } from "moti";
import { useIsFocused } from "@react-navigation/native";
import Colors from "../utilities/Colors";

const TopBar = () => {
  const isFocused = useIsFocused();
  const screenKeyRef = useRef(0);

  useEffect(() => {
    if (isFocused) {
      console.log("mf");
      screenKeyRef.current += 1;
    }
  }, [isFocused]);

  return (
    <MotiView
      key={screenKeyRef.current}
      from={{ opacity: 1, translateY: -70 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 1500 }}
      style={styles.topBar}
    >
      <View style={styles.topBarInfo}>
        <ImageBackground style={styles.topBarBgImage} source={topBarBG}>
          <Text
            style={[
              styles.topBarText,
              {
                fontSize: 30,
                marginBottom: 5,
              },
            ]}
          >
            MY
          </Text>
          <Text
            style={[
              styles.topBarText,
              {
                fontSize: 20,
              },
            ]}
          >
            Hello,
          </Text>
          <Text
            style={[
              styles.topBarText,
              {
                fontSize: 25,
              },
            ]}
          >
            Juan Dela Cruz
          </Text>
        </ImageBackground>
      </View>
      <MotiView
        from={{ opacity: 1, translateY: -70, translateX: 140, scale: 0.5 }}
        animate={{ opacity: 1, translateY: 0, translateX: 0, scale: 1 }} // add this line
        transition={{
          type: "timing",
          duration: 1500,
        }}
        style={styles.circle}
      ></MotiView>
    </MotiView>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    zIndex: 1,
    width: "100%",
    minHeight: "30%",
    elevation: 5,
    shadowColor: Colors.PRIMARY_BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  topBarInfo: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  topBarBgImage: {
    flex: 1,
    paddingTop: "10%",
    paddingHorizontal: "5%",
    resizeMode: "cover",
  },
  topBarText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },

  circle: {
    zIndex: 1,
    position: "absolute",
    bottom: -64,
    alignSelf: "center",
    width: 128,
    height: 128,
    backgroundColor: Colors.PRIMARY_WHITE,
    borderRadius: 999,
  },
});
