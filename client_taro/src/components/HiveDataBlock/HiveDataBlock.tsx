import React from "react";
import { View, Text } from "@tarojs/components";
import { DataPoint, Hive } from "src/types/DataTypes";
import "./HiveDataBlock.less";

interface HiveDataBlockProps {
  hive: Hive;
}

const HiveDataBlock: React.FC<HiveDataBlockProps> = ({ hive }) => {
  const getMeasurement = (measurement: DataPoint) => {
    return `${measurement.value}${measurement.unit}`;
  };

  return (
    <View className="hive-data-block">
      <View className="section-title">
        <Text className="section-title-text">Basic Information</Text>
      </View>
      <View className="data-section">
        <View className="data-section-left">
          <View className="data-section-item">
            <View
              className="data-section-item-icon"
              style={{ backgroundColor: "#00d06d;" }}
            >
              {getMeasurement(hive.weight)}
            </View>
            <Text className="data-section-item-text">Weight</Text>
          </View>
          <View className="data-section-item">
            <View
              className="data-section-item-icon"
              style={{ backgroundColor: "#00d06d;" }}
            >
              {getMeasurement(hive.humidity.inside)}
            </View>
            <Text className="data-section-item-text">In Hive Humidity</Text>
          </View>
          <View className="data-section-item">
            <View
              className="data-section-item-icon"
              style={{ backgroundColor: "#ff4949;" }}
            >
              {getMeasurement(hive.temperature.inside)}
            </View>
            <Text className="data-section-item-text">In Hive Temperature</Text>
          </View>
        </View>
        <View className="data-section-right">
          <View className="data-section-item">
            <View
              className="data-section-item-icon"
              style={{ backgroundColor: "#00d06d;" }}
            >
              {getMeasurement(hive.voice)}
            </View>
            <Text className="data-section-item-text">Voice</Text>
          </View>
          <View className="data-section-item">
            <View
              className="data-section-item-icon"
              style={{ backgroundColor: "#00d06d;" }}
            >
              {getMeasurement(hive.humidity.outside)}
            </View>
            <Text className="data-section-item-text">Out Hive Humidity</Text>
          </View>
          <View className="data-section-item">
            <View
              className="data-section-item-icon"
              style={{ backgroundColor: "#ff4949;" }}
            >
              {getMeasurement(hive.temperature.outside)}
            </View>
            <Text className="data-section-item-text">Out Hive Temperature</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HiveDataBlock;
