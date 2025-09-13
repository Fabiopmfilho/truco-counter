import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ModalWinner = ({
  winner,
  setWinner,
}: {
  winner: "us" | "they" | null;
  setWinner: (value: "us" | "they" | null) => void;
}) => {
  return (
    <Modal transparent visible={winner !== null} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            {winner === "us" ? "NÓS VENCEMOS!" : "ELES VENCERAM!"}
          </Text>
          <Text style={styles.modalMessage}>Parabéns! 🏆</Text>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setWinner(null)}
          >
            <Text style={styles.modalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalWinner;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#111",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
