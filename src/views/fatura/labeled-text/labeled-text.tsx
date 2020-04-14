import React from "react";
import ReactPDF, { Text, View } from "@react-pdf/renderer";

export interface LabeledTextProps extends ReactPDF.ViewProps {
  size?: number;
}

export const LabeledText: React.FC<LabeledTextProps> = (
  props: LabeledTextProps
) => {
  const { style, size, children, ...rest } = props;

  return (
    <View
      {...rest}
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        height: 17,
        width: "100%",
        padding: "1px 6px 1px 6px",
        ...style,
      }}
    >
      <Text
        wrap
        style={{
          fontSize: size ? size : 7,
          fontFamily: "Roboto",
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default LabeledText;

// flex-end flex-start center
