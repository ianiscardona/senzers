import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SensorStatusText = ({ isSensorActive }) => {
  return (
    <View>
      {isSensorActive ? (
        <Text style={styles.indicator}>
          Vehicle presence detected!{"\n"}Senzer is determining parking
          status...
        </Text>
      ) : (
        <Text style={styles.indicator}>Senzer is in standby...</Text>
      )}
    </View>
  );
};

export default SensorStatusText;

const styles = StyleSheet.create({
  indicator: { fontWeight: "bold", fontSize: 20, textAlign: "center" },
});
