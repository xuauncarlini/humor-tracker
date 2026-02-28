import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TNavigationScreenProps, TRouteProps } from "../routes";
import { BaseInput } from "../shared/components/BaseInput";
import { Button } from "../shared/components/Button";
import { theme } from "../shared/themes/Theme";
import FontAwesome from '@expo/vector-icons/FontAwesome';



export const DetailPage = () => {
    
    const { params } = useRoute<TRouteProps<'detail'>>();
    const navigation = useNavigation<TNavigationScreenProps>();

    return (
        <>
            <Text>Details {params.rate}</Text>

                <View style={styles.footerContainer}>
                    <Text style={styles.footertitle}>
                        'Como está o seu humor hoje?' : 'Qual é o seu nome?'
                    </Text>
                
                    <View style={styles.footerStarContainer}>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome 
                            name={params.rate >= 1 ? 'star' : "star-o"} 
                            size={24} 
                            color={params.rate >= 1 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome 
                            name={params.rate >= 2 ? 'star' : "star-o"} 
                            size={24} 
                            color={params.rate >= 2 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome 
                            name={params.rate >= 3 ? 'star' : "star-o"} 
                            size={24} 
                            color={params.rate >= 3 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome 
                            name={params.rate >= 4 ? 'star' : "star-o"} 
                            size={24} 
                            color={params.rate >= 4 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <FontAwesome 
                            name={params.rate >= 5 ? 'star' : "star-o"} 
                            size={24} 
                            color={params.rate >= 5 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        
                    </View>
                    
                    <BaseInput label='Data e hora'>
                        <TextInput
                            style={styles.footerInput}
                            placeholder='Escreva seu nome aqui...'
                            placeholderTextColor={theme.colors.textPlaceholder}
                        />
                    </BaseInput>
                    
                    <BaseInput label='Descreva mais sobre esse humor'>
                        <TextInput
                            
                            style={{...styles.footerInput, ...styles.footerInputArea}}
                            placeholder='Escreva seu nome aqui...'
                            placeholderTextColor={theme.colors.textPlaceholder}
                            multiline
                            numberOfLines={16}
                        />
                    </BaseInput>

                    <View style={{flex: 1}}/>

                </View>

                <View style={styles.actionsContainer}>
                    <Button vairant="outlined" color={theme.colors.error}>
                        <FontAwesome 
                            name="trash-o"
                            size={18} 
                            color={theme.colors.error} />
                    </Button>
                    <Button 
                        vairant="outlined"
                        grow
                        title="Cancelar"
                    />
                    <Button
                        grow
                        title="Salvar"
                    />
                </View>
        
        </>
        );
    }
    const styles = StyleSheet.create ({
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
        flex: 1,
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
    footerInputArea: {
        height: theme.fonts.sizes.body * 16,
        textAlignVertical: 'top',

    },
    footerStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    actionsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

    }
});