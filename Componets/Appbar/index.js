import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Toolbar } from 'react-native-material-ui';


export default class Appbar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          centerElement="Quiz App"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          rightElement={{
            menu: {
              icon: "more-vert",
              labels: ["item 1", "item 2"]
            }
          }}
          onRightElementPress={(label) => { console.log(label) }}
        />
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: 'center',
  },
  
});
