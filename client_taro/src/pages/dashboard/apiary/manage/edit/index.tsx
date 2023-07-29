import React, { useState } from "react";
import { View, Text, Input, Form, Image } from "@tarojs/components";
import AppHeader from "@components/AppHeader/AppHeader";
import FormButton from "@components/FormButton/FormButton";
import Taro from "@tarojs/taro";
import "./index.less";

interface editApariyFormDataModel {
  apariyName: string;
}

const ApairyManageEdit = () => {
  const [apariyFormData, setApariyFormData] = useState<editApariyFormDataModel>(
    {
      apariyName: ""
    }
  );

  const handleFormChange = (e: any) => {
    setApariyFormData({
      ...apariyFormData,
      [e.target.name]: e.target.value
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
    <View className="apairy-manage-edit">
      <AppHeader title="Manage Apiary" isMainPage={false} />
      <View className="apairy-manage-edit-text-wrapper">
        <Text className="apairy-manage-edit-text">Edit Apiary</Text>
      </View>
      <View className="apairy-manage-edit-form-wrapper">
        <Form className="apairy-manage-edit-form">
          <View className="apairy-manage-edit-input-wrapper">
            <Input
              className="apairy-manage-edit-form-input"
              type="text"
              placeholder="Apiary Name"
              name="apariyName"
              onInput={handleFormChange}
              value={apariyFormData.apariyName}
            />
            <Image
              className="apairy-manage-edit-form-cancel-button"
              src={require("../../../../../assets/image/icon_30.svg")}
              onClick={handleFormCancel}
            />
          </View>
          <View className="apairy-manage-edit-form-button-wrapper">
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

export default ApairyManageEdit;
