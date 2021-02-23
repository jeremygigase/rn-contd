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

import * as locationActions from "_store/actions/locations";

// components
import { Input } from "_atoms";

// Helpers
import formReducer from "_helpers/formReducer";
const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

//Assets
import { Icons } from "_assets";

const LocationModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const editedLocation = useSelector((state) =>
    state.locations.locations.find((loc) => loc.id === props.id)
  );

  //id, projectId, name, remarks

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: editedLocation ? editedLocation.name : "",
      remarks: editedLocation ? editedLocation.remarks : "",
    },
    inputValidities: {
      name: editedLocation ? true : false,
      remarks: editedLocation ? true : false,
    },
    formIsValid: editedLocation ? true : false,
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
    if (editedLocation) {
      dispatch(
        locationActions.updateLocation(
          props.id,
          formState.inputValues.name,
          formState.inputValues.remarks
        )
      );
    } else {
      dispatch(
        locationActions.createLocation(
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
      "Do you really want to delete this location?",
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
            props.navigation.navigate("Locations Overview");
            dispatch(locationActions.deleteLocation(props.id));
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <>
      {editedLocation ? (
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
            <Text style={styles.addButtonText}>+ Add Location</Text>
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
              {editedLocation ? (
                <Text style={styles.title}>Edit Location</Text>
              ) : (
                <Text style={styles.title}>Add Location</Text>
              )}

              <View style={styles.editInfo}>
                <Input
                  id={"name"}
                  label={"Name"}
                  errorText='Please enter a valid name!'
                  //autoCapitalize='sentences'
                  //autoCorrect
                  returnKeyType='next'
                  initialValue={editedLocation ? editedLocation.name : ""}
                  initiallyValid={!!editedLocation}
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
                  initialValue={editedLocation ? editedLocation.remarks : ""}
                  initiallyValid={!!editedLocation}
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
            {editedLocation && (
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

export default LocationModal;

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
