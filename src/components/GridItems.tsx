import { Text, Pressable } from "react-native";
import { Font, ForegroundColor } from "../common/const";

interface GridItemProps {
  index: number;
  state: "ZERO" | "CROSS" | undefined;
  onPress: (index: number) => void;
  IsWinning: boolean;
}

const GridItems: React.FC<GridItemProps> = ({
  index,
  state,
  onPress,
  IsWinning,
}) => (
  <Pressable
    onPress={() => onPress(index)}
    style={{
      backgroundColor: "#2c3045",
      height: 98,
      width: 98,
      margin: 1,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
    }}
    activeopacity={1}
  >
    {state !== undefined ? (
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: IsWinning ? 65 : 55,
          fontFamily: Font.FontName,
          color: ForegroundColor,
          textShadowColor: IsWinning ? ForegroundColor : undefined,
          textShadowOffset: IsWinning ? { width: -1, height: 1 } : undefined,
          textShadowRadius: IsWinning ? 15 : undefined,
        }}
      >
        {state === "CROSS" ? "X" : "O"}
      </Text>
    ) : (
      <></>
    )}
  </Pressable>
);

export default GridItems;
