import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions, FaceDetector } from 'expo';
import CameraComponent from './Componets/Camera';
import Appbar from './Componets/Appbar';
// import Questions from './Componets/Question';
import { Toolbar, Button } from 'react-native-material-ui'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            questionsFlag: false,
        }
    }


    renderQuestions() {
        this.setState({ questionsFlag: true })
    }



    render() {
        let { questionsFlag } = this.state;
        return (
            <View style={{ flex: 1 }}>
                {questionsFlag && <CameraComponent />}
                {!questionsFlag && <View>
                    <Appbar />
                    <Text style={styles.text}>WELCOME TO THE QUIZ</Text>
                    <Button primary
                        text="CLICK FOR QUIZ"
                        onPress={this.renderQuestions.bind(this)}
                    />
                </View>}

                {/* {
                    questionsFlag ?
                    (<View>
                              <Appbar />
                                <Text style={styles.text}>WELCOME TO THE QUIZ
              </Text>
                                <Button primary
                                    text="CLICK FOR QUIZ"
                                    onPress={this.renderQuestions.bind(this)}
                                />
                        </View>
                        ) :
                        (
                            <View>
                            <CameraComponent />
                      
                            </View>
                        )
                } */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 5,
    },
    text: {
        textAlign: 'center',
        paddingTop: '50%',
        fontSize: 15,
    }
});