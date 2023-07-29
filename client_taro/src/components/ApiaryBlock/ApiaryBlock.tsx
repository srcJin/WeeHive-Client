import React from "react";
import { View, Text, ScrollView, Button } from "@tarojs/components";
import { Apairy } from "src/types/DataTypes";
import "./ApiaryBlock.less";

interface ApiaryBlockProps {
  apiaries: Apairy[];
  currentApairy: Apairy;
  setCurrentApiary: React.Dispatch<React.SetStateAction<Apairy>>;
}

const isCurrentApiary = (apiary: Apairy, currentApiary: Apairy) => {
  return apiary.name === currentApiary.name;
};

const ApiaryBlock: React.FC<ApiaryBlockProps> = ({
  apiaries,
  currentApairy,
  setCurrentApiary
}) => {
  const handleApiaryChange = (apiary: Apairy) => {
    setCurrentApiary(apiary);
  };

  return (
    <ScrollView className="apiary-block" scrollX scrollWithAnimation>
      <View className="apiary-wrapper">
        {apiaries.map(apiary => {
          return (
            <View key={apiary.name}>
              <Button
                className="apiary-rectangle"
                onClick={() => handleApiaryChange(apiary)}
                style={
                  isCurrentApiary(apiary, currentApairy)
                    ? { backgroundColor: "#f8b933" }
                    : {}
                }
              >
                <Text className="apiary-text">{apiary.name}</Text>
              </Button>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ApiaryBlock;
