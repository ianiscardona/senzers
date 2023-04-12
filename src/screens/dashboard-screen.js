import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import RippleEffect from "../components/RippleEffect";
import BatteryStatus from "../components/BatteryStatus";
import CustomButton from "../components/CustomButton";
import ReportFormModal from "../components/ReportFormModal";

const DashboardScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <RippleEffect />
      <CustomButton onPress={handleOpenModal} text={"Yes"} />
      {modalVisible && (
        <ReportFormModal visible={modalVisible} onClose={handleCloseModal} />
      )}
      <BatteryStatus />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 30,
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default DashboardScreen;
