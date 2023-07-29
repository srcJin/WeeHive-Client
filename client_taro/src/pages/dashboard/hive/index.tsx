import AppHeader from "@components/AppHeader/AppHeader";
import { View } from "@tarojs/components";
import HiveDataBlock from "@components/HiveDataBlock/HiveDataBlock";
import HiveInfoBlock from "@components/HiveInfoBlock/HiveInfoBlock";
import React from "react";
import { Hive } from "src/types/DataTypes";
import "./index.less";
import useEffect from "react";
import HiveInspectionBlock from "@components/HiveInspectionBlock/HiveInspectionBlock";
import HiveHistoryBlock from "@components/HiveHistoryBlock/HiveHistoryBlock";
import HiveNoteBlock from "@components/HiveNoteBlock/HiveNoteBlock";

const HiveDashboard = () => {
  const data: Hive = {
    name: "Hive 1",
    tags: ["Warning", "Unhealthy"],
    weight: {
      value: 100,
      unit: "kg"
    },
    voice: {
      value: 70,
      unit: "dB"
    },
    humidity: {
      outside: {
        value: 80,
        unit: "%"
      },
      inside: {
        value: 90,
        unit: "%"
      }
    },
    temperature: {
      outside: {
        value: 100,
        unit: "°C"
      },
      inside: {
        value: 100,
        unit: "°C"
      }
    },
    questions: [
      {
        question: "Daily Inspection",
        options: ["Yes", "No"],
        answer: "Yes"
      },
      {
        question: "Transition",
        options: ["Yes", "No"],
        answer: "Yes"
      },
      {
        question: "Swarm Size",
        options: ["Big", "Small"],
        answer: "Big"
      },
      {
        question: "Queen Numbers",
        options: ["1", "2", "3"],
        answer: "1"
      }
    ]
  };

  const [hive, setHive] = React.useState<Hive>(data);

  const handleInspectionClick = () => {
    setHive({
      ...hive,
      questions: [
        {
          ...hive.questions[0],
          answer: hive.questions[0].answer === "Yes" ? "No" : "Yes"
        }
      ]
    });
  };

  return (
    <View className="hive-page">
      <AppHeader title="Hive Data" isMainPage={false} />
      <View className="hive-block-wrapper">
        <HiveInfoBlock hive={hive} />
      </View>
      <HiveInspectionBlock
        hive={hive}
        handleInspectionClick={handleInspectionClick}
      />
      <HiveDataBlock hive={hive} />
      <HiveHistoryBlock />
      <HiveNoteBlock />
    </View>
  );
};

export default HiveDashboard;
