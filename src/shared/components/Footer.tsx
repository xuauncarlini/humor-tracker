import { StyleSheet, Text, View } from "react-native"
import { theme } from "../themes/Theme"
import { useSafeAreaInsets } from 'react-native-safe-area-context'



interface IFooterProps {
    children: React.ReactNode;
}

export const Footer = ({ children }: IFooterProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{...styles.footerConteiner, paddingBottom: insets.bottom + 16}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    footerConteiner: {
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        padding: 16,
        backgroundColor: theme.colors.paper,
        ...theme.shadows.default,
    },

})