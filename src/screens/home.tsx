
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
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

        <View style={styles.emptyContentContainer }>
            <Text style={styles.emptyContentText}>Você ainda não {'\n'} registrou seu humor.</Text>
        </View>
        <Footer>
            <View style={styles.footerContainer}>
                <Text style={styles.footertitle}>
                {name? 'Como está o seu humor hoje?' : 'Qual é o seu nome?'} 
            </Text>
            
            {!name && (
                <BaseInput label='Nome' asButton onPress={() => navigation.navigate('setusername')}>
                <TextInput
                    pointerEvents="none"
                    editable={false}
                    style={styles.footerInput}
                    placeholder='Escreva seu nome aqui...'
                    placeholderTextColor={theme.colors.textPlaceholder}
                />
            </BaseInput>
            )}
            {name && (
                <View style={styles.footerStarContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 1})}>
                        <FontAwesome name="star-o" size={24} color={theme.colors.textPlaceholder} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 2})}>
                        <FontAwesome name="star-o" size={24} color={theme.colors.textPlaceholder} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 3})}>
                        <FontAwesome name="star-o" size={24} color={theme.colors.textPlaceholder} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 4})}>
                        <FontAwesome name="star-o" size={24} color={theme.colors.textPlaceholder} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 5})}>
                        <FontAwesome name="star-o" size={24} color={theme.colors.textPlaceholder} />
                    </TouchableOpacity>
                    
                </View>
            )}
            </View>
        </Footer>
    </>;
}

const styles = StyleSheet.create({
    emptyContentContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    emptyContentText: {
        textAlign: 'center',
        color: theme.colors.textPlaceholder,
        fontFamily: theme.fonts.family.italic,
        fontSize: theme.fonts.sizes.subtitle,

    },
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
    },
    footerStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});