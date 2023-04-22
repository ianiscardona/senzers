import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import topBarBG from "../../assets/images/topbar-bg-1.png";
import React, { useEffect, useState, useRef } from "react";
import { MotiView, AnimatePresence } from "moti";
import * as ImagePicker from "expo-image-picker";
import Colors from "../utilities/Colors";

const TopBar = ({ isVisible }) => {
  const [imageUri, setImageUri] = useState(null);

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
                  MY
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
                  Juan Dela Cruz
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
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
              ) : null}
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
    borderColor: Colors.PRIMARY_WHITE,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
