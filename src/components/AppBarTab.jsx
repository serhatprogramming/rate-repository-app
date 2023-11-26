import { Pressable, Text, StyleSheet, Alert } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    padding: 15,
    color: theme.colors.appBarTextColor,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ tabName }) => {
  return (
    <Pressable onPress={() => Alert.alert("i am pressed")}>
      <Text style={styles.tab}>{tabName}</Text>
    </Pressable>
  );
};

export default AppBarTab;
