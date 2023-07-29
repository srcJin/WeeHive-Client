import React from "react";
import { View, Image } from "@tarojs/components";
import "./HiveNoteBlock.less";

const HiveNoteBlock = () => {
  return (
    <View className="hive-note-block">
      <View className="hive-note-block-title">Notes</View>
      <View className="hive-note-block-content">
        <Image
          className="next-page"
          src={require("../../assets/image/ForwardArrow.svg")}
        />
      </View>
    </View>
  );
};

export default HiveNoteBlock;
