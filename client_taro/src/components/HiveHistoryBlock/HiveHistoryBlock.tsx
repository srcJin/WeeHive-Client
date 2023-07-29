import React from "react";
import { View, Image } from "@tarojs/components";
import "./HiveHistoryBlock.less";

const HiveHistoryBlock = () => {
  return (
    <View className="history-block">
      <View className="history-block-title">View Historical Data</View>
      <View className="history-block-content">
        <Image
          className="next-page"
          src={require("../../assets/image/Setting.svg")}
        />
      </View>
    </View>
  );
};

export default HiveHistoryBlock;
