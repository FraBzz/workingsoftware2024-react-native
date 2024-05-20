import React, { useRef } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./HomeScreen.styles";
import { WebView } from "react-native-webview";
import NavigationBar from "../components/NavigationBar";
import { WEB_VIEW_URL } from "../config/constants";

const HomeScreen = () => {
  const webviewRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webviewRef}
        style={{ flex: 1 }}
        source={{ uri: WEB_VIEW_URL }}
      />
      <NavigationBar
        onBack={() => webviewRef.current?.goBack()}
        onForward={() => webviewRef.current?.goForward()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
