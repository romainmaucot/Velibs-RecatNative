import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function SearchBar() {
    const [value, setValue] = useState('Votre position');

    return(
            <TextInput
                underlineColorAndroid='transparent'
                style={style.input}
                onChangeText={(text) =>setValue(text)}
                value={value}
            />
    );
}


const style = StyleSheet.create({
    input: {
        height: '6%',
        borderWidth: 1,
        borderColor: 'blue',
        margin: '2%',
        borderRadius: 10,
        padding: 10
    }
});