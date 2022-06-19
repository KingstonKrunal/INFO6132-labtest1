import {StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNewDataScreen = ({route}) => {
    const navigation = useNavigation()

    const [fuelType, setFuelType] = useState([]);
    const [charge, setCharge] = useState(0)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Petrol', value: 'petrol'},
        {label: 'Diesel', value: 'diesel'},
        {label: 'Battery Charge', value: 'battery'}
    ]);

    const handleCreateEntry = () => {
        AsyncStorage.setItem("fuelType", fuelType.toString()).then()
        AsyncStorage.setItem("fuelCharge", charge.toString()).then()
        navigation.replace("Home")
    }

    return (
        <View style={styles.container}>
            <DropDownPicker
                style={styles.dropDown}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onSelectItem={(fuelType) => {
                    setFuelType(fuelType)
                }}
            />

            <TextInput placeholder='Enter Litres/Charge Unit here'
                       value={charge}
                       onChangeText={text => setCharge(charge)}
                       style={styles.input}>
            </TextInput>

            <TouchableOpacity style={styles.createButton} onPress={handleCreateEntry}>
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddNewDataScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    createButton: {
        backgroundColor: '#0782F9',
        width: '100%',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginTop: 30,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
    },
    buttonText: {
        color:'white',
        fontWeight: '700',
        fontSize: 16,
    },
    dropDown: {
        marginBottom: 10,
    },
    item: {
        padding: 5,
        fontSize: 30,
    },
    floatingButtonStyle: {
        height: 50,
        width: 50,
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 100,
    },
})
