import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Checkbox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handlePress = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange && onChange(newValue);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <FontAwesome5 name="check" color="white" size={14} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#ccc",
  },
  label: {
    flex: 1,
  },
});

export default Checkbox;
