import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { Camera } from 'expo-camera';

const imagemCamera = () => {

    const [hasPermission, setHasPermission] = useState(null);
    // Frontal ou traseira
    const [type, setType] = useState(Camera.Constants.Type.back);

    const [imagemUri, setImagemUri] = useState(null);

    useEffect(() => {
        (async () => {
            // Permissão camera
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    const tirarFoto = async () => {
        if(camera){
            let foto = await camera.takePictureAsync(); 
            alert("Foto Tirada")
            setImagemUri(foto.uri);
        }
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
        <Camera 
            style={{ flex: 1 }} 
            type={type}
            ref ={ref => {
                camera = ref;
            }}
        >
            <View
            style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
            }}>
            <TouchableOpacity
                style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
                }}
                onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
            </View>
        </Camera>

        <Image source={{uri : imagemUri}} style={{height : 300}} />

        <Button title="Tirar foto" onPress={() => tirarFoto()} />

        </View>
    )
}

export default imagemCamera;