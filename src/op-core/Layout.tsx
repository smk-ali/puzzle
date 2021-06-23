import React, { FC } from "react";
import { StyleSheet, Platform, Animated, View } from "react-native";
import logo from "./smarkets-logo.svg";
import { animations, metrics } from "op-design";
import { useOnMount, useAnimation, scale } from "op-utils";

// Centers the layout horizontally on the web, clamping it to "webMaxLayoutWidth"
export const Layout: FC = function ({ children }) {
  const fadeInterfaceAnim = useAnimation();
  const fadeInterfaceInAnimDuration = 400;
  const fadeInterfaceIn = () =>
    fadeInterfaceAnim.setup({ duration: fadeInterfaceInAnimDuration });
  useOnMount(() => {
    fadeInterfaceIn().start();
  });
  return Platform.select({
    native: <>{children}</>,
    default: (
      <Animated.View
        style={[styles.root, animations.fadeSlideTop(fadeInterfaceAnim.value)]}
      >
        <View style={styles.img}>
          <img src={logo} height={48} />
        </View>
        <>{children}</>
      </Animated.View>
    ),
  });
};

const styles = StyleSheet.create({
  img: {
    alignSelf: "flex-start",
    marginTop: scale(48),
    marginBottom: scale(16),
    marginHorizontal: metrics.screenMargin,
  },
  root: {
    height: "100%",
    width: "100%",
    maxWidth: metrics.webMaxLayoutWidth,
    alignSelf: "center",
    flex: 1,
  },
});
