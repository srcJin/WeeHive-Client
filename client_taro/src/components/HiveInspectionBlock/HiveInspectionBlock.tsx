import React from "react";
import { View } from "@tarojs/components";
import { Hive } from "src/types/DataTypes";
import "./HiveInspectionBlock.less";

interface HiveInspectionBlockProps {
  hive: Hive;
  handleInspectionClick: () => void;
}

const HiveInspectionBlock: React.FC<HiveInspectionBlockProps> = ({
  hive,
  handleInspectionClick
}) => {
  const isActive = (option: string) => {
    return option === hive.questions[0].answer;
  };

  return (
    <View className="inspection-block">
      <View className="inspection-block-title">Inspection</View>
      <View className="inspection-block-content">
        <View
          className="inspection-button"
          onClick={handleInspectionClick}
          style={isActive("Yes") ? { backgroundColor: "#f8b933;" } : {}}
        >
          Yes
        </View>
        <View
          className="inspection-button"
          onClick={handleInspectionClick}
          style={isActive("No") ? { backgroundColor: "#f8b933;" } : {}}
        >
          No
        </View>
      </View>
    </View>
  );
};

export default HiveInspectionBlock;
