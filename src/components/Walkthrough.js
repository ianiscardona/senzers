import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { WalkthroughPresetsData } from "../data/WalkthroughPresetsData";
import WalkthroughPresets from "./WalkthroughPresets";
import Colors from "../utilities/Colors";
import { MotiView, MotiPressable } from "moti";
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
      {currentIndex === 0 ? null : (
        <View style={styles.paginationContainer}>
          {Presets.map((_, index) => {
            return (
              <MotiView
                key={index}
                from={{
                  width: 10,
                  opacity: 1,
                }}
                animate={{
                  width: currentIndex === index ? 30 : 10,
                }}
                style={[
                  styles.paginationCircle,
                  currentIndex === index
                    ? styles.paginationActive
                    : styles.paginationInactive,
                  index === 0 ? { display: "none" } : null,
                ]}
              />
            );
          })}
        </View>
      )}
      <View style={styles.buttonContainer}>
        {currentIndex === 0 ? null : (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: Colors.STATUS_GRAY }]}
            onPress={previous}
          >
            <Text style={{ fontSize: 14 }}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentIndex === Presets.length - 1 ? (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: Colors.SECONDARY_LIGHT_YELLOW },
            ]}
            onPress={handleStart}
          >
            <Text style={{ fontSize: 14 }}>Start</Text>
          </TouchableOpacity>
        ) : currentIndex === 0 ? (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: Colors.SECONDARY_LIGHT_YELLOW, width: 200 },
            ]}
            onPress={next}
          >
            <Text style={{ fontSize: 14 }}>Get Started!</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: Colors.SECONDARY_LIGHT_YELLOW },
            ]}
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
    backgroundColor: Colors.SECONDARY_LIGHT_YELLOW,
  },
  paginationInactive: {
    backgroundColor: Colors.SECONDARY_GRAY,
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
