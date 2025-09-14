import { Dimensions, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Bem-vindo ao Truco!",
    desc: `- Participantes: 2 duplas de jogadores.\n\n- Baralhos: um baralho comum, retirando as cartas 8, 9, 10 e o coringa.\n\n- Distribuição de cartas: três cartas para cada jogador, e vira uma no centro da mesa.\n\n- Objetivo: fazer 12 pontos.
    `,
    suit: "♣️",
    color: "#2c3e50",
  },
  {
    id: "2",
    title: "Como Jogar Truco",
    desc: `1. Após embaralhar, distribua 3 cartas para cada jogador no sentido horário iniciando pelo jogador a sua esquerda.\n\n2. Ao final da distribuição de cartas, revele a carta do topo do monte - a vira, deixando-a sempre visível.\n\n3. As manilhas são as cartas seguintes à vira, de acordo com a ordem das cartas do Truco.\n\n4. Exemplos: se a vira for 6, as cartas de número 7 serão as manilhas; se a vira for 7, a manilha são as Q; se a vira for 2, a manilha será o 3.\n\n5. As 4 manilhas são as cartas que valem mais durante esta rodada, seguindo a ordem dos naipes das manilhas - nas cartas que não são manilhas o naipe não importa.`,
    suit: "♥️",
    color: "#e74c3c",
  },
  {
    id: "3",
    title: "Como Jogar Truco",
    desc: `6. A seguir, inicia-se a primeira mão, formada por até 3 rodadas e que estará valendo 1 ponto. Nessa rodada, cada jogador deve jogar uma carta na mesa e a de maior valor ganha a rodada. Quando uma dupla vencer 2 rodadas, terá ganho os pontos da mão.\n\n7. A qualquer momento, a partir do início da rodada, os jogadores podem pedir truco e assim aumentar o valor da mão.\n\n8. As mãos são feitas sucessivamente, até que uma das duplas chegue a 12 pontos.\n\n9. A mão de 11 já começa valendo 3 pontos.\n\n10. Na mão de ferro, o jogo é jogado da mesma forma, porém os jogadores de truco não podem ver as suas cartas ("no escuro").`,
    suit: "♠️",
    color: "#2c3e50",
  },
  {
    id: "4",
    title: "Ordem das Cartas do Truco",
    desc: `A ordem das cartas do Truco, da mais fraca para a mais forte, é a seguinte: 4, 5, 6, 7, Q, J, K, A, 2, 3, MANILHA\n\nAs manilhas são as cartas que valem mais, e a ordem das manilhas da mais forte para a mais fraca é:\n
      ♣ Paus (mais forte) - conhecidas como ZAP.\n
      ♥ Copas - copas ou copilha.\n
      ♠ Espadas - espadilha\n
      ♦ Ouros (mais fraca) - chamadas também de mole ou pica-fumo.
    `,
    suit: "♦️",
    color: "#e74c3c",
  },
  {
    id: "5",
    title: "Sinais e Gestos Comuns no Truco",
    desc: `♣ Paus(zap) - Piscada.\n♥ Copas - Levantar sobrancelha.\n♠ Espadas - Estufa a bochecha\n♦ Ouros - Língua para fora.`,
    suit: "♣️",
    color: "#2c3e50",
  },
  {
    id: "6",
    title: "Quando posso pedir Truco?",
    desc: `1. O jogador pode trucar somente na sua vez, antes de jogar.\n\n2. Se isso acontecer, a dupla adversária deve decidir se vai aceitar, correr ou pedir 6.\n\n3. Se eles aceitarem, a mão passa a valer 3 pontos e continua normalmente.\n\n4. Se fugirem, a dupla que pediu o truco vence a mão e ganha 1 ponto.\n\n5. No entanto, se a dupla adversária pedir 6, a dupla que pediu o truco deve decidir se vai aceitar, fugir ou pedir 9, e assim segue até 12 pontos.`,
    suit: "♥️",
    color: "#e74c3c",
  },
  {
    id: "7",
    title: "Quando posso pedir Truco?",
    desc: `6. Um jogador só pode aumentar o valor da aposta na seguinte ordem: 3, 6, 9 e 12. Por exemplo, ele não pode pedir 9 se o jogo está valendo 3 nem pedir 6 se o jogo vale 1.\n\n7. Uma dupla não pode pedir truco duas vezes seguidas. Quando uma dupla fugir, a outra dupla leva a mão e o valor atual dela em pontos.\n\nExemplo: a mão está valendo 6 e uma dupla pede 9 - se a dupla adversária fugir, a dupla que pediu 9 ganha 6 pontos (o valor atual da mão). Caso alguma dupla peça Truco na mão de 11, a dupla adversária ganhará a partida.`,
    suit: "♠️",
    color: "#2c3e50",
  },
  {
    id: "8",
    title: "Lembre-se",
    desc: `- O importante no truco é a diversão! Jogue com responsabilidade e respeite seus adversários.\n\n- Abuse da capacidade de blefar para confundir seus adversários\n\n- Sempre se comunique com seu parceiro\n\n- Boa sorte e bom jogo!`,
    suit: "♦️",
    color: "#e74c3c",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.containerCard}>
      <Carousel
        width={width * 0.95}
        height={800}
        data={slides}
        loop={false}
        mode={"parallax"}
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 100,
        }}
        scrollAnimationDuration={800}
        renderItem={({ item, index }) => (
          <View style={[styles.card, { borderColor: item.color }]}>
            <View style={[styles.corner, styles.topLeft]}>
              <Text style={[styles.cornerText, { color: item.color }]}>
                {index + 1}
              </Text>
              <Text style={[styles.suitText, { color: item.color }]}>
                {item.suit}
              </Text>
            </View>

            <View style={[styles.bottomRightCorner]}>
              <Text
                style={[
                  styles.suitText,
                  styles.inverted,
                  { color: item.color },
                ]}
              >
                {item.suit}
              </Text>
              <Text
                style={[
                  styles.cornerText,
                  styles.inverted,
                  { color: item.color },
                ]}
              >
                {index + 1}
              </Text>
            </View>

            <View style={styles.cardContent}>
              <Text style={[styles.suitCenter, { color: item.color }]}>
                {item.suit}
              </Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>

            <View style={styles.decorativePattern}>
              {[...Array(4)].map((_, i) => (
                <Text
                  key={i}
                  style={[styles.patternSuit, { color: item.color }]}
                >
                  {item.suit}
                </Text>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f4c3a",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 780,
    width: "100%",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    position: "relative",
  },
  corner: {
    position: "absolute",
    width: 40,
    height: 60,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topLeft: {
    top: 10,
    left: 10,
  },
  bottomRight: {
    bottom: 10,
    right: 10,
  },
  bottomRightCorner: {
    position: "absolute",
    width: 40,
    height: 60,
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 10,
    right: 10,
  },
  inverted: {
    transform: [{ rotate: "180deg" }],
  },
  cornerText: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 20,
  },
  suitText: {
    fontSize: 16,
    lineHeight: 18,
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    zIndex: 1,
  },
  suitCenter: {
    fontSize: 60,
    marginBottom: 20,
    opacity: 0.8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#2c3e50",
  },
  desc: {
    fontSize: 16,
    textAlign: "left",
    lineHeight: 22,
    color: "#34495e",
  },
  decorativePattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",
    opacity: 0.05,
    zIndex: 0,
    padding: 20,
  },
  patternSuit: {
    fontSize: 40,
    margin: 20,
  },
});
