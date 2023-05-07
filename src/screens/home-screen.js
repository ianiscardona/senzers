import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import BottomNavTopBar from "../components/BottomNavTopBar";
import Colors from "../utilities/Colors";
import homeScreen1 from "../../assets/images/home-hermosa-1.jpg";
import homeScreen2 from "../../assets/images/home-hermosa-2.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { firebase } from "../../firebase";
import { LineChart } from "react-native-chart-kit";
import moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [activeStatus, setActiveStatus] = useState(false);
  const [overallCount, setOverallCount] = useState(0);
  const [overallReported, setOverallReported] = useState(0);
  const [overallDates, setOverallDates] = useState([0]);
  const [dailyReported, setDailyReported] = useState([0]);
  const [dailyCount, setDailyCount] = useState([0]);
  const [uniqueDates, setUniqueDates] = useState([0]);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  useEffect(() => {
    const db = firebase.database();
    db.ref("/magnetometer")
      .orderByChild("createAt")
      .limitToLast(1)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const latestData = Object.values(data)[0];
          console.log("Latest data:", latestData);
          const status = latestData.status;
          console.log(`Latest status: ${status}`);
          setActiveStatus(status);
        }
      });
  }, []);

  const getOverallCount = async () => {
    const snapshot = await firebase.firestore().collection("detected").get();
    const overallCount = snapshot.size;
    setOverallCount(overallCount);
  };
  const getOverallReported = async () => {
    const snapshot = await firebase.firestore().collection("reports").get();
    const overallCount = snapshot.size;
    setOverallReported(overallCount);
  };
  const getDailyCount = async () => {
    const snapshot = await firebase.firestore().collection("detected").get();
    const docs = snapshot.docs.map((doc) => doc.data());
    const dates = docs.map((doc) => doc.dateSeen);
    const formattedDates = dates.map((date) => {
      const momentDate = moment(date, "MMMM Do YYYY");
      return momentDate.format("MM/DD/YY");
    });

    const uniqueDates = [...new Set(formattedDates)];
    const dailyCounts = uniqueDates.map(
      (date) =>
        docs.filter(
          (doc) =>
            moment(doc.dateSeen, "MMMM Do YYYY").format("MM/DD/YY") === date
        ).length
    );

    setUniqueDates(uniqueDates);
    setDailyCount(dailyCounts);
  };

  const getDailyReported = async () => {
    const snapshot = await firebase.firestore().collection("reports").get();
    const docs = snapshot.docs.map((doc) => doc.data());
    const dates = docs.map((doc) => doc.dateSeen);
    const formattedDates = dates.map((date) => {
      const momentDate = moment(date, "MMMM Do YYYY");
      return momentDate.format("MM/DD/YY");
    });

    const uniqueDates = [...new Set(formattedDates)];
    const dailyCounts = uniqueDates.map(
      (date) =>
        docs.filter(
          (doc) =>
            moment(doc.dateSeen, "MMMM Do YYYY").format("MM/DD/YY") === date
        ).length
    );

    setOverallDates(uniqueDates);
    setDailyReported(dailyCounts);
  };

  useEffect(() => {
    getOverallCount();
    getOverallReported();
    getDailyCount();
    getDailyReported();
  }, []);

  const [useOverallData, setUseOverallData] = useState(false);

  const handleDataChange = () => {
    setUseOverallData(!useOverallData);
  };

  const dates = useOverallData
    ? [...overallDates].reverse().slice(1, 5)
    : [...uniqueDates].reverse().slice(1, 5);
  const counts = useOverallData
    ? [...dailyReported].reverse().slice(1, 5)
    : [0, ...dailyCount].reverse().slice(1, 5);

  return (
    <View style={styles.container}>
      <BottomNavTopBar topBarTitle={"WELCOME"} navigation={navigation} />
      <View style={styles.context}>
        <View style={styles.graphContainer}>
          <View style={styles.graphDisplay}>
            <TouchableOpacity
              onPress={handleDataChange}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <Text style={styles.graphText}>
                {useOverallData ? "Daily Reported" : "Daily Detected"}
              </Text>
              <FontAwesome5
                name="exchange-alt"
                size={15}
                color="black"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
            <LineChart
              data={{
                labels: dates,
                datasets: [
                  {
                    data: counts,
                  },
                ],
              }}
              width={windowWidth - 40}
              height={windowHeight * 0.27}
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 0,
                color: (opacity = 1) => Colors.PRIMARY_YELLOW,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                strokeWidth: 2,
                propsForDots: { r: "0" },
              }}
              bezier
              style={{ flex: 1, borderRadius: 20, left: -20 }}
              withVerticalLines={false}
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
                      Reported
                    </Text>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        color: Colors.PRIMARY_WHITE,
                      }}
                    >
                      {overallReported}
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
                      {dailyCount[0]}
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 14, color: Colors.PRIMARY_WHITE }}>
                      Reported
                    </Text>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        color: Colors.PRIMARY_WHITE,
                      }}
                    >
                      {dailyReported[0]}
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
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    height: "100%",
    backgroundColor: Colors.PRIMARY_WHITE,
    borderRadius: 20,
    overflow: "hidden",
  },
  graphText: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: 600,
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
