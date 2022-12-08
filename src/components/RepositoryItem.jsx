import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import RepositoryStats from "./RepositoryStats.jsx";
import theme from "../theme.js";

const RepositoryItemHeader = ({ owner, name, description, language }) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: owner.avatar_url }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold">{name}</StyledText>
      <StyledText color="secondary">
        {description ? description : `No description`}
      </StyledText>
      <StyledText style={styles.language}>
        {language ? language : `No language`}
      </StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
    <View
      style={{
        flex: 1,
        height: 2,
        backgroundColor: theme.colors.textPrimary,
        marginTop: 10,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
