import React, { useState } from "react";
import { StyleSheet, View, Pressable, Modal, Text, Image } from "react-native";

//Assets
import { Icons } from "_assets";

const DetailModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return <>{props.children}</>;
};

export default DetailModal;

const styles = StyleSheet.create({
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0, 0, 0.8)",
  },
  modal: {
    alignItems: "center",
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 8,
  },
  closeButton: {
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red",
    position: "absolute",
    right: 0,
    top: 0,
    width: 32,
    height: 32,
  },
  closeIcon: {
    fontSize: 20,
  },
  addButton: {
    width: "32%",
  },
});
