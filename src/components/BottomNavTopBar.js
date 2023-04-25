import {
  Alert,
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
import * as ImagePicker from "expo-image-picker";
import Colors from "../utilities/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BottomNavTopBar = ({ topBarTitle, navigation }) => {
  const [dateTime, setDateTime] = useState(moment());
  const [imageUri, setImageUri] = useState(defaultImage.uri);
  useEffect(() => {
    AsyncStorage.getItem("imageUri").then((value) => {
      if (value !== null) {
        setImageUri(value);
      }
    });
  }, []);

  useEffect(() => {
    if (imageUri) {
      AsyncStorage.setItem("imageUri", imageUri);
    }
    const interval = setInterval(() => {
      setDateTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, [imageUri]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      Alert.alert(
        "Image saved!",
        "The process may take some time. Feel free to continue using the Senzers app!"
      );
    }
  };

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
              navigation.navigate("AccountScreen", {
                pickImage: pickImage,
                imageUri: imageUri,
              });
            }}
          >
            <Image source={{ uri: imageUri }} alt="" style={styles.image} />
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
});
