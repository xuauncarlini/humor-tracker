import { View, StyleSheet, Text, TextInput } from "react-native";
import { BaseInput } from "../shared/components/BaseInput";
import { theme } from "../shared/themes/Theme";
import { Button } from "../shared/components/Button";


export const SetUserNamePage = () => {

    return (
    <View style={styles.Container}>

    
        <Text style={styles.title}>
                    Qual é o seu nome?
                </Text>
        
        <BaseInput label='Nome'>
            <TextInput
                autoFocus
                style={styles.Input}
                placeholder='Escreva seu nome aqui...'
                placeholderTextColor={theme.colors.textPlaceholder}
            />
        </BaseInput>

        <View style={{flex: 1}}/>

        <Button 
            title="Salvar"
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