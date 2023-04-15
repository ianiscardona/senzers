import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

const ProfileContent = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Button Pressed", "You pressed the back button!");
        }}
        style={{
          marginBottom: "5%",
          alignSelf: "flex-start",
        }}
      >
        <FontAwesome5 name="arrow-left" size={20} color="black" />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
          // backgroundColor: "blue",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit")}
          style={styles.contentEditButton}
        >
          <Text style={styles.contentEditButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentInfoContainer}>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>Name</Text>
          <Text style={styles.contentInfoItem}>Juan Dela Cruz</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>Email</Text>
          <Text style={styles.contentInfoItem}>juandelacruz@gmail.com</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>Phone</Text>
          <Text style={styles.contentInfoItem}>+63 912 345 6789</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoCategory}>Address</Text>
          <Text style={styles.contentInfoItem}>
            123 Wagas St. Tondo, Manila
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  contentEditButton: {
    width: 100,
    height: 43,
    backgroundColor: "#292828",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    // alignSelf: "flex-end",
  },
  contentEditButtonText: {
    textAlign: "center",
    color: "white",
  },
  contentInfoContainer: {
    marginVertical: 10,
    flex: 1,
    justifyContent: "space-evenly",
  },
  contentInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contentInfoCategory: {
    width: "25%",
    fontSize: 20,
    fontStyle: "italic",
  },
  contentInfoItem: { width: "75%", fontSize: 20, fontWeight: "bold" },
  line: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
});
