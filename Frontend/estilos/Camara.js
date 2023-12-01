import { StyleSheet } from 'react-native'


export const CamaraStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
        margin: '10%'
    },
    containerButtons: {
        with:'100%',
        height:'100%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:'-10%',
        justifyContent:'space-between',
        alignItems:'flex-end',
        display: 'flex',
        flexDirection: 'row',
    },
});

