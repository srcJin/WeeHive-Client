import AppHeader from "@components/AppHeader/AppHeader";
import { View } from "@tarojs/components";
import React from "react";
import "./index.less";

const Notes = () => {
  return (
    <View className="notes-page">
      <AppHeader title="Notes" />
    </View>
  );
};

export default Notes;
