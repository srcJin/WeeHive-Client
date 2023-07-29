import AppHeader from "@components/AppHeader/AppHeader";
import React from "react";
import "./index.less";
import { View, Text } from "@tarojs/components";
import ApiaryManageButton from "@components/ApiaryManageBlock/ApiaryMangeButton";
import Taro from "@tarojs/taro";

const ApairyManagement = () => {
  const buttonText = ["Edit Apiary", "Add Apiary", "Delete Apiary"];

  const buttonsOnClicks = [
    {
      value: "Edit Apiary",
      onClick: () =>
        Taro.navigateTo({
          url: "/pages/dashboard/apiary/manage/edit/index"
        })
    },
    {
      value: "Add Apiary",
      onClick: () =>
        Taro.navigateTo({
          url: "/pages/dashboard/apiary/manage/add/index"
        })
    },
    {
      value: "Delete Apiary",
      onClick: () =>
        Taro.navigateTo({
          url: "/pages/dashboard/index"
        })
    }
  ];

  return (
    <View className="app-manage-apiary">
      <AppHeader title="Manage Apiary" isMainPage={false} />
      <View className="text-wrapper">
        <Text className="text">Manage Apairy</Text>
      </View>
      <View className="button-wrapper">
        {buttonsOnClicks.map((buttonOnClick, index) => {
          return (
            <ApiaryManageButton
              text={buttonText[index]}
              onClick={buttonOnClick.onClick}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ApairyManagement;
