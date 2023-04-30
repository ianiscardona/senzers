import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useRef, useCallback } from "react";
import moment from "moment";
import Colors from "../utilities/Colors";
import { scheduleNotification } from "./Notification";
import { db, firebase } from "../../firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

const TimeCounter = ({
  parkedTime,
  isSensorActive,
  setParkedTime,
  setIsParkedTimeExpired,
  setFormDate,
  setIsSensorActive,
  setIsImportantModalActive,
  isParkedTimeExpired,
  onReset,
}) => {
  const [startTime, setStartTime] = useState(null);
  const [detectedTime, setDetectedTime] = useState(null);
  const intervalIdRef = useRef(null);
  const timeoutIdRef = useRef(null);
  const [timeSeen, setTimeSeen] = useState("");
  const [dateSeen, setDateSeen] = useState("");

  // const user = firebase.auth().currentUser;

  const handleTimeout = useCallback(() => {
    setIsParkedTimeExpired(true);
    console.log("nice");
    scheduleNotification(
      {
        title: "Check the location now!",
        body: "Please confirm if Senzers has detected an illegally parked vehicle.",
      },
      {
        seconds: 1,
      }
    );
    if (!isSensorActive) {
      setIsImportantModalActive(true);
      onReset();
    }
  }, [
    setIsParkedTimeExpired,
    setIsSensorActive,
    setIsImportantModalActive,
    isSensorActive,
  ]);
  const Create = () => {
    const user = firebase.auth().currentUser;
    if (timeSeen && dateSeen && user) {
      addDoc(collection(db, "detected"), {
        timeSeen: timeSeen,
        dateSeen: dateSeen,
        UserID: user.uid,
      })
        .then(() => {
          console.log("data submitted");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Missing required data to create document");
    }
  };

  useEffect(() => {
    if (isSensorActive) {
      const formDateNow = moment();
      setStartTime(moment());
      setFormDate(formDateNow);
      scheduleNotification(
        {
          title: "Vehicle Detected!",
          body: "Please wait while senzers is active.",
        },
        {
          seconds: 1,
        }
      );
    } else {
      setFormDate(null);
      setStartTime(null);
      setParkedTime(moment.duration());
    }
  }, [isSensorActive, setParkedTime]);

  useEffect(() => {
    if (startTime) {
      intervalIdRef.current = setInterval(() => {
        const duration = moment.duration(moment().diff(startTime));
        setParkedTime(duration);
        if (!isSensorActive && !isParkedTimeExpired) {
          console.log("eroeore");
          setTimeSeen(startTime.format("HH:mm:ss"));
          setDateSeen(startTime.format("MMMM Do YYYY"));
          Create();
          onReset();
        }
      }, 1000);
      timeoutIdRef.current = setTimeout(handleTimeout, 5000);

      return () => {
        clearInterval(intervalIdRef.current);
        clearTimeout(timeoutIdRef.current);
      };
    }
  }, [startTime, setParkedTime, handleTimeout]);

  const displayDuration = moment.duration(parkedTime);
  const hours = displayDuration.hours().toString().padStart(2, "0");
  const minutes = displayDuration.minutes().toString().padStart(2, "0");
  const seconds = displayDuration.seconds().toString().padStart(2, "0");
  return (
    <View style={styles.container}>
      {isSensorActive && (
        <>
          <View
            style={[
              styles.timeContainer,
              {
                marginBottom: 10,
              },
            ]}
          >
            <Text style={styles.timeHeaderText}>
              The vehicle is parked for:
            </Text>
          </View>
          <View style={styles.timeDigitsContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeDigitsStyle}>{hours[0]}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeDigitsStyle}>{hours[1]}</Text>
            </View>
            <Text style={styles.timeDigitsStyle}>:</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.timeDigitsStyle}>{minutes[0]}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeDigitsStyle}>{minutes[1]}</Text>
            </View>
            <Text style={styles.timeDigitsStyle}>:</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.timeDigitsStyle}>{seconds[0]}</Text>
            </View>
            <View style={[styles.timeContainer, { marginRight: 0 }]}>
              <Text style={styles.timeDigitsStyle}>{seconds[1]}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default TimeCounter;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
    height: 115,
  },
  timeContainer: {
    backgroundColor: Colors.STATUS_GRAY,
    padding: 10,
    borderRadius: 15,
    marginRight: 5,
    opacity: 0.8,
  },
  timeHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timeDigitsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeDigitsStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
