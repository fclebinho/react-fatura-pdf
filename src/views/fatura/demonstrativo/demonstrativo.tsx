import React from "react";
import ReactPDF, { View } from "@react-pdf/renderer";

export interface DemonstrativoProps extends ReactPDF.ViewProps {}

export const Demonstrativo: React.FC<DemonstrativoProps> = (
  props: DemonstrativoProps
) => {
  const { style } = props;
  return (
    <View
      {...props}
      style={{
        flex: 1,
        width: "100%",
        height: 517,
        ...style,
      }}
    />
  );
};

export default Demonstrativo;
