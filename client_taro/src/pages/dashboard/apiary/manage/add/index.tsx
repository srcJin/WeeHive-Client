import React, { useState } from "react";
import { View, Text, Input, Image, Form } from "@tarojs/components";
import "./index.less";
import AppHeader from "@components/AppHeader/AppHeader";
import FormButton from "@components/FormButton/FormButton";
import Taro from "@tarojs/taro";

interface addApariyFormDataModel {
  apariyName: string;
}

const ApairyManageAdd = () => {
  const [apariyFormData, setApariyFormData] = useState<addApariyFormDataModel>({
    apariyName: ""
  });

  const handleFormChange = (e: any) => {
    setApariyFormData({
      apariyName: e.detail.value
    });
  };

  const handleFormCancel = () => {
    setApariyFormData({
      apariyName: ""
    });
  };

  const buttonElements = [
    {
      value: "Cancel",
      onClick: () =>
        Taro.navigateTo({
          url: "/pages/dashboard/index"
        }),
      style: { backgroundColor: "#ccc", marginRight: "5px" }
    },
    {
      value: "Save",
      onClick: () =>
        Taro.navigateTo({
          url: "/pages/dashboard/index"
        }),
      style: { backgroundColor: "#f8b933", marginLeft: "5px" }
    }
  ];

  return (
    <View className="apairy-manage-add">
      <AppHeader title="Manage Apiary" isMainPage={false} />
      <View className="apairy-manage-add-text-wrapper">
        <Text className="apairy-manage-add-text">Add Apiary</Text>
      </View>
      <View className="apairy-manage-add-form-wrapper">
        <Form className="apairy-manage-add-form">
          <View className="apairy-manage-add-input-wrapper">
            <Input
              focus
              className="apairy-manage-add-form-input"
              type="text"
              placeholder="Enter Apiary Name"
              name="apariyName"
              onInput={handleFormChange}
              value={apariyFormData.apariyName}
            />
            <Image
              className="apairy-manage-add-form-cancel-button"
              src={require("../../../../../assets/image/icon_30.svg")}
              onClick={handleFormCancel}
            />
          </View>
          <View className="apairy-manage-add-form-button-wrapper">
            {buttonElements.map((buttonElement, index) => {
              return (
                <FormButton
                  text={buttonElement.value}
                  onClick={buttonElement.onClick}
                  style={buttonElement.style}
                  key={index}
                />
              );
            })}
          </View>
        </Form>
      </View>
    </View>
  );
};

export default ApairyManageAdd;
