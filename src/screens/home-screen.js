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
          <LinearGradient
            colors={["rgba(255, 188, 0, 0.47)", "#ffeab180"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.reportedContainer}
          >
            <View style={styles.reportedInfoContainer}>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>Total Data</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 14 }}>Detected</Text>
                  <Text style={{ fontSize: 30, fontWeight: 600 }}>24</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 14 }}>Detected</Text>
                  <Text style={{ fontSize: 30, fontWeight: 600 }}>19</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["rgba(219, 48, 48, 0.47)", "#f2b6b6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.notificationContainer}
          >
            <View style={styles.reportedInfoContainer}>
              <Text style={{ fontSize: 16, fontWeight: 600 }}>Daily Data</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 14 }}>Detected</Text>
                  <Text style={{ fontSize: 30, fontWeight: 600 }}>5</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 14 }}>Detected</Text>
                  <Text style={{ fontSize: 30, fontWeight: 600 }}>3</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
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
    marginVertical: "3%",
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
    height: "100%",
    marginLeft: "4%",
    marginRight: "2%",
    backgroundColor: Colors.FIELDS_GRAY,
    borderRadius: 20,
    overflow: "hidden",
  },
  reportedInfoContainer: {
    justifyContent: "space-between",
    flex: 1,
    margin: "7%",
  },
  notificationContainer: {
    flex: 1,
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
