import React, { FC } from "react";
import { StyleSheet, Animated } from "react-native";
import { metrics, animations } from "op-design";
import { Text } from "op-common";
import { observer } from "mobx-react-lite";
import { scale } from "op-utils";

interface HeaderProps {
  fadeAnimValue: Animated.Value;
  name: string;
  prefix: string;
  fontSize?: number;
}

export const Header: FC<HeaderProps> = observer(function ({
  fadeAnimValue,
  name,
  prefix,
  fontSize = scale(34),
}) {
  const textStyle = {
    fontSize,
  };
  return (
    <Animated.View
      style={[styles.root, animations.fadeSlideTop(fadeAnimValue)]}
    >
      <Animated.View style={styles.identifier}>
        {/* <Animated.View style={styles.textIdentifier}>
          <Text weight="bold" secondary style={[styles.text, textStyle]}>
            {prefix}{" "}
          </Text>
          <Text weight="bold" style={[styles.text, textStyle]}>
            {name}
          </Text>
        </Animated.View> */}
      </Animated.View>
    </Animated.View>
  );
});

const marginTop = metrics.topMargin;
const marginBottom = metrics.topMargin;
const fontSize = scale(34);

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    marginTop,
    marginBottom,
    zIndex: 200,
  },
  identifier: {
    flexDirection: "column",
  },
  text: {
    fontSize,
  },
  textIdentifier: {
    flexDirection: "row",
  },
  logo: {
    alignSelf: "flex-start",
  },
});

export const headerHeight = marginBottom + marginTop + fontSize;
