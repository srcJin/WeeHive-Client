import { View } from "@tarojs/components";
import React from "react";
import "./ApiaryManageButton.less";

interface ApiaryManageButtonProps {
  text: string;
  onClick: () => Promise<TaroGeneral.CallbackResult>;
}

const ApiaryManageButton: React.FC<ApiaryManageButtonProps> = ({
  text,
  onClick
}) => {
  return (
    <View className="apiary-mange-button" onClick={onClick}>
      {text}
    </View>
  );
};

export default ApiaryManageButton;
