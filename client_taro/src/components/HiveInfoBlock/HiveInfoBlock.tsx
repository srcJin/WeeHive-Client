import React from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Hive } from "src/types/DataTypes";
import "./HiveInfoBlock.less";

interface HiveInfoBlockProps {
  hive: Hive;
}

const getMeasurement = (value: number, unit: string) => {
  return `${value}${unit}`;
};

const getTagSyle = (tag: string) => {
  if (tag === "Warning") {
    return { backgroundColor: "#ff4949", color: "#fff" };
  }
  if (tag == "Unhealthy") {
    return { backgroundColor: "#ff4949", color: "#fff" };
  }
};

const handleOnClick = () => {
  Taro.navigateTo({
    url: "/pages/dashboard/hive/index"
  });
};

const HiveInfoBlock: React.FC<HiveInfoBlockProps> = ({ hive }) => {
  return (
    <View className="hiveBlock">
      <View className="hiveLeft">
        <View className="hiveProfile">
          <Image
            className="hiveProfileImage"
            src={require("../../assets/image/profileIcon.svg")}
          />
        </View>
      </View>
      <View className="hiveMiddle">
        <View className="hiveMiddleTop">
          <Text className="hiveTitle">{hive.name}</Text>
          {hive.tags.map(tag => (
            <Text key={hive.name} style={getTagSyle(tag)} className="hiveTag">
              {tag}
            </Text>
          ))}
        </View>
        <View className="hiveMiddleBottom">
          {getMeasurement(hive.weight.value, hive.weight.unit)},{" "}
          {getMeasurement(hive.voice.value, hive.voice.unit)}
        </View>
      </View>
      <View className="hiveRight">
        <View className="hiveSettings" onClick={handleOnClick}>
          <Image
            className="hiveSettingIcon"
            src={require("../../assets/image/Setting.svg")}
          />
        </View>
      </View>
    </View>
  );
};

export default HiveInfoBlock;
