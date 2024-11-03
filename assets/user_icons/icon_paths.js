export const iconPaths = {
    "icon1": require("@/assets/user_icons/icon_1.png"),
    "icon2": require("@/assets/user_icons/icon_2.png"),
    "icon3": require("@/assets/user_icons/icon_3.png"),
    "icon4": require("@/assets/user_icons/icon_4.png"),
    "icon5": require("@/assets/user_icons/icon_5.png"),
    "icon6": require("@/assets/user_icons/icon_6.png")
}

// Function to get a random icon from the iconPaths
export const getRandomIcon = () => {
  const keys = Object.keys(iconPaths);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return iconPaths[randomKey];
};