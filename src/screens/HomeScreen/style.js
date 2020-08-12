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
        borderBottomWidth: 2,
        borderBottomColor: "green",
        elevation: 1,
        borderTopLeftRadius:wp(2),
        borderTopRightRadius:wp(2),
        paddingRight:"2%"

    },

    inputStyle: {
        paddingLeft: "5%",
        flex: 1,
        marginRight: "1%",
        
    },

    AddButton: {
        // backgroundColor: "green",
        marginLeft: "1%",
    },

    // flatList

    flatListStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal:"3%",
        marginVertical:"5%",
        borderBottomWidth: 2,
        borderBottomColor: "green",
        elevation: 0.5,
        padding:"1%",
        // flex:1
    },
    buttonStyle:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
    },
    textStyle:{
        flex:3,
        alignItems:"center",
        flexDirection:'row'
    },
    textTag:{
        fontSize:wp(4),
        fontWeight:"700"
    },
    ModalButton:{
        backgroundColor:"green",
        paddingHorizontal:wp(4),
        paddingVertical:wp(2),
        borderRadius:wp(2)
    },
    ModalButtonOK:{
        backgroundColor:"green",
        paddingHorizontal:wp(8),
        paddingVertical:wp(2),
        borderRadius:wp(2)
    }
});
