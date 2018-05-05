import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
;import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import navStyles from './styles/navStyles';
import Post from './Post';
import Posts from './Posts';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjgtrpw9k93m60180wcycji0t"
  }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    ...navStyles  
  };
  goToPost = () => {
    this.props.navigation.navigate('Post');
  }
  render() {
    return (
      <ApolloProvider client={client}>
       <View style={styles.container}>
        <Text>Hello Alessandro</Text>
        <Posts />
        <Button 
          onPress={this.goToPost}
          title="Go to Post page"
        />
       </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});

export default createStackNavigator({
  Home: {
    screen: App
  },
  Post: {
    screen: Post
  }
})


