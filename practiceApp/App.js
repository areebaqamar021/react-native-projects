import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTime from './src/DateTime';
// import Home from './src/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="DateTime" component={DateTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ThemeProvider } from './src/context/ThemeContext';
// import Dashboard from './src/pages/Dashboard';
// import Home1 from './src/pages/Home1';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <ThemeProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={Home1} />
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </ThemeProvider>
//   );
// };

// export default App;
