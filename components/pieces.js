import React from "react";
import { Image, View } from "react-native";

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

const Piece = ({ type }) => {
  return <Image source={PIECES[type]} />;
};

// const styles = StyleSheet.create({
//   piece: {},
// });

export default Piece;
