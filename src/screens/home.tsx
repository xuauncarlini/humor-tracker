
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View, Button } from "react-native";
import { TNavigationScreenProps } from "../routes";
import { Header } from "../shared/components/Header";
import { Footer } from "../shared/components/Footer";
import { BaseInput } from "../shared/components/BaseInput";



export const HomePage = () => {
    const navigation = useNavigation<TNavigationScreenProps>();
    return <>
        <Header 
            name={undefined}
        />

        <View style={{ flex: 1 }}/>
        <Footer>
            <BaseInput label='Nome' asButton onPress={() => navigation.navigate('setusername')}>
                <Text style={{ fontFamily: 'extraBold' }}>Footer</Text>
            </BaseInput>
        </Footer>
    </>;
}