import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  userContainer: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  profileInfoContainer: {
    flexDirection: "row",
  },
  profileInfoRight: {
    marginTop: 10,
    paddingLeft: 10,
    alignItems: "flex-start",
  },
  profileName: {
    fontWeight: theme.fontWeights.bold,
  },
  profileLanguage: {
    backgroundColor: theme.colors.primary,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  profileStatsContainer: {
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  statsItem: {
    flexDirection: "column",
    alignItems: "center",
  },
});

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.profileInfoContainer}>
        <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }} />
        <View style={styles.profileInfoRight}>
          <Text style={styles.profileName}>{repo.fullName}</Text>
          <Text>{repo.description}</Text>
          <View style={styles.profileLanguage}>
            <Text style={{ color: "white" }}>{repo.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileStatsContainer}>
        <View style={styles.statsItem}>
          <Text style={{ fontWeight: "bold" }}>
            {(repo.stargazersCount / 1000).toFixed(1)}k
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={{ fontWeight: "bold" }}>
            {(repo.forksCount / 1000).toFixed(1)}k
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={{ fontWeight: "bold" }}>{repo.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={{ fontWeight: "bold" }}>{repo.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
