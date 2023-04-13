import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your privacy is important to us. It is Senzer’s policy to respect your
        privacy regarding any information we may collect from you across our
        mobile app, and other sites we own and operate. We only ask for personal
        information when we truly need it to provide a service to you. We
        collect it by fair and lawful means, with your knowledge and consent. We
        also let you know why we’re collecting it and how it will be used. We
        only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorized access, disclosure, copying, use or modification. We
        don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </Text>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 20,
  },
  text: {
    textAlign: "justify",
    fontSize: 16,
  },
});
