import { Platform } from "react-native";
import { useAvertaFont } from "op-config";

// Font used across the entire app (menu, title, messages, buttons).
// In production it's the "Averta" font.
// I'm not distributing the Averta font on GitHub.
// If you want to contribute, you can toggle off the "useAvertaFont" config
// variable.
const primaryFont = {
  regular: {
    fontFamily: "Source-Sans-Regular",
  },
  semibold: {
    fontFamily: "Source-Sans-Bold",
  },
  bold: {
    fontFamily: "Source-Sans-Bold",
  },
};

// Font used for numbers (just for semibold).
// It's the open-source "Inter" font on Android, "San-Francisco" on iOS.
const secondaryFont = {
  semibold: {
    fontFamily: Platform.OS === "android" ? "Inter-SemiBold" : undefined,
    fontWeight: "600",
  },
  bold: {},
  regular: {},
};

export const fonts = {
  primary: primaryFont,
  secondary: secondaryFont,
};
