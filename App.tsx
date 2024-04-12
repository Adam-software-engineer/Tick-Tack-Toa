import { useEffect, useState } from "react";
import { View, Image } from "react-native";

import * as Fonts from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import { BackgroundColor, Font, Images } from "./src/common/const";
import GameScreen from "./src/screens/GameScreen";
import Utils from "./src/common/utils";

const App = () => {
  const [IsFontLoaded, SetIsFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      await Fonts.loadAsync({
        [Font.FontName]: Font.FontFile,
      });
      await Utils.Sleep(2);
      SetIsFontLoaded(true);
      await SplashScreen.hideAsync();
    })();
  }, []);

  if (!IsFontLoaded)
    return (
      <View style={{ flex: 1, backgroundColor: BackgroundColor }}>
        <Image
          source={Images.Splash}
          style={{ height: "100%", width: "100%" }}
          resizeMode={"contain"}
        />
      </View>
    );

  return (
    <>
      <GameScreen />
      <StatusBar style="light" />
    </>
  );
};

export default App;
