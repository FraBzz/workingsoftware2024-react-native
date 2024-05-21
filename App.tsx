import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/views/HomeScreen";
import { OneSignal } from "react-native-onesignal";
import { config } from "react-native-dotenv";

// Carica le variabili ambiente dal file .env
config({
  path: "./.env"
});
// Carica le variabili ambiente dal file .env

export default function App() {
  
  console.log(process.env.ONE_SIGNAL_APP_ID);
  OneSignal.initialize(process.env.ONE_SIGNAL_APP_ID);
  OneSignal.Notifications.requestPermission(true);
  
  return (
    <>
      <StatusBar style="light" backgroundColor="#000000" />
      <HomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
