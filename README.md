`# 📱 Bottom-Sheet-Stepper-Registration

<p align="center">
  <video src="https://github.com/user-attachments/assets/2e836497-d281-4587-aeda-38f3e132f43f"/>
</p>
    
## 📌 Objectif

Ce projet est né d’une volonté de simplifier la création de flow de création de compte (ou d’information utilisateur) **directement dans une Bottom Sheet**. À l’aide de `@gorhom/bottom-sheet` et `react-native-reanimated`, on obtient un enchaînement fluide d’écrans (steps) avec transitions et barre de progression animée.

Résultat : un composant réutilisable, élégant et parfaitement intégré aux usages modernes d’applications React Native.

**Note** : Le composant est **inspiré et basé** sur le travail de [Mahdi Davoodi avec son bottom-sheet-stepper](https://github.com/mahdidavoodi7/bottom-sheet-stepper).

## 🎯 Fonctionnalités principales

- **🛠️ Multi-step form** : enchaîne plusieurs écrans pour collecter des informations (profil, avatar, confirmation, etc.).
- **⚙️ BottomSheetStepper** : composant personnalisé, basé sur `@gorhom/bottom-sheet`, permettant de gérer facilement le passage d’un step à l’autre.
- **💫 Animations fluides** : transitions en `FadeIn` et `FadeOut` grâce à `react-native-reanimated`.
- **♻️ Retour en arrière** : possibilité de revenir à l’étape précédente ou de fermer la feuille à tout moment.
- **🚪 Fermeture simplifiée** : un simple `ref.dismiss()` ou clic sur le backdrop referme proprement le flow.

## ⚙️ Technologies utilisées

L'application est développée avec :

- **React Native** (via Expo ou CLI) pour la base de l’application
- **@gorhom/bottom-sheet** pour la gestion des bottom sheets
- **react-native-reanimated** pour des animations performantes
- **TypeScript** (optionnel) pour une meilleure maintenabilité

## 📦 Bibliothèques principales

Voici un aperçu des dépendances utilisées dans le projet :

### 🏗️ **Technologies utilisées**

- [@gorhom/bottom-sheet](https://gorhom.dev/react-native-bottom-sheet/) : création de bottom sheets dynamiques et performantes
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) : moteur d’animation performant et natif

## 🚀 **Comment démarrer ?**

### 1️⃣ Cloner le projet

`git clone https://github.com/VirtuozTM/bottom-sheet-stepper-registration.git`

`cd bottom-sheet-stepper-registration`

### 2️⃣ Installer les dépendances

`npm install`

### 3️⃣ Lancer l'application en mode développement

`npm run start`

📌 **Astuce** : Utilisez l'application Expo Go sur votre téléphone pour tester immédiatement l'application !

## 🏆 **Gestion du flow de navigation**

L’idée principale est de gérer un “Stepper” pour la création de compte, la configuration de profil, etc. :

1. onNextPress / onBackPress : à chaque étape, on dispose de fonctions de callback qui déclenchent le passage à l’étape suivante ou précédente.

2. onEnd : lorsqu’on arrive au dernier écran, on ferme la bottom sheet ou on exécute une action finale (création de compte, envoi d’informations, etc.).

3. onLayout + useSharedValue : on calcule dynamiquement la hauteur de chaque step pour animer l’expansion/réduction fluide.

Avantages :

- Navigation UX-friendly dans une bottom sheet moderne
- Code modulaire : tu peux ajouter autant de steps que souhaité
- Animations non-bloquantes et performantes grâce à Reanimated

## 📬 Contact

Si vous avez des questions ou suggestions, n'hésitez pas à me contacter ! 😊

**Armand PETIT**

🖥️ Développeur React Native

📧 [armand_petit@outlook.fr](mailto:armand_petit@outlook.fr)

📅 [Réserver un appel](https://calendly.com/armand_petit/30min)
`
