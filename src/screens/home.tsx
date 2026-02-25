
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { TNavigationScreenProps } from "../routes";
import { Header } from "../shared/components/Header";
import { Footer } from "../shared/components/Footer";
import { BaseInput } from "../shared/components/BaseInput";
import { theme } from "../shared/themes/Theme";




export const HomePage = () => {
    const navigation = useNavigation<TNavigationScreenProps>();
    return <>
        <Header 
            name={undefined}
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