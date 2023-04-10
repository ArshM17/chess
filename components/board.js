import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Piece from "./pieces";

const Board = () => {
  const ROWS = 8;
  const COLUMNS = 8;
  const ROWLABEL = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const board = [];
  for (let i = 0; i < ROWS; i++) {
    const row = [];
    for (let j = 0; j < COLUMNS; j++) {
      const color = (i + j) % 2 === 0 ? "#eeeed2" : "#769655";
      if (j == 0 && i == ROWS - 1) {
        row.push(
          <View>
            <Text style={styles.labelC}>{ROWS - i}</Text>
            <Text style={styles.labelR}>{ROWLABEL[j]}</Text>
            <View style={[styles.square, { backgroundColor: color }]} />
          </View>
        );
      } else if (j == 0) {
        row.push(
          <View>
            <Text style={styles.labelC}>{ROWS - i}</Text>
            <View style={[styles.square, { backgroundColor: color }]} />
          </View>
        );
      } else if (i == ROWS - 1) {
        row.push(
          <View>
            <Text style={styles.labelR}>{ROWLABEL[j]}</Text>
            <View style={[styles.square, { backgroundColor: color }]} />
          </View>
        );
      } else {
        row.push(<View style={[styles.square, { backgroundColor: color }]} />);
      }
    }
    board.push(<View style={styles.row}>{row}</View>);
  }

  return <View style={styles.container}>{board}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 49,
    aspectRatio: 1,
  },
  labelC: {
    position: "absolute",
    top: 0,
    left: 1,
    zIndex: 1,
    fontSize: 10,
    color: "#BBBBBB",
  },
  labelR: {
    position: "absolute",
    bottom: 0,
    right: 1,
    zIndex: 1,
    fontSize: 10,
    color: "#AAAAAA",
  },
});

export default Board;
