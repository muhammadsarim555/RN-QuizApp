import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'


export default class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      quiz: [
        {

          "question": "How to create alert box?",
          "option1": "alert='hello world'",
          "option2": "aler('hello world')",
          "option3": "alert.('hello world')",
          "option4": "alert('hello world')",
          "answer": "4"
        },
        {

          "question": "How to create variable?",
          "option1": "variable name = 'ali'",
          "option2": "var name = 'ali'",
          "option3": "variable: 'ali'",
          "option4": "variable. 'ali'",
          "answer": "2"
        },
        {

          "question": "How to create function?",
          "option1": "Function(){}",
          "option2": "function.create()",
          "option3": "function(){}",
          "option4": "function{}",
          "answer": "3"
        },
        {

          "question": "How to push value in array?",
          "option1": "arr.push(value)",
          "option2": "arr.push.value",
          "option3": "arr.(value)",
          "option4": "arr.value.push(value)",
          "answer": "1"
        },
        {

          "question": "What is javascript",
          "option1": "programming language",
          "option2": "scripting language",
          "option3": "codding language",
          "option4": "web language",
          "answer": "2"
        }
      ],

      checked: '',
      text: '',
      counter: 0,
      ans: null,
      correct: 0,
    }
  }


  onSelect(index, value) {
    let { text } = this.state;
    this.setState({
      text: `Selected index: ${index} , value: ${value}`,
      ans: index + 1,
    })

  }


  updateNext() {
    let { counter, text, quiz, ans, correct } = this.state;
    // let correct = 1;
    this.setState({
      counter: counter + 1,
    })
    console.log(ans, "ccc")
    console.log(ans == quiz[counter].answer, "condition")
    ans == quiz[counter].answer && this.setState({
      correct: correct + 1,
    })
  }



  renderQuestions() {
    const { counter, quiz, correct } = this.state;

    if (quiz.length - 0 === counter) {
      alert(`Your Score Is ${correct * 20}%`);
      // return(
      // <Button primary
      // text="Go To Dashboard"
      // onPress={this.goToDashboard.bind(this)}
      // />
      // ) 
    }
    else {

      return (
        <ScrollView >
          <View style={styles.container}>
            <Text > {counter + 1}). {quiz[counter].question} </Text>

            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={quiz[counter].option1} >
                <Text>{quiz[counter].option1}</Text>
              </RadioButton>

              <RadioButton value={quiz[counter].option2}>
                <Text>{quiz[counter].option2}</Text>
              </RadioButton>

              <RadioButton value={quiz[counter].option3}>
                <Text>{quiz[counter].option3}</Text>
              </RadioButton>

              <RadioButton value={quiz[counter].option4}>
                <Text>{quiz[counter].option4}</Text>
              </RadioButton>
            </RadioGroup>
            <Text style={styles.text}>{this.state.text}</Text>

          </View>
          <Button primary
            title="Next"
            onPress={this.updateNext.bind(this)}
          ></Button>
        </ScrollView>
      );
    }
  }


  // goToDashboard(){

  // }

  render() {

    return (
      <ScrollView >
        <View style={styles.container}>
          {this.renderQuestions()}
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 20,
    fontSize: 20,
    overflow: 'scroll',
    marginTop: 5,
  },
  btn: {
    flexDirection: 'row',
    margin: 5,
  },
  m: {
    margin: 5,
  },
  img: {
    width: 15,
    height: 15,
  },
  column: {
    flexDirection: 'column',
  },
  text: {
    padding: 10,
    fontSize: 14,
  },
});
