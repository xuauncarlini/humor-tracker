
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { TNavigationScreenProps, TRouteProps } from "../routes";
import { Header } from "../shared/components/Header";
import { Footer } from "../shared/components/Footer";
import { BaseInput } from "../shared/components/BaseInput";
import { theme } from "../shared/themes/Theme";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';




export const HomePage = () => {
    const navigation = useNavigation<TNavigationScreenProps>();
    const { params } = useRoute<TRouteProps<'home'>>();
    const [name, setName] = useState('');

    useEffect(() => {
        if (params?.newName){
            setName (params?.newName || '')
        }
    },[params?.newName]);
    
    useEffect(() => {
        AsyncStorage.getItem('user-name').then(value => setName(value || ''));
    }, [])

    return <>
        <Header 
            name={name}
        />

        <View style={{ flex: 1 }}/>
        <Footer>
            <View style={styles.footerContainer}>
                <Text style={styles.footertitle}>
                Qual é o seu nome? 
            </Text>
            <BaseInput label='Nome' asButton onPress={() => navigation.navigate('setusername')}>
                <TextInput
                    pointerEvents="none"
                    editable={false}
                    style={styles.footerInput}
                    placeholder='Escreva seu nome aqui...'
                    placeholderTextColor={theme.colors.textPlaceholder}
                />
            </BaseInput>
            </View>
        </Footer>
    </>;
}

const styles = StyleSheet.create({
    footerContainer: {
        gap: 8,
    },
    footertitle: {
        textAlign: 'center',
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
    },
    footerInput: {
        padding: 12,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
    }
});