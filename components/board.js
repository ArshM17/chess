import { React, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

const PIECES = {
  K: require("../assets/pieces/king_w.png"),
  Q: require("../assets/pieces/queen_w.png"),
  R: require("../assets/pieces/rook_w.png"),
  B: require("../assets/pieces/bishop_w.png"),
  N: require("../assets/pieces/knight_w.png"),
  P: require("../assets/pieces/pawn_w.png"),
  k: require("../assets/pieces/king_b.png"),
  q: require("../assets/pieces/queen_b.png"),
  r: require("../assets/pieces/rook_b.png"),
  b: require("../assets/pieces/bishop_b.png"),
  n: require("../assets/pieces/knight_b.png"),
  p: require("../assets/pieces/pawn_b.png"),
};

const Board = () => {
  const ROWS = 8;
  const COLUMNS = 8;
  const ROWLABEL = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const board = [];
  const initialBoardState = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ];

  const [boardState, setBoardState] = useState(initialBoardState);
  const [activePiece, setActivePiece] = useState([]);
  const [turn, setTurn] = useState("white");

  function areOppositeCase(char1, char2) {
    if (char1.toUpperCase() === char1 && char2.toUpperCase() === char2) {
      return false;
    }
    if (char1.toLowerCase() === char1 && char2.toLowerCase() === char2) {
      return false;
    }
    return true;
  }

  function toggleTurn() {
    if (turn == "white") {
      setTurn("black");
    } else {
      setTurn("white");
    }
  }

  function handleClick(i, j) {
    // setBoardState(initialBoardState);
    // setActivePiece([]);
    // setTurn("white");
    // return;
    var temp = boardState[i][j];

    if (
      turn == "white" &&
      temp.toLowerCase() == temp &&
      // boardState[activePiece[0]][activePiece[1]].toLowerCase ==
      //   boardState[activePiece[0]][activePiece[1]]
      activePiece.length == 0
    )
      return;
    if (
      turn == "black" &&
      temp.toUpperCase() == temp &&
      // boardState[activePiece[0]][activePiece[1]].toUpperCase ==
      //   boardState[activePiece[0]][activePiece[1]]
      activePiece.length == 0
    )
      return;

    if (activePiece.length == 0 && temp != "") {
      setActivePiece([i, j]);
      return;
    }
    if (
      activePiece.length != 0 &&
      (areOppositeCase(temp, boardState[activePiece[0]][activePiece[1]]) ||
        boardState[i][j] == "")
    ) {
      boardCopy = [...boardState];
      let currPiece = boardState[activePiece[0]][activePiece[1]];
      boardCopy[i][j] = currPiece;
      boardCopy[activePiece[0]][activePiece[1]] = "";
      setActivePiece([]);
      setBoardState(boardCopy);
      toggleTurn();
      return;
    }
    if (activePiece.length != 0 && temp != "") {
      setActivePiece([i, j]);
      return;
    }
  }

  for (let i = 0; i < ROWS; i++) {
    const row = [];
    for (let j = 0; j < COLUMNS; j++) {
      const color = (i + j) % 2 === 0 ? "#eeeed2" : "#769655";
      if (j == 0 && i == ROWS - 1) {
        row.push(
          <TouchableHighlight
            key={`${i}${j}`}
            onPress={() => handleClick(i, j)}
          >
            <View>
              <Text style={styles.labelC}>{ROWS - i}</Text>
              <Text style={styles.labelR}>{ROWLABEL[j]}</Text>
              <View style={[styles.square, { backgroundColor: color }]} />
              {PIECES[boardState[i][j]] == "" ? null : (
                <Image style={styles.piece} source={PIECES[boardState[i][j]]} />
              )}
            </View>
          </TouchableHighlight>
        );
      } else if (j == 0) {
        row.push(
          <TouchableHighlight
            key={`${i}${j}`}
            onPress={() => handleClick(i, j)}
          >
            <View>
              <Text style={styles.labelC}>{ROWS - i}</Text>
              <View style={[styles.square, { backgroundColor: color }]} />
              {PIECES[boardState[i][j]] == "" ? null : (
                <Image style={styles.piece} source={PIECES[boardState[i][j]]} />
              )}
            </View>
          </TouchableHighlight>
        );
      } else if (i == ROWS - 1) {
        row.push(
          <TouchableHighlight
            key={`${i}${j}`}
            onPress={() => handleClick(i, j)}
          >
            <View>
              <Text style={styles.labelR}>{ROWLABEL[j]}</Text>
              <View style={[styles.square, { backgroundColor: color }]} />
              {PIECES[boardState[i][j]] == "" ? null : (
                <Image style={styles.piece} source={PIECES[boardState[i][j]]} />
              )}
            </View>
          </TouchableHighlight>
        );
      } else {
        row.push(
          <TouchableHighlight
            key={`${i}${j}`}
            onPress={() => handleClick(i, j)}
          >
            <View style={[styles.square, { backgroundColor: color }]}>
              {PIECES[boardState[i][j]] == "" ? null : (
                <Image style={styles.piece} source={PIECES[boardState[i][j]]} />
              )}
            </View>
          </TouchableHighlight>
        );
      }
    }
    board.push(
      <View key={`${i}`} style={styles.row}>
        {row}
      </View>
    );
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
  piece: {
    position: "absolute",
    left: 3,
    top: 5,
    width: 40,
    height: 40,
  },
});

export default Board;
