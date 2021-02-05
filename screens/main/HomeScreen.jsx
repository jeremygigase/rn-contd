//Packages
import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
//import { useSelector, useDispatch } from "react-redux";


//Components
import {Main} from "_components";
//import {Footer,ProfileInfoSegment} from "_molecules";
import {TouchableComponent, TextReg, TextLight} from "_atoms";
//import ProjectItem from "../components/ProjectItem";
//import NoItems from "../components/NoItems";


const HomeScreen = ({ navigation }) => {

  const selectItemHandler = () => {
         navigation.navigate("Project Overview", {
           screen: "Project",
         });
       };
//   const projects = useSelector((state) => state.projects.projects);
//   //const projects = [];

//   const selectItemHandler = (item) => {
//     navigation.navigate("Project Overview", {
//       screen: "Project",
//       params: { id: item.id },
//       projectTitle: item.name,
//     });
//   };

//   const renderProjectItem = (itemData) => {
//     return (
//       <ProjectItem
//         name={itemData.item.name}
//         creator={itemData.item.creator}
//         created={itemData.item.created}
//         color={itemData.item.color}
//         image={itemData.item.imageFilename}
//         onSelectProject={() => selectItemHandler(itemData.item)}
//         //onSelectProject={() => console.log("project")}
//       />
//     );
//   };

  return (
    <Main>
      <View style={styles.buttonContainer}>
        <TouchableComponent
          style={styles.button}
          onSelectComponent={() => console.log("add")}
        >
          <TextReg style={styles.buttonText}>+ Add new project</TextReg>
        </TouchableComponent>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableComponent
          style={styles.button}
          onSelectComponent={() => selectItemHandler()}
        >
          <TextReg style={styles.buttonText}>2 Projects</TextReg>
        </TouchableComponent>
      </View>
      {/* <View>
        {projects !== "undefined" && projects.length > 0 ? (
          <>
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={projects}
              renderItem={renderProjectItem}
              numColumns={1}
            />
            <View style={styles.pastProjects}>
              <TextReg style={styles.title}>Past Projects</TextReg>
              <TextLight>
                Hier alle projecten die niet recentelijk zijn aangeklikt
              </TextLight>
            </View>
          </>
        ) : (
          <NoItems color={"black"} segName={"project"} icon={"pro"} />
        )}
      </View> */}
    </Main>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    padding: 8,
    marginTop: 16,
    backgroundColor: "white",
    borderColor: "black", //#e8e6e1
    borderWidth: 1,
    borderRadius: 16,
    width: "56%",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  title: {
    fontFamily: "roboto-regular",
    fontSize: 24,
  },
  pastProjects: {
    marginTop: "2%",
    alignItems: "center",
  },
  contain: {
    flex: 1,
    height: 150,
  },
});
