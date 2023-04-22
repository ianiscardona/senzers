import { StyleSheet, Text, View } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import Colors from "../utilities/Colors";
import { Ionicons } from "@expo/vector-icons";
import { MotiView, AnimatePresence } from "moti";
import { useFocusEffect } from "@react-navigation/native";

const ThanksScreen = ({ navigation }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const onAnimationEnd = useCallback(() => {
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsExiting(true);
      }, 1000);
    }, 3000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      setIsAnimating(true);
      setIsExiting(false);
    }, [])
  );

  useEffect(() => {
    if (isExiting) {
      navigation.navigate("DashboardScreen");
    }
  }, [isExiting]);

  return (
    <View style={styles.container}>
      <AnimatePresence>
        {isAnimating && (
          <>
            <MotiView
              style={styles.circle}
              from={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              delay={400}
              duration={1000}
              onDidAnimate={onAnimationEnd}
            >
              <Ionicons name="checkmark-sharp" size={180} color="white" />
            </MotiView>
            <MotiView
              from={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              delay={300}
              duration={1000}
              onDidAnimate={onAnimationEnd}
            >
              <Text style={styles.text}>THANK YOU FOR SUBMITTING!</Text>
            </MotiView>
          </>
        )}
      </AnimatePresence>
    </View>
  );
};

export default ThanksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY_YELLOW,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
