import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  //! arrays
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    //! calculate Bmi arrow function
    if (!height || !weight) {
      alert("you need to fill both ");
      return;
    }
    const h = parseFloat(height) / 100; //! this will convert cm to m
    const w = parseFloat(weight);

    const bmiValue = (w / (h * h)).toFixed(2); //! actual Bmi calc formula
    setBmi(bmiValue);

    let cat = ""; //! determine category
    if (bmiValue < 18.5) cat = "You Skinny Bitch";
    else if (bmiValue <= 24.9) cat = "You Looking Good bro";
    else if (bmiValue <= 29.9) cat = "Hell naah dawg get a gym membership";
    else cat = "fucking whale 🐋";

    setCategory(cat);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        value={height}
        keyboardType="numeric"
        onChangeText={setHeight} // Update height state
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        keyboardType="numeric"
        onChangeText={setWeight} // Update weight state
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
          <Text style={styles.resultText}>{category}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: "center", flex: 1 },
  title: { fontSize: 29, fontWeight: "bold", marginBottom: 20, color: "red" },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 13,
    marginBottom: 10,
    borderRadius: 15,
  },
  button: { backgroundColor: "red", padding: 15, borderRadius: 25 },
  buttonText: { color: "white", fontSize: 18, textAlign: "center" },
  resultContainer: { marginTop: 20 },
  resultText: { fontSize: 21 },
});
