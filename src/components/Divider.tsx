import { View } from "react-native";
import { ForegroundColor } from "../common/const";

const Divider = () => {
  return (
    <View
      style={{
        backgroundColor: ForegroundColor,
        height: 2,
        marginVertical: 10,
      }}
    ></View>
  );
};

export default Divider;
