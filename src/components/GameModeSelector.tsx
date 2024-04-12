import { Pressable, Text, ViewStyle } from "react-native";
import { Font, ForegroundColor } from "../common/const";

interface GameModeProps {
  title: string;
  onPress?: () => void;
  IsSelected: boolean;
  Disabled: Boolean;
  style?: ViewStyle;
}

const GameModeSelector: React.FC<GameModeProps> = ({
  title,
  onPress,
  IsSelected,
  Disabled,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        height: 40,
        backgroundColor: IsSelected ? ForegroundColor : "transparant",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: ForegroundColor,
        alignContent: "center",
        justifyContent: "center",
        marginVertical: 8,
        marginHorizontal: 4,
        flex: 1,
        ...style,
      }}
      Disabled={Disabled}
    >
      <Text
        style={{
          fontFamily: Font.FontName,
          fontSize: 22,
          color: IsSelected ? "#333027" : ForegroundColor,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default GameModeSelector;
