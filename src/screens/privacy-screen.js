import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import Colors from "../utilities/Colors";

const PrivacyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={{
            alignSelf: "flex-start",
            width: 25,
            height: 25,
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="angle-left" size={25} color="black" />
        </TouchableOpacity>
        <View
          style={{
            borderRadius: 30,
            overflow: "hidden",
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <Text style={styles.contentTitle}>Privacy Policy</Text>
            <View>
              <Text style={styles.contentPrivacy}>
                Your privacy is important to us. It is Senzer’s policy to
                respect your privacy regarding any information we may collect
                from you across our mobile app, and other sites we own and
                operate.{"\n\n"}We only ask for personal information when we
                truly need it to provide a service to you. We collect it by fair
                and lawful means, with your knowledge and consent. We also let
                you know why we’re collecting it and how it will be used.
                {"\n\n"}
                We only retain collected information for as long as necessary to
                provide you with your requested service. What data we store,
                we’ll protect within commercially acceptable means to prevent
                loss and theft, as well as unauthorized access, disclosure,
                copying, use or modification.{"\n\n"}We don’t share any
                personally identifying information publicly or with
                third-parties, except when required to by law.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  contentContainer: {
    width: "90%",
    height: "90%",
    marginVertical: "10%",
    marginHorizontal: "5%",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollViewContainer: {
    backgroundColor: Colors.PRIMARY_YELLOW,
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  contentPrivacy: {
    fontSize: 16,
    textAlign: "center",
  },
});
