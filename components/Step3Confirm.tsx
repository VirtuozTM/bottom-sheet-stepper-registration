// Step3Confirm.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  onBack: () => void;
  onEnd?: () => void; // si on veut fermer direct la BottomSheet
};

const Step3Confirm: React.FC<Props> = ({ onBack, onEnd }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Confirmation</Text>
        <TouchableOpacity onPress={onBack} style={styles.xButton}>
          <Feather size={16} name="x" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        Voici un récapitulatif de ton futur profil. Appuie sur "Terminer" pour
        finaliser ton inscription !
      </Text>

      {/* Ici on peut imaginer un résumé des infos collectées aux steps précédents */}
      <View style={styles.fakeResume}>
        <Text style={styles.resumeText}>Nom: John Doe</Text>
        <Text style={styles.resumeText}>Email: john@doe.com</Text>
        <Text style={styles.resumeText}>Avatar: #2</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (onEnd) onEnd();
        }}
        style={styles.primaryButton}
        activeOpacity={0.9}
      >
        <Text style={styles.primaryButtonText}>Terminer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Step3Confirm;

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
    marginBottom: 20,
  },
  fakeResume: {
    backgroundColor: "#F6F6F6",
    padding: 12,
    borderRadius: 12,
    gap: 4,
    marginBottom: 20,
  },
  resumeText: {
    color: "#333",
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
