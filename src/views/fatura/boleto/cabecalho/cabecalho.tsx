import React from "react";
import ReactPDF, { View } from "@react-pdf/renderer";

export interface CabecalhoProps extends ReactPDF.ViewProps {}

export const Cabecalho: React.FC<CabecalhoProps> = (props: CabecalhoProps) => {
  const { style, children } = props;
  return (
    <View
      {...props}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 23,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Cabecalho;
