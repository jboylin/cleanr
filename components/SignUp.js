import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const SignUp = ({ navigation, userType, setUserType }) => {
  console.log(userType);
  const [text, setText] = useState("");

  if (userType === "cleaner") {
    return (
      <View style={styles.signup}>
        <View>
          <TextInput
            label="Name"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View>
          <TextInput
            label="Confirm Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
      </View>
    );
  }
  if (userType === "customer") {
    return (
      <View style={styles.signup}>
        <View>
          <TextInput
            label="Name"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View>
          <TextInput
            label="Confirm Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View>
          <TextInput
            label="Confirm Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
      </View>
    );
  } else {
    return <Text>You have not set your account type.</Text>;
  }
};

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    padding: 8,
    margin: 5,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E6E5ED",
    backgroundColor: "#F8F8F9",
    justifyContent: "flex-start",
    height: 150,
  },
  input: {
    borderRadius: 4,
  },
});

export default SignUp;

//if customer button pressed render this

//if cleaner button pressed render this
