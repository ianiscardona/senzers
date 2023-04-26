import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import BottomNavTopBar from "../components/BottomNavTopBar";
import Colors from "../utilities/Colors";
import { LinearGradient } from "expo-linear-gradient";



const HomeScreen = ({ navigation }) => {
  const [activeStatus, setActiveStatus] = useState(false);

  useEffect(() => {
    console.log(`activeStatus changed to ${activeStatus}`);
  }, [activeStatus]);

  return (
    <View style={styles.container}>
      <BottomNavTopBar topBarTitle={"WELCOME"} navigation={navigation} />
      <View style={styles.context}>
        <View style={styles.graphContainer}>
          <View style={styles.graphDisplay}>
            <Text>__/\___|</Text>
          </View>
        </View>
        <View style={styles.historyDisplay}>
          <View style={styles.reportedContainer}>
            <Text>69</Text>
          </View>
          <View style={styles.notificationContainer}>
            <Text>69</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <LinearGradient
            colors={
              activeStatus
                ? [Colors.PRIMARY_RED, "#f2b6b6", "#f2b6b600"]
                : [Colors.PRIMARY_YELLOW, "#ffeab180", "#ffeab100"]
            }
            style={styles.statusDisplay}
          >
            <Text style={styles.statusText}>
              {activeStatus ? "Vehicle Detected!" : "Detecting Vehicles..."}
            </Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  context: {
    flex: 1,
  },
  graphContainer: {
    flex: 2,
    marginVertical: "2%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: Colors.PRIMARY_BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  graphDisplay: {
    justifyContent: "center",
    alignItems: "center",
    width: "92%",
    height: "100%",
    backgroundColor: Colors.FIELDS_GRAY,
    borderRadius: 20,
    overflow: "hidden",
  },
  historyDisplay: {
    flex: 1,
    marginVertical: "2%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: Colors.PRIMARY_BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
  },
  reportedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: "4%",
    marginRight: "2%",
    backgroundColor: Colors.FIELDS_GRAY,
    borderRadius: 20,
    overflow: "hidden",
  },
  notificationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginRight: "4%",
    marginLeft: "2%",
    backgroundColor: Colors.FIELDS_GRAY,
    borderRadius: 20,
    overflow: "hidden",
  },
  statusContainer: {
    marginTop: "2%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: Colors.NO_GRAY,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.4,
  },
  statusDisplay: {
    justifyContent: "center",
    alignItems: "center",
    width: "92%",
    height: "92%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
  statusText: {
    fontSize: 20,
    textAlign: "center",
  },
});
