import React from "react";
import { View, Image, Text } from "@tarojs/components";
import "./ApiaryManagementBlock.less";
import Taro from "@tarojs/taro";

interface ApiaryManagementBlockProps {
  numberOfHives: number;
  numberOfWarnings: number;
}

const CreateNumberText = (number: number, text: string) => {
  if (number > 1) {
    return `${number} ${text}s`;
  }
  return `${number} ${text}`;
};

const handleManageApiaryClick = () => {
  Taro.navigateTo({
    url: "/pages/dashboard/apiary/manage/index"
  });
};

const handleAddHivesClick = () => {
  Taro.navigateTo({
    url: "/pages/dashboard/hive/add/index"
  });
};

const ApiaryManagementBlock: React.FC<ApiaryManagementBlockProps> = ({
  numberOfHives,
  numberOfWarnings
}) => {
  return (
    <View className="managementBlock">
      <View className="managementTop">
        <View className="managementTopLeft">
          <Image
            className="managementImage"
            src={require("../../assets/image/Build_booth.svg")}
          />
          <Text>{CreateNumberText(numberOfHives, "Hive")}</Text>
        </View>
        <View className="managementTopRight">
          <Image
            className="managementImage"
            src={require("../../assets/image/Build_booth.svg")}
          />
          <Text>{CreateNumberText(numberOfWarnings, "Warning")}</Text>
        </View>
      </View>
      <View className="managementBottom">
        <View className="managementBottomLeft">
          <View className="managementButtons" onClick={handleAddHivesClick}>
            <View className="managementCircle">
              <Image
                className="editImage"
                src={require("../../assets/image/Setting.svg")}
              />
            </View>
            <Text className="managementText">Add Hives</Text>
          </View>
        </View>
        <View className="managementBottomRight">
          <View className="managementButtons" onClick={handleManageApiaryClick}>
            <View className="managementCircle">
              <Image
                className="editImage"
                src={require("../../assets/image/Setting.svg")}
              />
            </View>
            <Text className="managementText">Manage Apairy</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ApiaryManagementBlock;
