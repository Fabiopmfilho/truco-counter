import { Dimensions, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Bem-vindo ao Truco!",
    desc: "Aprenda as regras básicas do jogo.",
    suit: "♠️",
    color: "#2c3e50",
  },
  {
    id: "2",
    title: "Valor das Cartas",
    desc: "Do 4 até o 3, veja a ordem de força.",
    suit: "♥️",
    color: "#e74c3c",
  },
  {
    id: "3",
    title: "Como pedir Truco",
    desc: "Aumente a aposta e pressione os adversários!",
    suit: "♦️",
    color: "#e74c3c",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.containerCard}>
      <Carousel
        width={width * 0.85}
        height={600}
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
    height: 580,
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
    textAlign: "center",
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
