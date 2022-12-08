import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
  const [data, setData] = useState([]);

  const getRepos = async () => {
    try {
      const response = await fetch("https://api.github.com/users/wiar8/repos");
      const json = await response.json();

      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
};

export default RepositoryList;
