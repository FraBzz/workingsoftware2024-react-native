import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/views/HomeScreen";
import { OneSignal } from "react-native-onesignal";
import {ONE_SIGNAL_APP_ID} from "@env"



export default function App() {   
   OneSignal.initialize(ONE_SIGNAL_APP_ID);
   OneSignal.initialize("294c58e6-f5c3-41a3-b21d-7745dcf43437");   
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
