import ModalWinner from "@/components/Modal";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Truco() {
  const [usCount, setUsCount] = useState(0);
  const [theyCount, setTheyCount] = useState(0);
  const [usVictories, setUsVictories] = useState(0);
  const [theyVictories, setTheyVictories] = useState(0);
  const [winner, setWinner] = useState<"us" | "they" | null>(null);

  const incrementUs = () =>
    setUsCount((prev) => (prev >= 14 ? victoryUs() : prev + 1));

  const incrementThey = () =>
    setTheyCount((prev) => (prev >= 14 ? victoryThey() : prev + 1));

  const decrementUs = () => setUsCount((prev) => (prev > 0 ? prev - 1 : 0));

  const decrementThey = () => setTheyCount((prev) => (prev > 0 ? prev - 1 : 0));

  const resetPoints = () => {
    setTheyCount(0);
    setUsCount(0);
  };

  const resetVictories = () => {
    setUsVictories(0);
    setTheyVictories(0);
    console.log("Resetar vitórias");
  };

  const victoryUs = () => {
    setUsVictories((prev) => prev + 1);
    resetPoints();
    setWinner("us");
    // Alert.alert("Vitória!", "NÓS ganhamos a partida 🏆");
    console.log("Vitória para NÓS");

    return 0;
  };

  const victoryThey = () => {
    setTheyVictories((prev) => prev + 1);
    resetPoints();
    setWinner("they");
    // Alert.alert("Vitória!", "ELES ganharam a partida 🏆");
    console.log("Vitória para ELES");

    return 0;
  };

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Conta Tento!!</Text>
      </View>

      {/* Score Container */}
      <View style={styles.scoreContainer}>
        {/* Team "Nós" */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamLabel}>NÓS</Text>

          {/* Score Display */}
          <Text
            style={[styles.scoreDisplay, usCount === 14 && { color: "red" }]}
          >
            {usCount}
          </Text>

          {/* Trophies indicator */}
          <View style={styles.trophyContainer}>
            <Text style={styles.trophy}>🏆</Text>
            <Text style={styles.trophyCount}>{usVictories}</Text>
          </View>

          {/* Control buttons */}
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={styles.incrementButton}
              onPress={incrementUs}
            >
              <Text style={styles.buttonText}>+ 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.decrementButton}
              onPress={decrementUs}
            >
              <Text style={styles.decrementText}>- 1</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Team "Eles" */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamLabel}>ELES</Text>

          {/* Score Display */}
          <Text
            style={[styles.scoreDisplay, theyCount === 14 && { color: "red" }]}
          >
            {theyCount}
          </Text>

          {/* Trophies indicator */}
          <View style={styles.trophyContainer}>
            <Text style={styles.trophyCount}>{theyVictories}</Text>
            <Text style={styles.trophy}>🏆</Text>
          </View>

          {/* Control buttons */}
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={styles.incrementButton}
              onPress={incrementThey}
            >
              <Text style={styles.buttonText}>+ 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.decrementButton}
              onPress={decrementThey}
            >
              <Text style={styles.decrementText}>- 1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Reset Buttons */}
      <View style={styles.resetContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={resetPoints}>
          <Text style={styles.resetButtonText}>ZERAR PONTOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={resetVictories}>
          <Text style={styles.resetButtonText}>ZERAR VITÓRIAS</Text>
        </TouchableOpacity>
      </View>
      {/* Chamando o ModalWinner */}
      <ModalWinner winner={winner} setWinner={setWinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  teamContainer: {
    alignItems: "center",
    flex: 1,
  },
  teamLabel: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    letterSpacing: 1,
  },
  scoreDisplay: {
    color: "#FFFFFF",
    fontSize: 120,
    fontWeight: "bold",
    marginBottom: 10,
  },
  trophyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 5,
  },
  trophy: {
    fontSize: 16,
  },
  trophyCount: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  controlsContainer: {
    alignItems: "center",
    gap: 10,
  },
  incrementButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  decrementButton: {
    backgroundColor: "#FF0000",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  decrementText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  resetContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  resetButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 0.45,
  },
  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
