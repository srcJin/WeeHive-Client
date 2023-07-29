import { useGlobalIconFont } from "./components/Iconfont/helper";

export default {
  pages: [
    "pages/wiki/index",
    "pages/map/index",
    "pages/community/index",
    "pages/about/index",

    "pages/wiki/pages/character/index",
    "pages/wiki/pages/all-character/index",
    "pages/wiki/pages/all-episode/index",
    "pages/wiki/pages/character-list/index",

    "pages/dashboard/index",
    "pages/dashboard/apiary/manage/index",
    "pages/dashboard/apiary/manage/add/index",
    "pages/dashboard/apiary/manage/edit/index",
    "pages/dashboard/hive/index",
    "pages/dashboard/hive/add/index",

    "pages/notes/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ffffff",
    navigationStyle: "custom",
    navigationBarTextStyle: "white"
  },
  rn: {
    screenOptions: {
      // 设置页面的options，参考https://reactnavigation.org/docs/stack-navigator/#options
      shadowOffset: { width: 0, height: 0 },
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 1,
      borderBottomWidth: 0
    }
  },
  tabBar: {
    color: "#9c9d9e",
    selectedColor: "#262626",
    backgroundColor: "#ebebeb",
    borderStyle: "black",
    custom: false,
    list: [
      {
        pagePath: "pages/wiki/index",
        text: "My Beehive",
        iconPath: "assets/tab/wiki.png",
        selectedIconPath: "assets/tab/wiki_active.png"
      },
      {
        pagePath: "pages/map/index",
        text: "Map",
        iconPath: "assets/tab/game.png",
        selectedIconPath: "assets/tab/game_active.png"
      },
      {
        pagePath: "pages/community/index",
        text: "Community",
        iconPath: "assets/tab/about.png",
        selectedIconPath: "assets/tab/about_active.png"
      },
      {
        pagePath: "pages/about/index",
        text: "My Profile",
        iconPath: "assets/tab/about.png",
        selectedIconPath: "assets/tab/about_active.png"
      }
    ]
  },
  usingComponents: Object.assign(useGlobalIconFont())
};
