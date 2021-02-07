//Packages
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

//Components
import {Main} from "_components";
import {Footer} from "_molecules";
import {TouchableComponent} from "_atoms";

const ContactScreen = () => {
  const [email, setEmail] = useState("");
  const [remarkText, setRemarkText] = useState("");

  const [submit, setSubmit] = useState(false);

  let colorText = "black";
  let bgColor = "white";
  if (submit) {
    colorText = "white";
    bgColor = "black";
  }

  const submitHandler = () => {
    if (!submit) {
      setSubmit(true);
      alert("submitted");
      //check email and reamrk entered
      //validate email
      console.log(email);
      console.log(remarkText);
    } else {
      alert("already submitted");
    }
  };

  return (
      <Main>
        <View style={styles.formControl}>
          <Text>Question, request or love poem? </Text>
          <Text>CONT’D will try to answer your mail as soon as possible.</Text>
        </View>
        <View style={styles.formControl}>
          <Text>email</Text>
          <TextInput
            style={styles.inputEmail}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.formControl}>
          <Text>Tell us!</Text>
          <TextInput
            style={styles.inputRemark}
            onChangeText={(text) => setRemarkText(text)}
            value={remarkText}
          />
        </View>
        <TouchableComponent
          style={styles.sendButton}
          style={{ ...styles.sendButton, ...{ backgroundColor: bgColor } }}
          onSelectComponent={submitHandler}
        >
          <Text style={{ ...styles.sendButtonText, ...{ color: colorText } }}>
            Send
          </Text>
        </TouchableComponent>
        <Footer />
      </Main>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  inputEmail: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginTop: "4%",
  },
  inputRemark: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginTop: "4%",
  },
  formControl: {
    width: "80%",
    marginTop: "8%",
  },
  footer: {
    width: "80%",
    marginBottom: "4%",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
  },
  logo: {
    fontSize: 32,
    marginBottom: 8,
  },
  tagLine: {
    fontSize: 16,
    marginBottom: 16,
  },
  companyName: {
    fontSize: 8,
    marginBottom: 8,
    fontWeight: "bold",
  },
  sendButton: {
    marginTop: 16,
    borderWidth: 1,
    padding: 8,
    paddingLeft: 64,
    paddingRight: 64,
    borderRadius: 16,
  },
  sendButtonText: {
    fontSize: 16,
  },
});
