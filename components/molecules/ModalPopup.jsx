import React, { useState } from "react";
import { StyleSheet, View, Modal, Image } from "react-native";

import { TouchableComponent } from "_atoms";

const ModalPopup = ({ image }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableComponent
              style={styles.modalButton}
              onSelectComponent={() => {
                console.log(modalVisible);
                setModalVisible(!modalVisible);
                console.log("close");
              }}>
              <Image source={{ uri: image }} style={styles.image2} />
            </TouchableComponent>
          </View>
        </View>
      </Modal>

      <TouchableComponent
        style={styles.openButton}
        onSelectComponent={() => {
          console.log(modalVisible);
          setModalVisible(true);
          console.log(image);
          console.log("open");
        }}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  openButton: {
    //   borderColor: '#F194FF',
    //   borderWidth: 2,
    height: "100%",
    width: "100%",
  },

  modalButton: {
    backgroundColor: "black",
    // borderColor: '#F194FF',
    // borderWidth: 2,
    width: "100%",
    height: "100%",
  },

  image2: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ModalPopup;
