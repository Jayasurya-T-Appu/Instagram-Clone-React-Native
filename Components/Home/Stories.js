import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../../Data/USERS";

export default function Stories() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((user, index) => (
          <TouchableOpacity  key={index}>
            <View style={styles.wrapper}>
              <Image
                source={{ uri: user.image }}
                style={styles.storyImage}
              />
              <Text style={{ color: "white", marginTop: 5 }}>{user.user > 10 ? user.user.slice(0,10).toLowerCase() + '...' : user.user.toLocaleLowerCase()}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    resizeMode: "cover",
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "coral",
  },
});
