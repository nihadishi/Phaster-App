import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        // paddingVertical:"5%",
        justifyContent:"space-evenly",
        paddingHorizontal:"10%",
        backgroundColor:"#F1F0EC",
        width:"100%",
        height:"100%",
        
    },
    logo:{
        alignItems:"center",
        justifyContent:"center"
        
    },
    logoImage:{
        width:187,
        height:47,
        borderRadius:10,
        transform: [{scale: 1.05}],
        
    },
    needy:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"35%",
        overflow:"hidden",
        transform: [{scale: 1.27}],
        
    },
    needyImage:{
        width:"100%",
        height:"100%",
        objectFit:"contain"
        
    },
    text:{
        fontSize:45,
        lineHeight:73,
        color:"#014370",
        fontWeight:"800",
        // fontFamily:"Nunito-Black",
        width:"100%",
    },
    buttons:{
        flexDirection:"column",
    },
    signupButton:{
        height:"7%",
        minHeight:45,
        borderWidth:1,
        borderColor:"#014370",
        backgroundColor:"#066AAE",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:"5%",
        borderRadius:15,
        elevation:4
        
    },
    loginButton:{
        borderWidth:1,
        minHeight:45,
        borderColor:"#014370",
        backgroundColor:"#014370",
        height:"7%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
        elevation:4

    },
    buttonTexts:{
        fontSize:20,
        color:"#fff",
        fontFamily:"Nunito-Medium",
    }
    
    
})