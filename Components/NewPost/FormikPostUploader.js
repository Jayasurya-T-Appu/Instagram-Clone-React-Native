import { View, Text, Image, TextInput, Button } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";

const PLACEHOLDER_IMG =
  "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "A caption is required"),
});

export default function FormikPostUploader() {
  const [thumbnilUrl, setThumbnilUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: thumbnilUrl ? thumbnilUrl : PLACEHOLDER_IMG }}
            />

            <View style={{ flex: 1, marginLeft: 10 }}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a Caption"
                placeholderTextColor={"gray"}
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "lightgray",
              borderWidth: 1,
              opacity: 0.2,
              marginTop: 10,
              marginBottom: 20,
            }}
          />
          <TextInput
          onChange={(e) => setThumbnilUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter Image Url"
            placeholderTextColor={"gray"}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{fontSize:10, color:'red'}}>
              {errors.imageUrl}
            </Text>
          )}
          <View style={{marginTop:30}}>
            <Button  onPress={handleSubmit} title='Share' disabled={!isValid}/>
          </View>
        </>
      )}
    </Formik>
  );
}
