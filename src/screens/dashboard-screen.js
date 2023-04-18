import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import RippleEffect from "../components/RippleEffect";
import BatteryStatus from "../components/BatteryStatus";
import CustomButton from "../components/CustomButton";
import ReportFormModal from "../components/ReportFormModal";
import BottomNavTopBar from "../components/BottomNavTopBar";

const DashboardScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <BottomNavTopBar topBarTitle={"DASHBOARD"} />
      <View style={styles.container}>
        <RippleEffect />
        <CustomButton onPress={handleOpenModal} text={"Yes"} />
        {modalVisible && (
          <ReportFormModal visible={modalVisible} onClose={handleCloseModal} />
        )}
        <BatteryStatus />
        <CustomButton
          onPress={() => {
            navigation.navigate("AccountScreen");
          }}
          text={"Settings"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 30,
    width: "100%",
    height: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default DashboardScreen;
