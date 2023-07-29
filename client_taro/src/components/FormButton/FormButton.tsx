import React from "react";
import { View } from "@tarojs/components";
import "./FormButton.less";

interface FormButtonProps {
  text: string;
  onClick?: () => Promise<TaroGeneral.CallbackResult>;
  style?: React.CSSProperties;
}

const FormButton: React.FC<FormButtonProps> = ({ text, onClick, style }) => {
  return (
    <View className="form-button" style={style} onClick={onClick}>
      {text}
    </View>
  );
};

export default FormButton;
