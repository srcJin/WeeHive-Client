import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import AllNotes from "@components/AllNotesBlock/AllNotesBlock";
import AppHeader from "@components/AppHeader/AppHeader";
import ApiaryBlock from "@components/ApiaryBlock/ApiaryBlock";
import ApiaryManagementBlock from "@components/ApiaryManagementBlock/ApiaryManagementBlock";
import HiveBlock from "@components/HiveBlock/HiveBlock";
import { Apairy } from "../../types/DataTypes";
import "./index.less";

const UserDashboard = () => {
  const data: Apairy[] = [
    {
      name: "Apiary 1",
      hives: [
        {
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
        },
        {
          name: "Hive 2",
          tags: [],
          weight: {
            value: 100,
            unit: "kg"
          },
          voice: {
            value: 80,
            unit: "dB"
          },
          humidity: {
            outside: {
              value: 60,
              unit: "%"
            },
            inside: {
              value: 80,
              unit: "%"
            }
          },
          temperature: {
            outside: {
              value: 90,
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
        },
        {
          name: "Hive 3",
          tags: [],
          weight: {
            value: 100,
            unit: "kg"
          },
          voice: {
            value: 100,
            unit: "dB"
          },
          humidity: {
            outside: {
              value: 100,
              unit: "%"
            },
            inside: {
              value: 100,
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
        }
      ]
    },
    {
      name: "Apiary 2",
      hives: [
        {
          name: "Hive 1",
          tags: ["Warning", "Unhealthy"],
          weight: {
            value: 100,
            unit: "kg"
          },
          voice: {
            value: 100,
            unit: "dB"
          },
          humidity: {
            outside: {
              value: 100,
              unit: "%"
            },
            inside: {
              value: 100,
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
        }
      ]
    },
    {
      name: "Apiary 3",
      hives: [
        {
          name: "Hive 1",
          tags: ["Warning", "Unhealthy"],
          weight: {
            value: 100,
            unit: "kg"
          },
          voice: {
            value: 100,
            unit: "dB"
          },
          humidity: {
            outside: {
              value: 100,
              unit: "%"
            },
            inside: {
              value: 100,
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
        }
      ]
    },
    {
      name: "Apiary 4",
      hives: [
        {
          name: "Hive 1",
          tags: ["Warning", "Unhealthy"],
          weight: {
            value: 100,
            unit: "kg"
          },
          voice: {
            value: 100,
            unit: "dB"
          },
          humidity: {
            outside: {
              value: 100,
              unit: "%"
            },
            inside: {
              value: 100,
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
        }
      ]
    }
  ];

  const getNumberOfHives = (apiary: Apairy) => {
    return apiary.hives.length;
  };

  const getNumberOfWarnings = (apiary: Apairy) => {
    let count = 0;
    apiary.hives.forEach(hive => {
      hive.tags.forEach(tag => {
        if (tag === "Warning") {
          count++;
        }
      });
    });
    return count;
  };

  const [currentApiary, setCurrentApiary] = useState<Apairy>(data[0]);

  useEffect(() => {
    // console.log(currentApiary);
  }, [currentApiary]);

  return (
    <View className="dashboard">
      <AppHeader title="WeeHive" />

      <View className="user-info">
        <AllNotes />
        <ApiaryBlock
          apiaries={data}
          currentApairy={currentApiary}
          setCurrentApiary={setCurrentApiary}
        />
        <ApiaryManagementBlock
          numberOfHives={getNumberOfHives(currentApiary)}
          numberOfWarnings={getNumberOfWarnings(currentApiary)}
        />
        <View className="hive-wrapper">
          {currentApiary.hives.map(hive => (
            <HiveBlock key={hive.name} hive={hive} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default UserDashboard;
