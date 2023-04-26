import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { db, firebase } from "../../firebase";
import { collection, doc, setDoc, addDoc} from "firebase/firestore";
import Colors from "../utilities/Colors";

const ReportFormModal = ({
  onClose,
  visible,
  onReset,
  onFormDone,
  formDate,
  isSensorActive,
}) => {
  const [vehicleType, setVehicleType] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [timeSeen, setTimeSeen] = useState("");
  const [dateSeen, setDateSeen] = useState("");
  // const user = firebase.auth().currentUser;
  
  function Create () {
    const user = firebase.auth().currentUser;
    addDoc(collection(db, "reports"), {     
          vehicleType: vehicleType,
          plateNumber: plateNumber,
          timeSeen: timeSeen,
          dateSeen: dateSeen,
          UserID: user.uid
        }).then(() => { 
          // Data saved successfully!
          console.log('data submitted');  
    
        }).catch((error) => {
              // The write failed...
              console.log(error);
        });
    }
  const handleSave = () => {
    Create ();
    onReset();
    onClose();
    onFormDone();
  };

  useEffect(() => {
    setTimeSeen(formDate.format("hh:mm:ss"));
    setDateSeen(formDate.format("MMMM Do YYYY"));
  }, []);

  const handleCancel = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you wanna close this message?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            onReset();
            onClose();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={handleCancel}
      transparent={true}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Please fill out this form:
          </Text>
          <View style={styles.line}></View>
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              Vehicle Type:
            </Text>
            <TextInput
              placeholder="Vehicle type"
              placeholderTextColor="gray"
              value={vehicleType}
              onChangeText={setVehicleType}
              style={styles.input}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              Plate Number:
            </Text>
            <TextInput
              placeholder="Plate number"
              placeholderTextColor="gray"
              value={plateNumber}
              onChangeText={setPlateNumber}
              style={styles.input}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              Time Detected:
            </Text>
            <TextInput
              placeholder={timeSeen}
              value={timeSeen}
              style={styles.input}
              editable={false}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              Date Detected:
            </Text>
            <TextInput
              placeholder={dateSeen}
              value={dateSeen}
              style={styles.input}
              editable={false}
            />
          </View>
          <View style={styles.line}></View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={handleCancel}
              style={[
                styles.button,
                {
                  backgroundColor: "#F6F8A3",
                },
              ]}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSave}
              style={[styles.button, { backgroundColor: "#F3F641" }]}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  line: {
    borderBottomColor: Colors.SECONDARY_GRAY,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  input: {
    backgroundColor: "lightgray",
    borderRadius: 999,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: 100,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
  },
});

export default ReportFormModal;
