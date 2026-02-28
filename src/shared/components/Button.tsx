
import { Pressable, StyleSheet, Text } from "react-native"
import { theme } from "../themes/Theme"


interface IButtonProps {
    title?: string;
    color?: string;
    children?: React.ReactNode;
    onPress?: () => void;
    grow?: boolean;
    vairant?: 'contained' | 'outlined'
}

export const Button = ({children, title, color, onPress, grow, vairant = 'contained'}: IButtonProps)=>{

    return(

        <Pressable 
            onPress={onPress}
            style = {( {pressed} ) => ({ 
            ...styles.button, 
            ... (pressed? styles.buttonPressed : {}),
            ... (grow? {flexGrow: 1} : {}),
            ... (vairant === 'contained' ? styles.buttonContained : {}),
            ... (vairant === 'outlined' 
                ? {
                    ...styles.buttonOutlined,
                    ...(color && {borderColor: color})
                } 
                : {}),
            })}
        >
            {children}
            {!children && (
                <Text 
                    style= {{
                    ...styles.buttonText, 
                    ... (vairant === 'contained' ? styles.buttonContainedText : {}),
                    ... (vairant === 'outlined' ? styles.buttonOutlinedText : {})}}>
                    {title}
                </Text>
            )}
            
        </Pressable>
    )
    
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonContained: {
        backgroundColor: theme.colors.primary,
    },
    buttonOutlined: {
        borderWidth: 2,
        borderColor: theme.colors.primary,
    },
    
    buttonOutlinedText: {
        color: theme.colors.primary,
    },
    buttonContainedText: {
        color: theme.colors.primaryText,
    },
    buttonText: {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.sizes.body,
        color: theme.colors.primaryText,
    }

})