import React from "react";
import ReactPDF, { View, Text, Image } from "@react-pdf/renderer";

import logo from "../../../assets/images/logos/logocaixa.jpg";
import { Cabecalho } from "./cabecalho";
import { LabeledText } from "../labeled-text";

export interface BoletoProps extends ReactPDF.ViewProps {}

export const Boleto: React.FC<BoletoProps> = (props: BoletoProps) => {
  const { style } = props;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        height: 294,
        ...style,
      }}
    >
      <View
        style={{
          width: 104,
          height: "100%",
        }}
      >
        <Cabecalho>
          <Text style={{ fontSize: 12, fontWeight: 500, paddingLeft: 8 }}>
            104-0
          </Text>
        </Cabecalho>
        <LabeledText></LabeledText>
        <LabeledText>12/04/2020</LabeledText>
        <LabeledText>3009/280295-3</LabeledText>
        <LabeledText>14/400000004525907-7</LabeledText>
        <LabeledText>4830.****.****.2012</LabeledText>
        <LabeledText>1.563,23</LabeledText>
        <LabeledText>1.377,37</LabeledText>
        <LabeledText></LabeledText>
      </View>
      <View
        style={{
          height: "100%",
          width: 421,
        }}
      >
        <Cabecalho>
          <View
            style={{
              width: 70,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={logo}
              style={{ width: 60, height: 17, backgroundColor: "yellow" }}
            />
          </View>
          <View
            style={{
              width: 40,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
              }}
            >
              104-0
            </Text>
          </View>
          <View
            style={{
              width: 311,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 10,
              }}
            >
              10492.80298 53400.100045 00452.590730 4 00000000000000
            </Text>
          </View>
        </Cabecalho>

        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              width: 335,
              height: "100%",
            }}
          >
            <View>
              <LabeledText style={{ alignItems: "flex-start" }}>
                PREFERENCIALMENTE NAS CASAS LOTÉRICAS ATÉ O VALOR LIMITE.
              </LabeledText>
            </View>

            <View
              style={{
                padding: "1px 16px 1px 37px",
                height: 16,
              }}
            >
              <Text
                style={{
                  height: "100%",
                  fontSize: 5.8,
                }}
              >
                Banco PAN S. A. CNPJ: 59.285.411/0001-13 Av. Paulista, 1.374 -
                16 andar Bela Vista - São Paulo - CEP: 01310-100
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 80,
                }}
              >
                <LabeledText style={{ alignItems: "center" }}>
                  02/04/2020
                </LabeledText>
              </View>
              <View
                style={{
                  width: 93,
                }}
              >
                <LabeledText style={{ alignItems: "center" }}>
                  4830.****.****.2012
                </LabeledText>
              </View>
              <View
                style={{
                  width: 37,
                }}
              >
                <LabeledText style={{ alignItems: "center" }}>RC</LabeledText>
              </View>
              <View
                style={{
                  width: 34,
                }}
              >
                <LabeledText style={{ alignItems: "center" }}>N</LabeledText>
              </View>
              <View
                style={{
                  width: 90,
                }}
              >
                <LabeledText style={{ alignItems: "center" }}>
                  03/04/2020
                </LabeledText>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 80,
                }}
              >
                <LabeledText style={{ alignItems: "center" }} />
              </View>
              <View
                style={{
                  width: 93,
                }}
              >
                <LabeledText style={{ alignItems: "center" }}>RG</LabeledText>
              </View>
              <View
                style={{
                  width: 37,
                }}
              >
                <LabeledText style={{ alignItems: "center" }}>R$</LabeledText>
              </View>
              <View
                style={{
                  width: 34,
                }}
              >
                <LabeledText style={{ alignItems: "center" }} />
              </View>
              <View
                style={{
                  width: 90,
                }}
              >
                <LabeledText style={{ alignItems: "center" }} />
              </View>
            </View>

            <View
              style={{
                height: 105,
                padding: "12px 10px 10px 10px",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontSize: 5.5 }}>
                IMPORTANTE: O PAGAMENTO DESTE BOLETO É ACEITO EM TODA A REDE
                BANCÁRIA (INCLUSIVE LOTÉRICAS) ATÉ 07/05/2020.
              </Text>
              <Text style={{ fontSize: 5.5 }}> </Text>
              <Text style={{ fontSize: 5.5 }}>
                APÓS ESTA DATA, UTILIZAR O BOLETO DA SUA PRÓXIMA FATURA.
                PREENCHA O CAMPO VALOR COBRADO E ESCOLHA UMA DAS OPÇÕES DE
                PAGAMENTO DISPONÍVEIS NESTA FATURA. EM CASO DE ATRASO, CONSULTE
                O VALOR ATUALIZADO DO SALDO DEVEDOR PARA O DIA DO PAGAMENTO.
                CASO NÃO EFETUE O PAGAMENTO CONSIDERANDO O SALDO DEVEDOR
                ATUALIZADO, OS ENCARGOS DECORRENTES SERÃO INCLUÍDOS NA PROXIMA
                FATURA.
              </Text>
              <Text style={{ fontSize: 5.5 }}> </Text>

              <Text style={{ fontSize: 5.5 }}>
                PARA SUA COMODIDADE, CADASTRE A FATURA DO SEU CARTÃO NO DÉBITO
                DIRETO AUTORIZADO (DDA) NO BANCO DE SUA PREFERÊNCIA.
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 86,
              height: "100%",
            }}
          >
            <LabeledText>12/04/2020</LabeledText>
            <LabeledText>3009/280295-3</LabeledText>
            <LabeledText>14/400000004525907-7</LabeledText>
            <LabeledText>1.563,23</LabeledText>
            <LabeledText>Desconto</LabeledText>
            <LabeledText>Outras</LabeledText>
            <LabeledText>Multa</LabeledText>
            <LabeledText>Acrescimos</LabeledText>
            <LabeledText style={{ height: 36 }}>Acrescimos</LabeledText>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        />
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        />
      </View>
    </View>
  );
};

export default Boleto;
