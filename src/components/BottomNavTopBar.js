import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import topBarBG from "../../assets/images/topbar-bg-1.png";
import topBarLogo from "../../assets/icons/topbar-logo.png";
import defaultImage from "../../assets/icons/user-profile-small.png";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Colors from "../utilities/Colors";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase/compat";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BottomNavTopBar = ({
  topBarTitle,
  navigation,
  alertVisible,
  count,
  counts,
}) => {
  const [dateTime, setDateTime] = useState(moment());
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        const { photoURL } = user;
        if (photoURL) {
          setProfileImageUrl(photoURL);
        } else {
          const db = firebase.firestore();
          const userRef = db.collection("users").doc(user.uid);
          const doc = await userRef.get();
          if (doc.exists) {
            const userData = doc.data();
            if (userData && userData.profileImageUrl) {
              setProfileImageUrl(userData.profileImageUrl);
            }
          }
        }
      }
    };

    fetchProfileImage();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.topBar}>
      <View style={styles.topBarInfo}>
        <ImageBackground style={styles.topBarBgImage} source={topBarBG}>
          <View style={{ flexDirection: "row" }}>
            <Image source={topBarLogo} />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={[
                  styles.topBarText,
                  {
                    fontSize: 28,
                  },
                ]}
              >
                {topBarTitle}
              </Text>
              <Text
                style={[
                  styles.topBarText,
                  {
                    fontSize: 14,
                  },
                ]}
              >
                {dateTime.format("MMMM DD, YYYY | dddd")}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => {
              navigation.navigate("AccountScreen");
            }}
          >
            <Image
              source={profileImageUrl ? { uri: profileImageUrl } : defaultImage}
              alt=""
              style={styles.image}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      {alertVisible && (
        <LinearGradient
          style={styles.alertSummaryContainer}
          colors={[
            Colors.PRIMARY_YELLOW,
            "#ffcb3b",
            "rgba(255, 203, 59, 0.62)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.alertSummaryContent}>
            <Text style={styles.alertSummaryText}>
              Vehicle Detected:{" "}
              <Text style={{ fontWeight: 600 }}>{counts}</Text>
            </Text>
            <Text style={styles.alertSummaryText}>
              Vehicle Reported: <Text style={{ fontWeight: 600 }}>{count}</Text>
            </Text>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default BottomNavTopBar;

const styles = StyleSheet.create({
  topBar: {
    zIndex: 1,
    width: "100%",
    minHeight: "20%",
    elevation: 5,
    shadowColor: Colors.PRIMARY_BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  topBarInfo: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  topBarBgImage: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: "5%",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topBarText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },
  circle: {
    zIndex: 1,
    width: 60,
    height: 60,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_WHITE,
    overflow: "hidden",
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  alertSummaryContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: -70,
    alignSelf: "center",
    width: "80%",
    height: 90,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  alertSummaryContent: {
    justifyContent: "space-around",
    height: "70%",
  },
  alertSummaryText: {
    fontSize: 22,
  },
});
