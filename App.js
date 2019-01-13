import React from "react";
import {View, Text, Button, TouchableOpacity, Modal} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

class SettingsScreen extends React.Component {
  static navigationOptions({navigation}) {
    return {
      title: "Settings",
    };
  }

  render() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text>SettingsScreen </Text>
          <TouchableOpacity
              onPress={() =>
                  this.props.navigation.push("Profile", {
                    title: "Profile"
                  })
              }
          >
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions({navigation}) {
    return {
      title: navigation.getParam("title", "pro"),
    }
  }

  render() {
    console.log(this.props.navigation.state);
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text>Profile Screen</Text>
          <Button
              title={"Profile"}
              onPress={() => this.props.navigation.push("Profile")}
          />
          <Button
              title={"SetParams"}
              onPress={() =>
                  this.props.navigation.setParams({title: "profsetPrams"})
              }
          />
          <Button
              title="Go back"
              onPress={() => this.props.navigation.goBack()}
          />
          <Button
              title="PopToTop"
              onPress={() => this.props.navigation.popToTop()}
          />
        </View>
    );
  }
}

class Details2 extends React.Component {
  static navigationOptions({navigation}) {
    return {
      title: navigation.state.params.title,

    };
  }

  render() {
    return (
        <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "blue"
            }}
        >
          <Text> Details 2</Text>
          <Button
              title={"setParams"}
              onPress={() =>
                  this.props.navigation.setParams({title: "setParams"})
              }
          />
        </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",

  };

  render() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text>Home Screen</Text>
          <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Details")}
          >
            <Text>Details</Text>
          </TouchableOpacity>
          <Button title={'open modal'}
                  onPress={() => this.props.navigation.navigate('Modal', {title: 'this is modal'})}/>
        </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details",

  };

  render() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text>Details Screens</Text>
          <Button
              title={"Details"}
              onPress={() => this.props.navigation.push("Details")}
          />
          <Button
              title="Go back"
              onPress={() => this.props.navigation.goBack()}
          />
          <Button
              title="PopToTop"
              onPress={() => this.props.navigation.popToTop()}
          />
          <Button
              title="detail2"
              onPress={() =>
                  this.props.navigation.push("Details2", {title: "Details2ff"})
              }
          />
        </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30}}>{this.props.navigation.getParam('title', 'nothing')}</Text>
          <Button
              onPress={() => this.props.navigation.goBack()}
              title="Dismiss"
          />
        </View>

    );
  }
}
const MainStack = createStackNavigator({
      Home: HomeScreen,
      Details: DetailsScreen,
      Details2: Details2,
      Modal: ModalScreen
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
);

const HomeStack = createStackNavigator({
      Home: MainStack,
      Modal: ModalScreen
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
);

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Profile: ProfileScreen
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack
});

export default class App extends React.Component {
  render() {
    return <TabNavigator/>;
  }
}
