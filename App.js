import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import WebView from "react-native-webview";

const App = () => {
  const webRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "pink" }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Native web page
        </Text>
      </View>

      <View style={{ height: 400 }}>
        <WebView
          ref={webRef}
          source={{ uri: "https://www.wikipedia.org/" }}
          style={{ width: "100%", height: "100%" }}
          onNavigationStateChange={(e) => {
            const { url } = e;
            if (url.includes("https://www.wikipedia.org/")) {
              const newURL =
                "https://www.google.com/search?client=firefox-b-d&q=react+native";
              const redirectTo = 'window.location = "' + newURL + '"';
              webRef.current.injectJavaScript(redirectTo);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 8,
  },
});
