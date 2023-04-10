import React from "react";
import { Image, View } from "react-native";

const PIECES = {
  wK: require("../assets/pieces/king_w.png"),
  wQ: require("../assets/pieces/queen_w.png"),
  wR: require("../assets/pieces/rook_w.png"),
  wB: require("../assets/pieces/bishop_w.png"),
  wN: require("../assets/pieces/knight_w.png"),
  wP: require("../assets/pieces/pawn_w.png"),
  bK: require("../assets/pieces/king_b.png"),
  bQ: require("../assets/pieces/queen_b.png"),
  bR: require("../assets/pieces/rook_b.png"),
  bB: require("../assets/pieces/bishop_b.png"),
  bN: require("../assets/pieces/knight_b.png"),
  bP: require("../assets/pieces/pawn_b.png"),
};

const Piece = ({ type }) => {
  return (
    <View style={styles.piece}>
      <Image source={PIECES[type]} />
    </View>
  );
};

export default Piece;
