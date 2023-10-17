
import React from "react";
import { View,UIManager,Platform } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";
import { Header } from "./Components/common";
import LibraryList from "./Components/LibraryList";

const store = createStore(reducers);

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
        <Header Header={'Tech Stack'}/>
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
