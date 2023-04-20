import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import RippleEffect from "../components/RippleEffect";
import BatteryStatus from "../components/BatteryStatus";
import CustomButton from "../components/CustomButton";
import ReportFormModal from "../components/ReportFormModal";
import BottomNavTopBar from "../components/BottomNavTopBar";
import TimeCounter from "../components/TimeCounter";
import moment from "moment";

const DashboardScreen = ({ navigation }) => {
  const [isSensorActive, setIsSensorActive] = useState(false);
  const [parkedTime, setParkedTime] = useState(moment.duration());

  // const [modalVisible, setModalVisible] = useState(false);

  // const handleOpenModal = () => {
  //   setModalVisible(true);
  // };

  // const handleCloseModal = () => {
  //   setModalVisible(false);
  // };

  return (
    <View style={styles.container}>
      <BottomNavTopBar topBarTitle={"DASHBOARD"} navigation={navigation} />
      <View style={styles.content}>
        <TimeCounter parkedTime={parkedTime} />
        <RippleEffect isSensorActive={true} setParkedTime={setParkedTime} />
        {/* <CustomButton onPress={handleOpenModal} text={"Yes"} />
        {modalVisible && (
          <ReportFormModal visible={modalVisible} onClose={handleCloseModal} />
        )} */}
        <Text style={styles.indicator}>Senzer is in standby...</Text>
        <BatteryStatus />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: "20%",
  },
  content: {
    width: "100%",
    height: "75%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  indicator: { fontWeight: "bold", fontSize: 20 },
});

export default DashboardScreen;
