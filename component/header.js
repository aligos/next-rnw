import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native-web';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.onToggleAllComplete}>
          <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
        </TouchableOpacity>
      	<TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
      		placeholder="What needs to be done?"
      		blurOnSubmit={false}
      		returnKeyType="done"
      		style={styles.input}
      		underlineColorAndroid='transparent'
      	/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 16,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center"
	},
  toggleIcon: {
    fontSize: 30,
    color: '#CCC'
  },
	input: {
		height: 50,
    fontSize: 18,
    marginLeft: 16,
    flex: 1,
    outline: "none"
	}
});

export default Header;