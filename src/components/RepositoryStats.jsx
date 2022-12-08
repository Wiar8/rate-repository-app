import React, { useCallback } from "react";
import { View, Linking, Button } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = ({ stargazers_count, forks, svn_url }) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(svn_url);
  }, [svn_url]);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText fontWeight="bold" align="center">
          {parseThousands(stargazers_count)}
        </StyledText>
        <StyledText align="center">Stars</StyledText>
      </View>

      <View>
        <StyledText fontWeight="bold" align="center">
          {parseThousands(forks)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>

      <View>
        <Button color="#f4a261" title="View repo" onPress={handlePress} />
      </View>
    </View>
  );
};

export default RepositoryStats;
