// colors sounds and images being imported from the files.

const BackgroundColor = "#212845";
const ForegroundColor = "F8D332";

export { BackgroundColor, ForegroundColor };

export const Font = {
  FontName: "Kanit-Bold",
  FontFile: require("../../assets/fonts/Kanit-Bold.ttf"),
};

export const Images = {
  Splash: require("../../assets/splash.png"),
  ForkOnGithub: require("../../assets/ForkOnGithub.png"),
};

export const sounds = {
  Game_Draw: require("../../assets/sounds/Game_Draw.wav"),
  Game_Won: require("../../assets/sounds/Game_Won.wav"),
  Move_Sound: require("../../assets/sounds/Move_Sound.wav"),
};
