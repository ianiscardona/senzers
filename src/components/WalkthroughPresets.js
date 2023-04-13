import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const WalkthroughPresets = (props) => {
  return (
    <>
      <Text style={styles.header}>
        {props.header.split(" ").map((val, key) => {
          if (["Lookout!", "Radar", "Presence", "Information"].includes(val))
            return <Text key={key}>{val}</Text>;
          return `${val} `;
        })}
      </Text>
      <Image style={styles.imageFormat} source={props.img} />
      <View style={styles.descriptionContainer}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          {props.desc.split(" ").map((val, key) => {
            if (["metro.", "parked.", "not.", "authorities."].includes(val))
              return <Text key={key}>{val}</Text>;
            return `${val} `;
          })}
        </Text>
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
    // backgroundColor: "blue",
  },
  imageFormat: {
    minWidth: "100%",
    width: "100%",
    height: "65%",
    marginBottom: 10,
    // backgroundColor: "red",
  },
  descriptionContainer: {
    width: "100%",
    height: "15%",
  },
});
