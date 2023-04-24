import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { TutorialPresetsData } from "../data/TutorialPresetsData";
import TutorialPresets from "./TutorialPresets";
import Colors from "../utilities/Colors";

const Tutorial = ({ onComplete }) => {
  function handleStart() {
    onComplete();
  }
  const Presets = TutorialPresetsData.map((item, index) => {
    return (
      <TutorialPresets
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
    <Modal animationType="slide" visible={true} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={{ width: "80%" }}>{Presets[currentIndex]}</View>
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
                  {
                    backgroundColor: Colors.SECONDARY_LIGHT_YELLOW,
                    width: 200,
                  },
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
      </View>
    </Modal>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: Colors.PRIMARY_WHITE,
    paddingVertical: 15,
    borderRadius: 0,
    width: "90%",
    alignItems: "center",
    height: "auto",
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
    width: 40,
    marginBottom: 10,
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
    justifyContent: "center",
    alignItems: "center",
  },
});
