import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  StyleSheet,
  Image,
  View,
  Pressable,
  Modal,
  Text,
  Alert,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { Icons } from "_assets";

import * as characterActions from "_store/actions/characters";

// components
import { Input } from "_atoms";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  console.log(state);
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }

  return state;
};

const EditCharacterModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  //const prodId = props.navigation.getParam("productId");
  const editedCharacter = useSelector((state) =>
    state.characters.characters.find((char) => char.id === props.id)
  );

  // id,
  // projectId,
  // characterName,
  // actorName,
  // pictureFilename,
  // callsheetNumber

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      characterName: editedCharacter ? editedCharacter.characterName : "",
      actorName: editedCharacter ? editedCharacter.actorName : "",
      pictureFilename: editedCharacter ? editedCharacter.pictureFilename : "",
      callsheetNumber: editedCharacter ? editedCharacter.callsheetNumber : "",
      remarks: editedCharacter ? editedCharacter.remarks : "",
    },
    inputValidities: {
      characterName: editedCharacter ? true : false,
      actorName: editedCharacter ? true : false,
      pictureFilename: editedCharacter ? true : false,
      callsheetNumber: editedCharacter ? true : false,
      remarks: editedCharacter ? true : false,
    },
    formIsValid: editedCharacter ? true : false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  // const submitHandler = useCallback(async () => {
  //   if (!formState.formIsValid) {
  //     Alert.alert("Wrong input!", "Please check the errors in the form.", [
  //       { text: "Okay" },
  //     ]);
  //     return;
  //   }
  //   setError(null);
  //   setIsLoading(true);
  //   try {
  //     if (editedCharacter) {
  //       await dispatch(
  //         characterActions.updateCharacter(
  //           props.id,
  //           formState.inputValues.characterName,
  //           formState.inputValues.actorName,
  //           formState.inputValues.pictureFilename,
  //           formState.inputValues.callsheetNumber
  //           //formState.inputValues.remarks
  //         )
  //       );
  //     } else {
  //       await dispatch(
  //         characterActions.createCharacter(
  //           formState.inputValues.characterName,
  //           formState.inputValues.actorName,
  //           formState.inputValues.pictureFilename,
  //           formState.inputValues.callsheetNumber
  //           //formState.inputValues.remarks
  //         )
  //       );
  //     }
  //     //props.navigation.goBack();
  //   } catch (err) {
  //     setError(err.message);
  //   }

  //   setIsLoading(false);
  // }, [dispatch, props.id, formState]);

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong input!", "Please check the errors in the form.", [
        { text: "Okay" },
      ]);
      return;
    }
    console.log(formState.formIsValid);
    if (editedCharacter) {
      dispatch(
        characterActions.updateCharacter(
          props.id,
          formState.inputValues.characterName,
          formState.inputValues.actorName,
          formState.inputValues.pictureFilename,
          formState.inputValues.callsheetNumber,
          formState.inputValues.remarks
        )
      );
    } else {
      dispatch(
        characterActions.createCharacter(
          formState.inputValues.characterName,
          formState.inputValues.actorName,
          formState.inputValues.pictureFilename,
          formState.inputValues.callsheetNumber,
          formState.inputValues.remarks
        )
      ),
        (formState.inputValues.characterName = ""),
        (formState.inputValues.actorName = ""),
        (formState.inputValues.pictureFilename = ""),
        (formState.inputValues.callsheetNumber = ""),
        (formState.inputValues.remarks = ""),
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
      //console.log(inputValue);
    },
    [dispatchFormState]
  );

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Are you sure?",
      "Do you really want to delete this character?",
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
            console.log("OK Pressed");
            props.navigation.navigate("Characters Overview");
            dispatch(characterActions.deleteCharacter(props.id));
            setModalVisible(!modalVisible);
          },
        },
      ],
      { cancelable: false }
    );
  console.log(props);
  return (
    <>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          marginLeft: "4%",
        }}>
        {props.children}
      </Pressable>

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
              {editedCharacter ? (
                <Text style={styles.title}>Edit Character</Text>
              ) : (
                <Text style={styles.title}>Add Character</Text>
              )}

              <View style={styles.editInfo}>
                <Input
                  id={"callsheetNumber"}
                  label={"Callsheet Number"}
                  errorText='Please enter a valid callsheet number!'
                  keyboardType='decimal-pad'
                  //autoCapitalize='sentences'
                  //autoCorrect
                  returnKeyType='next'
                  initialValue={
                    editedCharacter ? editedCharacter.callsheetNumber : ""
                  }
                  initiallyValid={!!editedCharacter}
                  onInputChange={inputChangeHandler}
                  minLength={1}
                  maxLength={16}
                  required
                />
                <Input
                  id={"characterName"}
                  label={"Character Name"}
                  errorText='Please enter a valid character name!'
                  initialValue={
                    editedCharacter ? editedCharacter.characterName : ""
                  }
                  returnKeyType='next'
                  initiallyValid={!!editedCharacter}
                  onInputChange={inputChangeHandler}
                  minLength={1}
                  maxLength={48}
                  required
                />
                <Input
                  id={"pictureFilename"}
                  label={"Picture"}
                  errorText='Please enter a valid picture!'
                  initialValue={
                    editedCharacter ? editedCharacter.pictureFilename : ""
                  }
                  returnKeyType='next'
                  onInputChange={inputChangeHandler}
                  initiallyValid={!!editedCharacter}
                />
                <Input
                  id={"actorName"}
                  label={"Played by Actor Name"}
                  errorText='Please enter a valid actor name!'
                  initialValue={
                    editedCharacter ? editedCharacter.actorName : ""
                  }
                  initiallyValid={!!editedCharacter}
                  returnKeyType='next'
                  onInputChange={inputChangeHandler}
                  required
                />
                <Input
                  id={"remarks"}
                  label={"Remarks"}
                  errorText='Please enter a valid remark!'
                  multiline
                  initialValue={editedCharacter ? editedCharacter.remarks : ""}
                  initiallyValid={!!editedCharacter}
                  autoCapitalize='sentences'
                  autoCorrect
                  onInputChange={inputChangeHandler}
                  minLength={0}
                  maxLength={240}
                />
                <Pressable style={styles.submitButton} onPress={() => submit()}>
                  <Text>Submit</Text>
                </Pressable>
              </View>
            </View>
            {editedCharacter && (
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

export default EditCharacterModal;

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
});
