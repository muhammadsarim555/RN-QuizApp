import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, FaceDetector } from 'expo';
import Question from '../Question';
import { Toolbar, Button } from 'react-native-material-ui'

export default class CameraComponent extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
        boolean: false,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }


    renderQuestion() {
        // return(
        //     <View>
        //         <Question/>
        //     </View>
        // )
        console.log("check")
    }


    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(photo)
            const options = { mode: FaceDetector.Constants.Mode.fast }
            const result = await FaceDetector.detectFacesAsync(photo.uri, options);
            console.log(result);
            if (result.faces.length > 0) {
                console.log("Match found");
                this.setState({ boolean: true })
            }
            else {
                alert("No Result Found!")

            }
        }
    }

    render() {
        let { hasCameraPermission, boolean } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    {
                        boolean ?
                            <Question />
                            :
                            <Camera
                                ref={ref => this.camera = ref}
                                style={{ flex: 1 }} type={this.state.type}>



                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'center'

                                    }}>


                                    <TouchableOpacity
                                        style={{
                                            alignSelf: 'flex-end',
                                            alignItems: 'center',
                                        }}
                                        onPress={this.snap.bind(this)}
                                    >
                                        {/* <Text
                                            style={{ fontSize: 18, marginBottom: 10, color: 'white',width: 50, height: 50 }}>
                                            Capture */}
                                        {/* </Text> */}
                                        <Button primary
                                            text="Capture"
                                            onPress={this.snap.bind(this)}

                                        />
                                        
                                    </TouchableOpacity>
                                </View>

                            </Camera>
                    }
                </View>
            );
        }
    }
}