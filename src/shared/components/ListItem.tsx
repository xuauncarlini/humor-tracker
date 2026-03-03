import { StyleSheet, Text, View } from "react-native"
import { theme } from "../themes/Theme";
import { FontAwesome } from "@expo/vector-icons";


interface IListItemProps {
    rate: number;
    description: string;
    datetime: string;
}

export const ListItem = ({rate, datetime, description} : IListItemProps) => {



    return(
        <View style={styles.container}>
            <Text style={styles.dateTimeText}>
                13/09/2004 às 17h00
            </Text>

            <View style={styles.starsContainer}>
                {Array.from(new Array(rate)).map((_, index, all) => (
                        <FontAwesome
                        key={index} 
                        name={'star'} 
                        size={24} 
                        color={theme.colors.highlight}
                        style={{
                            ...styles.starFill, 
                            ...(index === 0 ? styles.starFillStart : {}), 
                            ...((index+1) === all.length ? styles.starFillStart : {}),
                        
                        }} />
                ))}
                {Array.from(new Array(5 - rate)).map((_, index, all) => (
                        <FontAwesome
                        key={index} 
                        name={'star-o'} 
                        size={24} 
                        color={theme.colors.highlight}
                        style={styles.star}
                        />
                ))}

            </View>

            <Text style={styles.descriptionText}>
                {description}
            </Text>
        </View>
        
    );
}


const styles = StyleSheet.create ({

    container: {
        backgroundColor: theme.colors.paper,
        borderRadius: 8,
        padding: 8,
        gap: 8,
    },
    dateTimeText: {
        color: theme.colors.textPlaceholder,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        padding: 4,
    },
    starFill: {
        backgroundColor: theme.colors.backgroundHighlight,
        padding: 4,
    },
    starFillStart: {
        backgroundColor: theme.colors.backgroundHighlight,
        padding: 4,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    starFillEnd: {
        backgroundColor: theme.colors.backgroundHighlight,
        padding: 4,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    descriptionText: {
        color: theme.colors.text,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
    },
    

})