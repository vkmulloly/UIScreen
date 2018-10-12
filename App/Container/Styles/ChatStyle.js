import { StyleSheet } from 'react-native'
const NotoSan = 'NotoSans-Regular';
const OpenSan = 'OpenSans-Regular';
const SegoUi = 'Segoe UI, Regular';
export default StyleSheet.create({
    blockContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    ImageStyle: {
        padding: 10,
        height: 30,
        width: 30, marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    usermsg: {
        justifyContent: 'flex-end',
        flex: 1,
        margin: 5,
        alignItems: 'flex-end'
    },
    usermsgStyle: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#1E88E5',
        fontSize: 16, fontFamily: NotoSan,
        paddingLeft: 10, paddingRight: 20,
        color: '#FFFFFF'
    },
    systemMsg: {
        borderRadius: 20,
        padding: 10, marginTop: 20,
        fontSize: 16, fontFamily: NotoSan,
    },
    epfHeaderDetails: {
        flex: 1, justifyContent: 'flex-end',
        margin: 5, paddingBottom: 10
    },
    chatRowStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        paddingLeft: 10, paddingTop: 10,
        alignItems: 'center',
    },
    textInputstyle: {
        flex: 1, fontSize: 20,
        fontFamily: SegoUi
    },
    firstRow: {
        flexDirection: 'row', paddingLeft: 5
    },
    firstRowCol1: {
        flex: 1, flexDirection: 'column', paddingRight: 15
    },
    firstRowCol2: {
        flex: 1,
        flexDirection: 'column',
    },
    secondRow: {
        flexDirection: 'row',
        paddingLeft: 5,
        marginTop: 15
    }



})
