import React from "react";
import {
  Page,
  Document,
  StyleSheet,
  Text,
  View,
  Image,
  Font,
} from "@react-pdf/renderer";

import boleto from "../../assets/images/document-blank.png";
import document2 from "../../assets/images/document-2.png";
import document3 from "../../assets/images/document-3.png";
import { LabeledText } from "./labeled-text";
import { Boleto } from "./boleto";
import { Demonstrativo } from "./demonstrativo";

const styles = StyleSheet.create({
  page: {},
  text: { margin: 10 },
  view: {
    height: "100%",
    width: "100%",
  },

  view2: {
    height: "100%",
    width: "100%",
    opacity: 0.5,
    padding: "15px 15px 15px 55px",
  },

  view3: {
    height: "100%",
    width: "100%",
  },
  view4: {
    height: 516,
    width: "100%",
    backgroundColor: "green",
  },
  view5: {
    width: "100%",
    backgroundColor: "blue",
  },
});

export const Fatura = () => (
  <Document>
    <Page style={styles.page}>
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          src={boleto}
          style={{
            position: "absolute",
            minWidth: "100%",
            minHeight: "100%",
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        />
        <View
          style={{
            padding: "15px 15px 15px 55px",
          }}
        >
          <Demonstrativo />
          <Boleto />
        </View>
      </View>
    </Page>
    <Page style={styles.page}>
      <View style={styles.view}>
        <Image
          src={document2}
          style={{
            position: "absolute",
            minWidth: "100%",
            minHeight: "100%",
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        />
        <Text style={styles.text}>hello</Text>
      </View>
    </Page>
  </Document>
);

export default Fatura;
