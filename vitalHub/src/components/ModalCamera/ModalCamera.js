import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'

import { useEffect, useRef, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons'

export const ModalCamera = ({
    navigation,
    visible,
    setShowModalCamera,
    setUriCameraCapture,
    ...rest

}) => {
    const cameraRef = useRef(null)

    const [openModal, setOpenModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [tipoCamera, setTipoCamera] = useState(CameraType.front)

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    }, [])

    async function UploadPhoto() {
        await MediaLibrary.createAssetAsync(photo).then(() => {
            alert('salvo')
        }).catch(error => {
            alert('erro')
        })
    }

    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()
            setPhoto(photo.uri)
            setOpenModal(true)

            SendFormPhoto()

            console.log(photo);

        }
    }

    async function ClearPhoto() {
        await MediaLibrary.deleteAssetsAsync(photo).then(() => {
            alert("")
        }).catch(error => {
            alert("erro")
        })

        setPhoto(null)
        setOpenModal(false)
    }

    async function SendFormPhoto(){
        await setUriCameraCapture(CapturePhoto)
    }

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <View style={styles.container}>
                <Camera
                    ref={cameraRef}
                    style={styles.camera}
                    type={tipoCamera}


                // ratio='16.9'
                >

                    <View style={styles.viewFlip}>

                        <TouchableOpacity style={styles.btnFlip}
                            onPress={
                                () => setTipoCamera(
                                    tipoCamera == CameraType.front ? CameraType.back : CameraType.front
                                )
                            }>

                            <Text style={styles.textFlip}>Trocar</Text>

                        </TouchableOpacity>

                    </View>

                </Camera>

                <View style={styles.ViewRow}>

                    <TouchableOpacity style={styles.btnCapture}
                        onPress={() => CapturePhoto()}
                    >
                        <FontAwesome name='camera' size={23} color='#fff' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnClose}
                        onPress={() => setShowModalCamera(false)}
                    >
                        <FontAwesome name='close' size={23} color='#fff' />
                    </TouchableOpacity>

                </View>

                <Modal animationType='slide' transparent={false} visible={openModal}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 20
                    }}>

                        <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>
                            {/* Botoes */}
                            <TouchableOpacity style={styles.btnClear} onPress={() => ClearPhoto()}>
                                <FontAwesome name='trash' size={35} color='#ff0000' />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnUpload} onPress={() => UploadPhoto()}>
                                <FontAwesome name='upload' size={35} color='#121212' />
                            </TouchableOpacity>
                        </View>

                        <Image
                            source={{ uri: photo }}
                            style={{ width: '100%', height: 500, borderRadius: 15 }}
                        />

                    </View>
                </Modal>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        height: '70%',
        width: '90%'
    },
    viewFlip: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    btnFlip: {
        padding: 20
    },
    textFlip: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20
    },
    btnCapture: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#121212",

        justifyContent: 'center',
        alignItems: 'center'
    },
    btnClose: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#ff0000",

        justifyContent: 'center',
        alignItems: 'center'
    },
    btnClear: {
        padding: 20,
        backgroundColor: "transparent",

        justifyContent: 'center',
        alignItems: 'center'
    },
    btnUpload: {
        padding: 20,
        backgroundColor: "transparent",

        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});
