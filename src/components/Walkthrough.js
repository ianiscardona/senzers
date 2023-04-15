import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { WalkthroughPresetsData } from "../data/WalkthroughPresetsData";
import WalkthroughPresets from "./WalkthroughPresets";
import { TouchableOpacity } from "react-native-gesture-handler";

const Walkthrough = ({ onComplete }) => {
  function handleStart() {
    onComplete();
  }
  const Presets = WalkthroughPresetsData.map((item, index) => {
    return (
      <WalkthroughPresets
        key={index}
        id={item.id}
        header={item.header}
        img={item.img}
        desc={item.desc}
      />
    );
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const previous = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? 0 : currentIndex - 1
    );
  const next = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === Presets.length - 1
        ? Presets.length - 1
        : currentIndex + 1
    );
  return (
    <View style={styles.container}>
      <View style={styles.walkthroughContainer}>{Presets[currentIndex]}</View>
      <View style={styles.paginationContainer}>
        {Presets.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.paginationCircle,
                currentIndex === index
                  ? styles.paginationActive
                  : styles.paginationInactive,
              ]}
            />
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        {currentIndex === 0 ? null : (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#ECF4EF" }]}
            onPress={previous}
          >
            <Text style={{ fontSize: 14 }}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentIndex === Presets.length - 1 ? (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#EBC55B" }]}
            onPress={handleStart}
          >
            <Text style={{ fontSize: 14 }}>Start</Text>
          </TouchableOpacity>
        ) : currentIndex === 0 ? (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#EBC55B", width: 200 }]}
            onPress={next}
          >
            <Text style={{ fontSize: 14 }}>Get Started!</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#EBC55B" }]}
            onPress={next}
          >
            <Text style={{ fontSize: 14 }}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: "10%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  walkthroughContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "80%",
  },
  paginationContainer: {
    flexDirection: "row",
  },
  paginationCircle: {
    height: 10,
    width: 10,
    marginHorizontal: 2,
    borderRadius: 999,
  },
  paginationActive: {
    backgroundColor: "blue",
  },
  paginationInactive: {
    backgroundColor: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 110,
    height: 40,
    borderRadius: 999,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
