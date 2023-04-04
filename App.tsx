import React,{ FC } from 'react'
import { Text, View } from 'react-native'
import colors from "./src/theme/colors";
import fonts from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'


const App: FC = () => {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: colors.primary, fontSize: fonts.size.xlg, fontWeight: fonts.weight.bold}}>hello world</Text>
        <AntDesign name="stepforward" color={colors.primary} size={fonts.size.xlg} />
    </View>
    )
}

export default App
