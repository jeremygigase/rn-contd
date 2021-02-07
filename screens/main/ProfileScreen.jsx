//Packages
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "react-native-paper";

// Components
import {Main} from "_components";
import {Footer,ProfileInfoSegment} from "_molecules";
import {TouchableComponent} from "_atoms";

//Data
import { Icons } from "_assets";

const ProfileScreen = () => {
  return (
      <Main>
        <View style={styles.picture}>
          <Avatar.Image
            source={{
              uri:
                "https://img.discogs.com/uRx2KJiz_6AvTiMAq0whijLeoGU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3245307-1323717800.jpeg.jpg",
            }}
            size={128}
          />
        </View>
        <TouchableComponent
          onSelectComponent={() => {
            alert("Profile Picture");
          }}
        >
          <View style={styles.profilePictureText}>
            <Text>Edit Profile Picture</Text>
            <Image
              source={Icons["edit"]}
              style={{
                width: 20,
                height: 20,
                marginLeft: "4%",
              }}
            />
          </View>
        </TouchableComponent>

        <View style={styles.profileInfo}>
          <ProfileInfoSegment title={"email"} value={"jeremy@contd.com"} />
          <ProfileInfoSegment title={"name"} value={"Jeremy Gigase"} />
          <ProfileInfoSegment title={"department"} value={"Art"} />
        </View>
        <TouchableComponent
          style={styles.button}
          onSelectComponent={() => {
            alert("Change Password");
          }}
        >
          <Text>Change Password</Text>
        </TouchableComponent>
        <View style={styles.invitation}>
          <View style={styles.invitationHeader}>
            <View style={styles.invitationHeaderTitle}>
              <Text style={styles.invitationHeaderTitleText}>Hey there!</Text>
            </View>
            <TouchableComponent
              onSelectComponent={() => {
                alert("Invite denied");
              }}
            >
              <Text>X</Text>
            </TouchableComponent>
          </View>
          <View>
            <Text>
              Would you like to join your other crewmembers in this project?
            </Text>
            <Text>You have been invited to ‘Project 1’ by member 1.</Text>
          </View>
          <TouchableComponent
            style={styles.button}
            onSelectComponent={() => {
              alert("Invite accepted");
            }}
          >
            <Text>Join</Text>
          </TouchableComponent>
        </View>
        <Footer />
      </Main>

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({

  picture: {
    marginTop: "8%",
  },
  profilePictureText: {
    marginTop: "2%",
    flexDirection: "row",
  },
  profileInfo: {
    paddingTop: 16,
    paddingBottom: 16,
    width: "80%",
    backgroundColor: "white",
  },
  infoSegTitle: {
    marginTop: 8,
    width: "40%",
    padding: 8,
    borderBottomRightRadius: 16,
  },
  icon: {
    width: "20%",
    marginLeft: "40%",
  },
  infoSeg: {
    flexDirection: "row",
  },
  textBox: {
    marginLeft: 8,
    borderBottomWidth: 1,
  },
  button: {
    marginTop: "4%",
    marginBottom: "4%",
    alignItems: "center",
    borderWidth: 1,
    padding: 8,
    width: "40%",
    borderRadius: 16,
  },
  invitation: {
    marginTop: "4%",
    alignItems: "center",
    borderWidth: 1,
    padding: 8,
    width: "80%",
    height: "20%",
    borderRadius: 16,
  },
  invitationHeader: {
    flexDirection: "row",
    marginTop: "2%",
  },
  invitationHeaderTitle: {
    marginRight: "72%",
    marginBottom: "2%",
  },
  invitationHeaderTitleText: {
    fontWeight: "bold",
  },
});
