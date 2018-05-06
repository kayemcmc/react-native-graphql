import React, { Component } from "react";
import { Text, View } from "react-native";
import PostForm from "./PostForm";

export default class NewPost extends Component {
  newPost = ({title, body}) =>{
    console.log(title, body)
  }
  render() {
    return (
      <View>
        <PostForm onSubmit={this.newPost}/>
      </View>
    );
  }
}
 