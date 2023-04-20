import { StyleSheet, View, Text } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import RippleEffect from "../components/RippleEffect";
import BatteryStatus from "../components/BatteryStatus";
import CustomButton from "../components/CustomButton";
import ReportFormModal from "../components/ReportFormModal";
import BottomNavTopBar from "../components/BottomNavTopBar";
import TimeCounter from "../components/TimeCounter";
import moment from "moment";
import SensorStatusText from "../components/SensorStatusText";
import ImportantModal from "../components/ImportantModal";

const DashboardScreen = ({ navigation }) => {
  const [isSensorActive, setIsSensorActive] = useState(false);
  const [parkedTime, setParkedTime] = useState(moment.duration());
  const [isParkedTimeExpired, setIsParkedTimeExpired] = useState(false);
  const [isContinueClicked, setIsContinueClicked] = useState(false);
  const [rippleEffectActive, setRippleEffectActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const isSensorActiveRef = useRef(false);

  useEffect(() => {
    isSensorActiveRef.current = isSensorActive;
  }, [isSensorActive]);

  const handleClose = () => {
    setIsParkedTimeExpired(false);
  };

  const handleReset = () => {
    setIsSensorActive(false);
    setIsParkedTimeExpired(false);
    setIsContinueClicked(false);
    setRippleEffectActive(false);
    setParkedTime(moment.duration());
  };

  const vehicleDetected = () => {
    setIsSensorActive(true);
    setRippleEffectActive(true);
  };

  return (
    <View style={styles.container}>
      <BottomNavTopBar topBarTitle={"DASHBOARD"} navigation={navigation} />
      <View style={styles.content}>
        <TimeCounter
          setParkedTime={setParkedTime}
          setIsParkedTimeExpired={setIsParkedTimeExpired}
          parkedTime={parkedTime}
          isSensorActive={isSensorActive}
        />
        <RippleEffect isActive={rippleEffectActive} />
        <SensorStatusText
          isSensorActive={isSensorActive}
          isParkedTimeExpired={isParkedTimeExpired}
        />
        {isParkedTimeExpired && isSensorActive ? (
          <ImportantModal
            onReset={handleReset}
            onClose={handleClose}
            setIsContinueClicked={setIsContinueClicked}
            isSensorActive={isSensorActive}
            visible={isParkedTimeExpired}
            ImportantModalTitle={"VEHICLE DETECTED!"}
            ImportantModalContent={"Is it an illegally parked vehicle?"}
          />
        ) : (
          <ImportantModal
            onReset={handleReset}
            onClose={handleClose}
            isSensorActive={isSensorActive}
            visible={isParkedTimeExpired}
            ImportantModalTitle={"Vehicle Suddenly Left"}
            ImportantModalContent={
              "Unfortunately, the vehicle left before we could properly identify its parking status. Thank you for you cooperation and have a wonderful day."
            }
          />
        )}
        {isContinueClicked && isSensorActive ? (
          <ReportFormModal
            visible={isContinueClicked}
            onReset={handleReset}
            onClose={handleClose}
            setIsContinueClicked={setIsContinueClicked}
          />
        ) : null}
        <CustomButton onPress={vehicleDetected} text={"Spawn Car"} />
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
});

export default DashboardScreen;
