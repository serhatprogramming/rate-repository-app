import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  appBar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarColor,
  },
});

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <AppBarTab tabName="Repositories" />
    </View>
  );
};

export default AppBar;
