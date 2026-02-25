import { StyleSheet, Text, View } from "react-native"
import { theme } from "../themes/Theme"



interface IHeaderProps {
    name: string | undefined;
}

export const Header = ({ name }: IHeaderProps) => {

    return (
        <View style={styles.headerConteiner}>
            <Text style={styles.headerText}>Olá,</Text>
            <Text style={styles.headerBoldtext}>{!name ? 'Seu nome é?' : `${name}!`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerConteiner: {
        padding: 16,
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.regular
    },
    headerBoldtext: {
        color: theme.colors.primary,
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.bold
    },

})