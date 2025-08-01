import GlobalStateUser from "@/global/GlobalStateUser";
import AppNavigator from "@/navigation";
import store from "@/store/redux/store";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <GlobalStateUser>
          <AppNavigator />
        </GlobalStateUser>
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
})