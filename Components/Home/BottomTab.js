import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { USERS } from "../../Data/USERS";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
export default function BottomTab() {
  const [active, setActive] = useState("home");
  const SignOut = ()=> {
    signOut(auth).then(()=> {
     
    })
  }
  const Icons = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "search1",
    },
    {
      id: 3,
      name: "videocamera",
    },
    {
      id: 4,
      name: "hearto",
    },
  ];

  return (
    <>
        <View style={styles.divider}/>
        <View style={styles.container}>
        {Icons.map((icon) => {
        return (
          <Icon
            key={icon.id}
            icon={icon}
            active={active}
            setActive={setActive}
          />
        );
      })}
      <TouchableOpacity onPress={SignOut}>
        <Image
          source={{ uri: USERS[0].image }}
          style={{
            height: 30,
            width: 30,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "white",
          }}
        />
      </TouchableOpacity>
        </View>   
    </>
  );
}

const Icon = ({ icon, active, setActive }) => {
  return (
    <TouchableOpacity onPress={() => setActive(icon.name)}>
      <AntDesign
        name={icon.name}
        size={25}
        style={active == icon.name ? styles.active : styles.inActive}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    divider: {
        flex: 1,
        borderBottomColor: "lightgrey",
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },

  active: {
    color: "#6BB0F5",
  },
  inActive: {
    color: "white",
  },
});
