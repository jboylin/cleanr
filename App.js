// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { db } from "./src/config";
import Firebase from "firebase";

import { Button, Text, View } from "react-native";
// import { writeUserData } from "./backendFuncs";

const App = () => {
  const logIn = () => {
    {
      Firebase.auth()
        .signInWithEmailAndPassword(
          "chuck.norris@example.com",
          "SuperSecretPassword!2"
        )
        .then(() => {
          console.log("User account created & signed in!");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }

          console.error(error);
        });
    }
  };
  const createUser = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword("harry.the.brain@example.com", "harry123")
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  const logOff = () => {
    Firebase.auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
        <Button title="Create User" onPress={createUser} />
        <Button title="Log in as Chuck" onPress={logIn} />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button title="logOff" onPress={logOff} />
    </View>
  );
};

export default App;
//

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//petr
