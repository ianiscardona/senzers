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
import Colors from "../utilities/Colors";

const DashboardScreen = ({ navigation }) => {
  const [isSensorActive, setIsSensorActive] = useState(false);
  const [parkedTime, setParkedTime] = useState(moment.duration());
  const [isParkedTimeExpired, setIsParkedTimeExpired] = useState(false);
  const [isContinueClicked, setIsContinueClicked] = useState(false);
  const [rippleEffectActive, setRippleEffectActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const isSensorActiveRef = useRef(false);
  const [isFormDone, setIsFormDone] = useState(false);

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

  const handleFormDone = () => {
    navigation.navigate("ThanksScreen");
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
            ImportantModalContent={
              "Kindly check if the vehicle is illegally parked?"
            }
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
            onFormDone={handleFormDone}
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
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  content: {
    flex: 1,
    marginBottom: "10%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default DashboardScreen;
