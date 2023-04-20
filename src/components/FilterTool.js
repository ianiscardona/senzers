import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const FilterTool = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = ["All", "Apprehended", "Reported"];

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={handleDropdownClick}
      >
        <Text style={styles.dropdownButtonText}>
          {selectedItem || (
            <FontAwesome5 name="filter" size={16} color="black" />
          )}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownListWrapper}>
          <View style={styles.dropdownList}>
            {items.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => handleItemClick(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  dropdownButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  dropdownButtonText: {
    fontSize: 14,
  },
  dropdownListWrapper: {
    height: 100,
  },
  dropdownList: {
    zIndex: 1,
    position: "absolute",
    top: 20,
    backgroundColor: "white",
    width: 200,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownItem: {
    padding: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    height: 30,
  },
});

export default FilterTool;
