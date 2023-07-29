import React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./AppHeader.less";

const handleClick = () => {
  Taro.navigateBack();
};
const AppHeader = ({ title, isMainPage = true }) => {
  return (
    <View className="app-header">
      {isMainPage ? (
        <span></span>
      ) : (
        <View className="app-header-back-button" onClick={handleClick}>
          <Image
            className="app-header-back-button-icon"
            src={require("../../assets/image/Setting.svg")}
          />
        </View>
      )}
      <Text>{title}</Text>
    </View>
  );
};

export default AppHeader;
