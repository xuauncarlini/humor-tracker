import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TNavigationScreenProps, TRouteProps } from "../routes";
import { BaseInput } from "../shared/components/BaseInput";
import { Button } from "../shared/components/Button";
import { theme } from "../shared/themes/Theme";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";



export const DetailPage = () => {
    
    const { params } = useRoute<TRouteProps<'detail'>>();
    const navigation = useNavigation<TNavigationScreenProps>();

    const [date, setDate] = useState (new Date());
    const [description, setDescription] = useState ('');
    const [rate, setRate] = useState (params.rate);
    const [showDateTimePicker, setShowDateTimePicker] = useState (false);

    return (
        <>
            <Text>Details {params.rate}</Text>

                <View style={styles.footerContainer}>
                    <Text style={styles.footertitle}>
                        'Como está o seu humor hoje?'
                    </Text>
                
                    <View style={styles.footerStarContainer}>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesome 
                            name={rate >= 1 ? 'star' : "star-o"} 
                            size={24} 
                            color={rate >= 1 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesome 
                            name={rate >= 2 ? 'star' : "star-o"} 
                            size={24} 
                            color={rate >= 2 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesome 
                            name={rate >= 3 ? 'star' : "star-o"} 
                            size={24} 
                            color={rate >= 3 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesome 
                            name={rate >= 4 ? 'star' : "star-o"} 
                            size={24} 
                            color={rate >= 4 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesome 
                            name={rate >= 5 ? 'star' : "star-o"} 
                            size={24} 
                            color={rate >= 5 ? theme.colors.highlight : theme.colors.textPlaceholder} />
                        </TouchableOpacity>
                        
                    </View>
                    
                    <BaseInput label='Data e hora' asButton onPress={() => setShowDateTimePicker(true)}>
                        <TextInput
                            value={date.toLocaleString('pt-Br')}
                            editable={false}
                            pointerEvents="none"
                            
                            style={styles.footerInput}
                            placeholder='Selecione uma data e hora...'
                            placeholderTextColor={theme.colors.textPlaceholder}
                        />
                    </BaseInput>
                    <DateTimePickerModal
                        isVisible={showDateTimePicker}
                        date={date}
                        mode="datetime"
                        onConfirm={(date) => {setShowDateTimePicker(false); setDate(date)}}
                        onCancel={() => setShowDateTimePicker(false)}
                    />
                    
                    <BaseInput label='Descreva mais sobre esse humor'>
                        <TextInput

                            value={description}
                            onChangeText={setDescription}
                            
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
                    {params.id &&(
                        <Button vairant="outlined" color={theme.colors.error}>
                        <FontAwesome 
                            name="trash-o"
                            size={18} 
                            color={theme.colors.error} />
                    </Button>
                    )}
                    <Button 
                        vairant="outlined"
                        grow
                        title="Cancelar"
                        onPress={() => navigation.goBack()}
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