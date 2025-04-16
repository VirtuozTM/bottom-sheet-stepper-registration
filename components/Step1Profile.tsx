// Step1Profile.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const Step1Profile: React.FC<Props> = ({ onNext, onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Créer un compte</Text>
        <TouchableOpacity onPress={onBack} style={styles.xButton}>
          <Feather size={16} name="x" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        Renseigne tes informations de base pour commencer.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Ton nom"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Ton email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        onPress={onNext}
        style={styles.primaryButton}
        activeOpacity={0.9}
      >
        <Text style={styles.primaryButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Step1Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontFamily: "SpaceMonoBold",
    fontWeight: "bold",
    fontSize: 20,
  },
  xButton: {
    backgroundColor: "#ececec",
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "#4c4c4c",
    fontFamily: "SpaceMono",
    marginBottom: 12,
  },
  form: {
    gap: 12,
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontFamily: "SpaceMono",
  },
  primaryButton: {
    backgroundColor: "#02B3FF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "SpaceMonoBold",
    fontSize: 16,
  },
});
