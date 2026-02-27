import { View, StyleSheet, Text, TextInput } from "react-native";
import { BaseInput } from "../shared/components/BaseInput";
import { theme } from "../shared/themes/Theme";
import { Button } from "../shared/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TNavigationScreenProps } from "../routes";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const SetUserNamePage = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<TNavigationScreenProps>();

    const [name, setName] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user-name').then(value => setName(value || ''));
    }, [])

    const hanleSaveUserName = async  () => {

        try{
            await AsyncStorage.setItem('user-name', name);
        } catch (e) {

        }

        navigation.popTo('home', {newName: name});
    }


    return (
    <View style={{...styles.Container, paddingBottom: insets.bottom}}>

    
        <Text style={styles.title}>
                    Qual é o seu nome?
                </Text>
        
        <BaseInput label='Nome'>
            <TextInput
                autoFocus
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.Input}
                placeholder='Escreva seu nome aqui...'
                placeholderTextColor={theme.colors.textPlaceholder}
            />
        </BaseInput>

        <View style={{flex: 1}}/>

        <Button 
            title="Salvar"
            onPress={hanleSaveUserName}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        gap: 8,
        flex: 1,
    }, 
    Input: {
        padding: 12,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
    },
    title: {
        textAlign: 'center',
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
        },
   
});