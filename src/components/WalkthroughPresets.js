import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const WalkthroughPresets = (props) => {
  return (
    <>
      <Text style={styles.header}>
        {props.header.split(" ").map((val, key) => {
          if (
            [
              "Lookout!",
              "Radar",
              "Presence",
              "Information",
              "Submit!",
            ].includes(val)
          )
            return <Text key={key}>{val}</Text>;
          return `${val} `;
        })}
      </Text>
      <Image style={styles.imageFormat} source={props.img} />
      <View style={styles.descriptionContainer}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>{props.desc}</Text>
      </View>
    </>
  );
};

export default WalkthroughPresets;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageFormat: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginVertical: 20,
  },
  descriptionContainer: {
    width: "100%",
    height: "15%",
  },
});
