import React from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./AllNotesBlock.less";

const handleAllNotesClick = () => {
  Taro.navigateTo({
    url: "/pages/notes/index"
  });
};

const AllNotesBlock = () => {
  return (
    <View className="app-note-block">
      <View className="app-note-block-left">
        <Text className="app-note-block-title">All Notes</Text>
      </View>
      <View className="app-note-block-right">
        <View className="app-note-block-button" onClick={handleAllNotesClick}>
          <Image
            className="app-note-block-icon"
            src={require("../../assets/image/ArrowRight.svg")}
          />
        </View>
      </View>
    </View>
  );
};

export default AllNotesBlock;
