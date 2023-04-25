import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import Logos from "../utilities/Logos";
import Colors from "../utilities/Colors";
import { MotiImage, MotiView } from "moti";

const SplashScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <MotiImage
        source={Logos.SENZERS_LOGO_YELLOW_MAIN}
        alt="splash_logo"
        style={{ width: 100, height: 100 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.7,
          translateY: isLoaded ? 0 : 50,
        }}
        transition={{
          type: "timing",
          duration: 1000,
        }}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY_WHITE,
  },
});
