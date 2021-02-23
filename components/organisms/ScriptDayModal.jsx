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

import * as scriptDayActions from "_store/actions/scriptDays";

// components
import { Input } from "_atoms";

// Helpers
import formReducer from "_helpers/formReducer";
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

//Assets
import { Icons } from "_assets";

const ScriptDayModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const editedScriptDay = useSelector((state) =>
    state.scriptDays.scriptDays.find((scr) => scr.id === props.id)
  );

  //id, projectId, name, remarks

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: editedScriptDay ? editedScriptDay.name : "",
      remarks: editedScriptDay ? editedScriptDay.remarks : "",
    },
    inputValidities: {
      name: editedScriptDay ? true : false,
      remarks: editedScriptDay ? true : false,
    },
    formIsValid: editedScriptDay ? true : false,
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
    if (editedScriptDay) {
      dispatch(
        scriptDayActions.updateScriptDay(
          props.id,
          formState.inputValues.name,
          formState.inputValues.remarks
        )
      );
    } else {
      dispatch(
        scriptDayActions.createScriptDay(
          global.id,
          formState.inputValues.name,
          formState.inputValues.remarks
        )
      ),
        (formState.inputValues.name = ""),
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
    },
    [dispatchFormState]
  );

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Are you sure?",
      "Do you really want to delete this script day?",
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
            props.navigation.navigate("Script Days Overview");
            dispatch(scriptDayActions.deleteScriptDay(props.id));
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <>
      {editedScriptDay ? (
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
            <Text style={styles.addButtonText}>+ Add Script Day</Text>
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
              {editedScriptDay ? (
                <Text style={styles.title}>Edit Script Day</Text>
              ) : (
                <Text style={styles.title}>Add Script Day</Text>
              )}

              <View style={styles.editInfo}>
                <Input
                  id={"name"}
                  label={"Name"}
                  errorText='Please enter a valid name!'
                  //autoCapitalize='sentences'
                  //autoCorrect
                  returnKeyType='next'
                  initialValue={editedScriptDay ? editedScriptDay.name : ""}
                  initiallyValid={!!editedScriptDay}
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
                  initialValue={editedScriptDay ? editedScriptDay.remarks : ""}
                  initiallyValid={!!editedScriptDay}
                  autoCapitalize='sentences'
                  autoCorrect
                  onInputChange={inputChangeHandler}
                  minLength={0}
                  maxLength={240}
                />
                {/* pass this to child or pass submit??? other things to finish now project header is fucked */}
                <Pressable style={styles.submitButton} onPress={() => submit()}>
                  <Text>Submit</Text>
                </Pressable>
              </View>
            </View>
            {editedScriptDay && (
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

export default ScriptDayModal;

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
