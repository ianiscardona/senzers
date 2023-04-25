import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import AccountNavigator from "../navigations/AccountNavigator";
import TopBar from "../components/TopBar";
import { useIsFocused } from "@react-navigation/native";

const AccountScreen = ({ navigation, route }) => {
  const { pickImage, imageUri } = route.params;
  const isFocused = useIsFocused();
  const [isTopBarVisible, setTopBarVisible] = useState(false);

  const handlePickImage = () => {
    pickImage();
  };
  useEffect(() => {
    setTopBarVisible(true);
  }, []);

  useEffect(() => {
    if (isFocused) {
      setTopBarVisible(true);
    }
  }, [isFocused]);

  const handleNavigate = () => {
    setTopBarVisible(false);
    setTimeout(() => {
      navigation.navigate("DashboardScreen", {
        onScreenFocus: () => setTopBarVisible(true),
      });
    }, 500);
  };

  return (
    <View style={styles.container}>
      <TopBar
        isVisible={isTopBarVisible}
        onPickImage={handlePickImage}
        imageUri={imageUri}
      />
      <View style={styles.content}>
        <AccountNavigator onNavigate={handleNavigate} />
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    zIndex: 0,
    paddingTop: "5%",
    paddingHorizontal: "5%",
    width: "100%",
    height: "70%",
  },
});
