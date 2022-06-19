import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';


const screen = Dimensions.get("window");
const btnWidth = screen.width / 4;

export default ({ onPress, text, size, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];
  
    if (size === "double") {
      buttonStyles.push(styles.buttonDouble);
    }
  
    if (theme === "secondary") {
      buttonStyles.push(styles.buttonSecondary);
      textStyles.push(styles.textSecondary);
    } else if (theme === "accent") {
      buttonStyles.push(styles.buttonAccent);
    }
  
    return (
      <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    text: {
      color: "#fff",
      fontSize: 25
    },
    textSecondary: {
      color: "#494848"
    },
    button: {
      backgroundColor: "#333333",
      flex: 1,
      height: Math.floor(btnWidth - 10),
      alignItems: "center",
      justifyContent: "center",
      borderRadius: Math.floor(btnWidth),
      margin: 5
    },
    buttonDouble: {
      width: screen.width / 2 - 10,
      flex: 0,
      alignItems: "flex-start",
      paddingLeft: 40
    },
    buttonSecondary: {
      backgroundColor: "#cbc8c8"
    },
    buttonAccent: {
      backgroundColor: "#ffca8b"
    }
  });