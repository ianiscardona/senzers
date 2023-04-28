import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import BottomNavTopBar from "../components/BottomNavTopBar";
import Colors from "../utilities/Colors";
import homeScreen1 from "../../assets/images/home-screen-1.png";
import homeScreen2 from "../../assets/images/home-screen-2.png";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { firebase } from "../../firebase";
import { LineChart } from "react-native-chart-kit";
import { parse, format } from "date-fns";

const HomeScreen = ({ navigation }) => {
  const [activeStatus, setActiveStatus] = useState(false);
  const [data, setData] = useState([]);
  const [overallCount, setOverallCount] = useState(0);
  const [currentDateCount, setcurrentDateCount] = useState(0);
  useEffect(() => {
    const db = firebase.database();
    // Listen for the latest data on the "magnetometer" node
    db.ref("/magnetometer")
      .orderByChild("createAt")
      .limitToLast(1)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Get the latest data object
          const latestData = Object.values(data)[0];
          console.log("Latest data:", latestData);
          // Get the value of the "status" field (assuming it's a boolean)
          const status = latestData.status;
          console.log(`Latest status: ${status}`);
          setActiveStatus(status);
        }
      });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const unsubscribe = db
        .collection("detected")
        .where("UserID", "==", currentUser.uid)
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
              dateSeen: data.dateSeen,
              timeSeen: data.timeSeen,
            });
          });

          // Group the data by 3-hour intervals
          const groupedData = items.reduce((acc, item) => {
            const interval = Math.floor(parseInt(item.timeSeen) / 3);
            acc[interval] = (acc[interval] || 0) + 1;
            return acc;
          }, {});

          console.log("Data grouped by 3-hour intervals:", groupedData);
        });

      return () => unsubscribe();
    }
  }, []);

  const getOverallCount = async () => {
    const snapshot = await firebase.firestore().collection("detected").get();
    const overallCount = snapshot.size;
    setOverallCount(overallCount);
    console.log("Count:", overallCount);
  };

  useEffect(() => {
    getOverallCount();
  }, []);

  const getcurrentDateCount = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set time to start of the day

    const snapshot = await firebase.firestore().collection("detected").get();

    let currentDateCount = 0;

    snapshot.forEach((doc) => {
      const dateSeenStr = doc.data().dateSeen;
      const dateSeen = parse(dateSeenStr, "MMMM do yyyy", new Date());

      if (format(dateSeen, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")) {
        currentDateCount++;
      }
    });

    console.log("Count:", currentDateCount);
    setcurrentDateCount(currentDateCount);
  };

  useEffect(() => {
    getcurrentDateCount();
  }, []);

  return (
    <View style={styles.container}>
      <BottomNavTopBar topBarTitle={"WELCOME"} navigation={navigation} />
      <View style={styles.context}>
        <View style={styles.graphContainer}>
          <View style={styles.graphDisplay}>
            <LineChart
              data={{
                labels: ["Overall", "Current Date"],
                datasets: [
                  {
                    data: [overallCount, currentDateCount],
                  },
                ],
              }}
              width={Dimensions.get("window").width - 40}
              height={200}
              chartConfig={{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              bezier
              style={styles.graph}
            />
          </View>
        </View>

        <View style={styles.historyDisplay}>
          <ImageBackground
            source={homeScreen1}
            style={styles.reportedContainer}
          >
            <LinearGradient
              colors={["rgba(62, 62, 62, 0.76)", Colors.PRIMARY_YELLOW]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            >
              <View style={styles.reportedInfoContainer}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: Colors.PRIMARY_WHITE,
                  }}
                >
                  Total Data
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 14, color: Colors.PRIMARY_WHITE }}>
                      Detected
                    </Text>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        color: Colors.PRIMARY_WHITE,
                      }}
                    >
                      {overallCount}
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 14, color: Colors.PRIMARY_WHITE }}>
                      Detected
                    </Text>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        color: Colors.PRIMARY_WHITE,
                      }}
                    >
                      {overallCount}
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
          <ImageBackground
            source={homeScreen2}
            style={styles.notificationContainer}
          >
            <LinearGradient
              colors={["rgba(62, 62, 62, 0.76)", Colors.PRIMARY_RED]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            >
              <View style={styles.reportedInfoContainer}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: Colors.PRIMARY_WHITE,
                  }}
                >
                  Daily Data
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 14, color: Colors.PRIMARY_WHITE }}>
                      Detected
                    </Text>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        color: Colors.PRIMARY_WHITE,
                      }}
                    >
                      {currentDateCount}
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 14, color: Colors.PRIMARY_WHITE }}>
                      Detected
                    </Text>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        color: Colors.PRIMARY_WHITE,
                      }}
                    >
                      {currentDateCount}
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
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
  graph: {
    marginVertical: 8,
    borderRadius: 16,
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
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
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
