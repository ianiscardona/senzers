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
import userProfileSmall from "../../assets/icons/user-profile-small.png";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Colors from "../utilities/Colors";

const BottomNavTopBar = ({ topBarTitle, navigation }) => {
  const [dateTime, setDateTime] = useState(moment());

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
              source={userProfileSmall}
              alt=""
              style={{ resizeMode: "cover" }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
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
    width: 60,
    height: 60,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_WHITE,
    overflow: "hidden",
  },
});
