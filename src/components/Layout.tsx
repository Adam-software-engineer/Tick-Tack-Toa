import {
  View,
  SafeAreaView,
  ViewStyle,
  Image,
  Pressable,
  Linking,
} from "react-native";

import Utils from "../common/utils";
import { BackgroundColor, Images } from "../common/const";

interface LayoutPropt {
  style?: ViewStyle;
}

const Layout: React.FC<LayoutPropt> = ({ children, style }) => {
  return (
    <view
      style={{
        backgroundColor: BackgroundColor,
        flex: 1,
        alignContent: "center",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          maxWidth: 480,
          padding: 15,
          ...style,
        }}
      >
        {children}
      </SafeAreaView>

      {Utils.Web() && (
        <Pressable
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
          onPress={() => {
            Linking.openURL("https://github.com/Adam-Software-Engineer");
          }}
        >
          <Image
            source={Images.ForkOnGithub}
            style={{
              width: 130,
              height: 130,
            }}
          />
        </Pressable>
      )}
    </view>
  );
};

export default Layout;
