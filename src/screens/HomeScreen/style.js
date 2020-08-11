import { Dimensions, StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    inputViewStyle: {
        flexDirection: "row",
        marginHorizontal: '5%',
        alignItems: "center",
        justifyContent: "center",
        marginVertical: '5%',
    },

    inputStyle: {
        borderBottomWidth: 2,
        paddingLeft: "5%",
        flex: 1,
        marginRight: "1%",
        borderBottomColor: "green",
        elevation: 2
    },

    AddButton: {
        backgroundColor: "green",
        marginLeft: "1%",
    },

    // flatList

    flatListStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal:"5%",
        marginVertical:"5%",
        borderBottomWidth: 2,
        borderBottomColor: "green",
        elevation: 0.5,
        padding:"4%",
        // flex:1
    },
    buttonStyle:{
        flexDirection:"row"
    },
    textStyle:{
        flex:1,
        alignItems:"center",
    },
    textTag:{
        fontSize:wp(4),
        fontWeight:"700"
    }
});
