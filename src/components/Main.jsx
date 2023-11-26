import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import Text from "./Text";
import FlexExample from "./FlexExample";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text color="primary">Rate Repository Application</Text>
        <RepositoryList />
      </View>
      <FlexExample />
    </View>
  );
};

export default Main;
