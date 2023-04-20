import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import Colors from "../utilities/Colors";

const ImportantModal = ({
  onClose,
  onReset,
  visible,
  ImportantModalTitle,
  ImportantModalContent,
  isSensorActive,
  setIsContinueClicked,
}) => {
  const handleContinue = () => {
    onClose();
    setIsContinueClicked(true);
  };

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
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            {ImportantModalTitle}
          </Text>
          <View style={styles.line}></View>
          <View
            style={{
              justifyContent: "center",
              marginVertical: 20,
              marginHorizontal: 40,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 5,
                textAlign: "center",
              }}
            >
              {ImportantModalContent}
            </Text>
          </View>
          <View style={styles.line}></View>
          <View style={{ flexDirection: "row" }}>
            {isSensorActive ? (
              <>
                <TouchableOpacity
                  onPress={handleContinue}
                  style={[
                    styles.button,
                    {
                      backgroundColor: Colors.PRIMARY_YELLOW,
                      paddingHorizontal: 30,
                    },
                  ]}
                >
                  <Text style={styles.buttonText}>YES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleCancel}
                  style={[
                    styles.button,
                    {
                      backgroundColor: Colors.NO_GRAY,
                      paddingHorizontal: 30,
                    },
                  ]}
                >
                  <Text style={styles.buttonText}>NO</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                onPress={handleCancel}
                style={[
                  styles.button,
                  {
                    backgroundColor: Colors.PRIMARY_YELLOW,
                  },
                ]}
              >
                <Text style={styles.buttonText}>I UNDERSTAND</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 0,
    width: "100%",
    alignItems: "center",
  },
  line: {
    borderBottomColor: Colors.FIELDS_GRAY,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 999,
    marginTop: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default ImportantModal;
