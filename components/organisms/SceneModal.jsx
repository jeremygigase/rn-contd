// Packages
import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Modal,
  Text,
  Alert,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Store
import * as sceneActions from "_store/actions/scenes";

// Components
import { Input } from "_atoms";

// Helpers
import formReducer from "_helpers/formReducer";
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

// Assets
import { Icons } from "_assets";

const SceneModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const editedScene = useSelector((state) =>
    state.scenes.scenes.find((sce) => sce.id === props.id)
  );

  // id,
  // projectId,
  // scriptDayId,
  // locationId,
  // created,
  // sceneNumber,
  // remarks,
  // date;

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      sceneNumber: editedScene ? editedScene.sceneNumber : "",
      remarks: editedScene ? editedScene.remarks : "",
      date: editedScene ? editedScene.date : "",
    },
    inputValidities: {
      sceneNumber: editedScene ? true : false,
      remarks: editedScene ? true : false,
      date: editedScene ? true : false,
    },
    formIsValid: editedScene ? true : false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Please check the errors in the form.", [
        { text: "Okay" },
      ]);
      return;
    }
    if (editedScene) {
      dispatch(
        sceneActions.updateScene(
          props.id,
          "2",
          "2",
          formState.inputValues.sceneNumber,
          formState.inputValues.remarks,
          formState.inputValues.date
        )
      );
    } else {
      dispatch(
        sceneActions.createScene(
          global.id,
          "2",
          "2",
          formState.inputValues.sceneNumber,
          formState.inputValues.remarks,
          formState.inputValues.date
        )
      ),
        (formState.inputValues.sceneNumber = ""),
        (formState.inputValues.remarks = ""),
        (formState.inputValues.date = ""),
        (formState.formIsValid = false);
    }
    setModalVisible(!modalVisible);
  }, [dispatch, props.id, formState]);

  let submit = submitHandler;
  useEffect(() => {
    submit = submitHandler;
  }, [submitHandler]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Are you sure?",
      "Do you really want to delete this Scene?",
      [
        {
          text: "No",
          onPress: () => {
            console.log("Cancel Pressed");
          },
          style: "default",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            props.navigation.navigate("Scenes Overview");
            dispatch(sceneActions.deleteScene(props.id));
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <>
      {editedScene ? (
        <Pressable
          style={{
            marginLeft: 16,
            width: "24%",
          }}
          onPress={() => setModalVisible(true)}>
          <View>
            <Image
              source={Icons["edit"]}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
        </Pressable>
      ) : (
        <Pressable
          style={{ ...styles.addButton, backgroundColor: props.color }}
          onPress={() => setModalVisible(true)}>
          <View
            style={{
              marginLeft: 16,
            }}>
            <Text style={styles.addButtonText}>+ Add Scene</Text>
          </View>
        </Pressable>
      )}

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modal}>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={styles.closeButton}>
              <Text style={styles.closeIcon}>X</Text>
            </Pressable>
            <View style={styles.editInfoContainer}>
              {editedScene ? (
                <Text style={styles.title}>Edit Scene</Text>
              ) : (
                <Text style={styles.title}>Add Scene</Text>
              )}

              <View style={styles.editInfo}>
                <Input
                  id={"sceneNumber"}
                  label={"Scene Number"}
                  errorText='Please enter a valid scene number!'
                  //autoCapitalize='sentences'
                  //autoCorrect
                  returnKeyType='next'
                  initialValue={editedScene ? editedScene.sceneNumber : ""}
                  initiallyValid={!!editedScene}
                  onInputChange={inputChangeHandler}
                  minLength={1}
                  maxLength={16}
                  required
                />

                <Input
                  id={"remarks"}
                  label={"Remarks"}
                  errorText='Please enter a valid remark!'
                  multiline
                  initialValue={editedScene ? editedScene.remarks : ""}
                  initiallyValid={!!editedScene}
                  autoCapitalize='sentences'
                  autoCorrect
                  onInputChange={inputChangeHandler}
                  minLength={0}
                  maxLength={240}
                />
                <Input
                  id={"date"}
                  label={"Date"}
                  errorText='Please enter a valid date!'
                  //autoCapitalize='sentences'
                  //autoCorrect
                  returnKeyType='next'
                  initialValue={editedScene ? editedScene.date : ""}
                  initiallyValid={!!editedScene}
                  onInputChange={inputChangeHandler}
                  minLength={1}
                  maxLength={16}
                  required
                />
                <Pressable style={styles.submitButton} onPress={() => submit()}>
                  <Text>Submit</Text>
                </Pressable>
              </View>
            </View>
            {editedScene && (
              <Pressable
                onPress={createTwoButtonAlert}
                style={styles.deleteButton}>
                <Text style={styles.closeIcon}>DELETE</Text>
              </Pressable>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SceneModal;

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
  editInfoContainer: {
    width: "80%",
    marginTop: "16%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "red",
    fontSize: 20,
    width: "32%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
    padding: 8,
    borderRadius: 16,
  },
  deleteButton: {
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red",
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 80,
    height: 32,
  },
  addButton: {
    marginTop: 8,
    width: "40%",
    padding: 8,
    borderBottomRightRadius: 16,
    marginBottom: "1%",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },
});
