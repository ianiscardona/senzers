import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const TutorialPresets = (props) => {
  return (
    <>
      <Image style={styles.imageFormat} source={props.img} />
      <View style={styles.descriptionContainer}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          {props.desc.split(" ").map((val, key) => {
            if (["HMC", "5983", "A02YYUW"].includes(val.split(",")[0]))
              return (
                <Text style={{ fontWeight: "bold" }} key={key}>
                  {val}{" "}
                </Text>
              );
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
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  descriptionContainer: {
    marginBottom: 30,
  },
});
