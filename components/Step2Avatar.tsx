// Step2Avatar.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const AVATARS = [
  { id: 1, uri: "https://i.pravatar.cc/100?img=1" },
  { id: 2, uri: "https://i.pravatar.cc/100?img=2" },
  // ... etc
];

const Step2Avatar: React.FC<Props> = ({ onNext, onBack }) => {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Choisis un avatar</Text>
        <TouchableOpacity onPress={onBack} style={styles.xButton}>
          <Feather size={16} name="x" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        Sélectionne l’image de profil que tu souhaites utiliser.
      </Text>

      <View style={styles.avatarsContainer}>
        {AVATARS.map((avatar) => {
          const isSelected = avatar.id === selectedAvatar;
          return (
            <TouchableOpacity
              key={avatar.id}
              onPress={() => setSelectedAvatar(avatar.id)}
              style={[
                styles.avatarWrapper,
                isSelected && { borderColor: "#02B3FF" },
              ]}
            >
              <Image source={{ uri: avatar.uri }} style={styles.avatarImage} />
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        onPress={onNext}
        style={[styles.primaryButton, !selectedAvatar && { opacity: 0.5 }]}
        disabled={!selectedAvatar}
        activeOpacity={0.9}
      >
        <Text style={styles.primaryButtonText}>Valider et Continuer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Step2Avatar;

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
  avatarsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  avatarWrapper: {
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 50,
    padding: 4,
  },
  avatarImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
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
