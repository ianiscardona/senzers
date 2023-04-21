import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const TutorialPresets = (props) => {
  return (
    <>
      <Image style={styles.imageFormat} source={props.img} />
      <View style={styles.descriptionContainer}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          {props.desc.split(" ").map((val, key) => {
            if (["metro.", "parked.", "not."].includes(val))
              return <Text key={key}>{val}</Text>;
            return `${val} `;
          })}
        </Text>
      </View>
    </>
  );
};

export default TutorialPresets;

const styles = StyleSheet.create({
  imageFormat: {
    maxWidth: "100%",
    height: "50%",
    marginBottom: 10,
    resizeMode: "contain",
    backgroundColor: "red",
  },
  descriptionContainer: {
    width: "100%",
    height: "15%",
    backgroundColor: "red",
  },
});
