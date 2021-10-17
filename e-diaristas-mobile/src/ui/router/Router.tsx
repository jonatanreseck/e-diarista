import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationTheme } from "ui/themes/app-theme";
import Index from "pages";
import EncontarDiarista from "pages/encontrar-diarista";
import Logo from "@assets/img/logos/e-diaristas-logo.png";

const Stack = createStackNavigator();

export type RootStackParamList = {
  Index: undefined;
  EncontarDiaristas: undefined;
};

const Router: React.FC = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={"Index"}
          component={Index}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{
                  width: 150,
                  height: 50,
                  resizeMode: "contain",
                }}
                source={Logo}
              />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name={"EncontarDiaristas"}
          component={EncontarDiarista}
          options={{
            title: "Encontrar Diarista",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
