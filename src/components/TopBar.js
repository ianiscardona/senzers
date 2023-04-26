import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import topBarBG from "../../assets/images/topbar-bg-1.png";
import React, { useEffect, useState } from "react";
import { MotiView, AnimatePresence } from "moti";
import Colors from "../utilities/Colors";
import { firebase } from "../../firebase";
import { QuerySnapshot } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
// import "firebase/storage";

const TopBar = ({ isVisible }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const todoRef = firebase
        .firestore()
        .collection("NewUsers")
        .where("userId", "==", currentUser.uid);

      const unsubscribe = todoRef.onSnapshot(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setFirstName(doc.data().firstName);
          });
        },
        (error) => {
          console.error(error);
        }
      );

      return () => unsubscribe();
    }
  }, []);

  const pickImage = async () => {
    try {
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

      if (!result.canceled && result.assets) {
        const response = await fetch(result.assets[0].uri);
        const blob = await response.blob();

        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child("user-images/" + Date.now());
        const snapshot = await imageRef.put(blob);
        const url = await snapshot.ref.getDownloadURL();

        setImageUrl(url);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <MotiView
          from={{ opacity: 1, translateY: -55 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 700 }}
          exit={{ opacity: 1, translateY: -55 }}
          style={styles.topBar}
        >
          <View style={styles.topBarInfo}>
            <ImageBackground style={styles.topBarBgImage} source={topBarBG}>
              <MotiView
                from={{ opacity: 1, translateX: -55 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ type: "timing", duration: 700 }}
                exit={{ opacity: 1, translateX: -55 }}
              >
                <Text
                  style={[
                    styles.topBarText,
                    {
                      fontSize: 30,
                      marginBottom: 5,
                    },
                  ]}
                >
                  MY PROFILE
                </Text>
                <Text
                  style={[
                    styles.topBarText,
                    {
                      fontSize: 20,
                    },
                  ]}
                >
                  Hello,
                </Text>
                <Text
                  style={[
                    styles.topBarText,
                    {
                      fontSize: 25,
                    },
                  ]}
                >
                  {firstName}
                </Text>
              </MotiView>
            </ImageBackground>
          </View>
          <TouchableOpacity onPress={pickImage}>
            <MotiView
              from={{
                opacity: 1,
                translateY: -70,
                translateX: 140,
                scale: 0.5,
              }}
              animate={{ opacity: 1, translateY: 0, translateX: 0, scale: 1 }}
              exit={{
                opacity: 1,
                translateY: -70,
                translateX: 140,
                scale: 0.5,
              }}
              transition={{
                type: "timing",
                duration: 700,
              }}
              style={styles.circle}
            >
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </MotiView>
          </TouchableOpacity>
        </MotiView>
      )}
    </AnimatePresence>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    zIndex: 1,
    width: "100%",
    minHeight: "30%",
    elevation: 5,
    shadowColor: Colors.PRIMARY_BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  topBarInfo: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  topBarBgImage: {
    flex: 1,
    paddingTop: "10%",
    paddingHorizontal: "5%",
    resizeMode: "cover",
  },
  topBarText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },
  circle: {
    zIndex: 1,
    position: "absolute",
    bottom: -64,
    alignSelf: "center",
    width: 128,
    height: 128,
    backgroundColor: Colors.PRIMARY_WHITE,
    borderRadius: 999,
    overflow: "hidden",
    borderWidth: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
