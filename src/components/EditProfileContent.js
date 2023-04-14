import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
const EditProfileContent = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
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
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Edit Profile</Text>
      </View>
      <View style={styles.contentInputContainer}>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Full Name</Text>
          <TextInput
            placeholder="Juan Dela Cruz"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
          />
        </View>

        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>
            Email Address
          </Text>
          <TextInput
            placeholder="juandelacruz@gmail.com"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Phone Number</Text>
          <TextInput
            placeholder="+63 912 345 6789"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Address</Text>
          <TextInput
            placeholder="123 Wagas St. Tondo, Manila"
            placeholderTextColor="black"
            style={[styles.contentInput, { fontStyle: "italic" }]}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Save Successful",
              "You have changed your information succesfully!"
            );
          }}
          style={styles.contentEditButton}
        >
          <Text style={styles.contentEditButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditProfileContent;

const styles = StyleSheet.create({
  contentEditButton: {
    width: 200,
    height: 43,
    backgroundColor: "#292828",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  contentEditButtonText: {
    textAlign: "center",
    color: "white",
  },
  contentInputContainer: {
    marginVertical: 10,
    flex: 1,
    justifyContent: "space-evenly",
  },
  contentInput: {
    borderWidth: 0.5,
    backgroundColor: "lightgray",
    borderRadius: 999,
    padding: 10,
    marginBottom: 10,
  },
  line: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
});
