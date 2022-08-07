import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert
  } from "react-native";
  import React from "react";
  import * as Yup from "yup";
  import { Formik } from "formik";
  import Validator from 'email-validator'
  import {auth, db} from '../../firebaseConfig'
  import { collection, addDoc } from "firebase/firestore";
  import {  createUserWithEmailAndPassword } from 'firebase/auth';
  
  
  export default function SignUpForm({navigation}) {
    const LoginFormSchema = Yup.object().shape({
      email: Yup.string().email().required("An email is required"),
      password: Yup.string().required().min(6,"A password is required"),
      username: Yup.string().required().min(3,"A username is required"),
    });

  const getRandomPicture = async() => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  } 

  const onSignUp = async(email, password, username) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      const docRef = await addDoc(collection(db, 'user'), {
        owner_id: user.user.uid,
        email:email,
        username: username,
        profilePicture: await getRandomPicture()
      })
     
    
    } catch (error) {
      console.log("Error =", error);
      Alert.alert(error.message)
    }
  }
    return (
      <View >
        <Formik
          initialValues={{ email: "", password: "", username: "" }}
          onSubmit={(values) => {
            onSignUp(values.email, values.password, values.username)
          }}
          validateOnMount={true}
          validationSchema={LoginFormSchema}
         
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                autoFocus={true}
                autoCapitalize="none"
                keyboardType="email-address"
                textContextType="emailAddress"
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={[styles.input, 
                      {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#CCC' : 'red'}]}
              />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContextType="password"
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={[styles.input, 
                  {borderColor: 1 > values.password.length || values.password.length >= 6? '#CCC' : 'red'}]}
              />
                 <TextInput
                autoFocus={false}
                autoCapitalize="none"
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                style={[styles.input, 
                      {borderColor: 1> values.username.length|| values.username.length > 6 ? '#CCC' : 'red'}]}
              />
             
              <Pressable
                titleSize={20}
                style={styles.button(isValid)}
                onPress={() => handleSubmit()}
              >
                <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
                    Sign Up
                </Text>
              </Pressable>
              <View style={styles.signUpContainer}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#6BB0F5" }}>Sign in</Text>
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
    button:(isValid) =>( {
      backgroundColor: isValid? '#0096F6': '#9ACAF7',
      alignItems: "center",
      justifyContent: "center",
      minHeight: 42,
      borderRadius: 5,
      marginTop: 20,
    }),
    signUpContainer: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  