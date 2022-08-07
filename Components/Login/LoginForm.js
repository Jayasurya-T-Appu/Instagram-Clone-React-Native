import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebaseConfig";
import Divider from "react-native-divider";

export default function LoginForm({ navigation }) {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string().required().min(6, "A password is required"),
  });

  const onLigin = async (email, password) => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
        })
        .catch((err) => {
          Alert.alert(err.message.split(" ")[2]);
        });
    } catch (error) {
      console.log("Error =", error);
      Alert.alert(error.message);
    }
  };

  return (
    <View >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLigin(values.email, values.password);
          /*
           */
        }}
        validateOnMount={true}
        validationSchema={LoginFormSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <TextInput
              autoFocus={true}
              autoCapitalize="none"
              keyboardType="email-address"
              textContextType="emailAddress"
              placeholder="Email, Username, Phone Number"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={[
                styles.input,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#CCC"
                      : "red",
                },
              ]}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContextType="password"
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={[
                styles.input,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#CCC"
                      : "red",
                },
              ]}
            />

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={() => handleSubmit()}
            >
              <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
                Log in
              </Text>
            </Pressable>
            <View style={{ marginVertical: 20 }}>
              <Divider orientation="center" color="gray">
                {" "}
                OR{" "}
              </Divider>
            </View>
            <View style={{alignItems:'center',marginVertical: 10}}>
              <Text style={{fontSize:13}}>Forgotten your password?</Text>
            </View>

            <View style={styles.signUpContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push("SignUp")}>
                <Text style={{ color: "#6BB0F5" }}>Sign up</Text>
              </TouchableOpacity>
            </View>
          
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "lightgray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 5,
    marginTop: 20,
  }),
  signUpContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
