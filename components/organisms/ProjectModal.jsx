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

const ProjectModal = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ProjectModal;

const styles = StyleSheet.create({});
