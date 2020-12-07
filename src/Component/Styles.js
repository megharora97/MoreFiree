import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../Utils/CustomFonts';
import Config from '../Utils/Config';
import Colors from '../Utils/Colorss';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create(props => ({
    container: { flex: 1, backgroundColor: Colors.White, alignItems: 'center' },
   
    
    // ============================= Header ================
    HeaderMainView: { height: height / 14, padding: Config.margin, width: '100%', backgroundColor: Colors.White, flexDirection: 'row', justifyContent: 'space-between', elevation: 3 },
    SearchInputMainView: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: Config.margin, borderWidth: 0.5, borderRadius: Config.borderradius, width: width - (Config.margin * 2), alignSelf: 'center', marginTop: Config.margin },


    //-------------------- GlobalCheckbox -------------------------------------
    GlobalCheckboxTextStyle: { fontFamily: Fonts.GeometricRegular, fontWeight: 'normal', flex: 1, flexWrap: 'wrap', height: '100%', textAlignVertical: 'center', marginLeft: Config.margin, marginRight: 0 },
    CheckBoxContainerStyle: { margin: 0, marginLeft: 0, marginRight: 0, padding: Config.margin, borderWidth: 0, backgroundColor: Colors.trans },
    available: { backgroundColor: Colors.Grey89, borderColor: Colors.Grey, borderRadius: 1, padding: Config.borderradius },
    AvailableText: { fontSize: height / 55, color: Colors.White, fontFamily: Fonts.GeometricSemiBold },


    // ============= Side Menu ===================
    container12: { flex: 1, backgroundColor: Colors.NavyBlue, alignItems: 'center' },
    SideMenuView: { width: '100%', backgroundColor: Colors.White, paddingVertical: Config.margin / 2, borderBottomWidth: StyleSheet.hairlineWidth * 2, borderColor: Colors.Grey66, paddingHorizontal: Config.margin },
    SideMenuTextView: { justifyContent: 'center', marginLeft: (width / 12) + (Config.margin * 2), width: width - (Config.margin * 25), },
    SideMenuText: { fontSize: Config.TitleMediumFontSize, textDecorationLine: 'underline', fontFamily: Fonts.GeometricRegular },
    SideMenuItem: { flexDirection: 'row', justifyContent: 'center', borderWidth: StyleSheet.hairlineWidth * 2, borderColor: Colors.Grey66, padding: Config.margin },
    SideMenuItem1: { flexDirection: 'row', justifyContent: 'center', borderWidth: StyleSheet.hairlineWidth * 2, borderColor: Colors.Grey66, padding: Config.margin/2 },
    ItemTitle: { fontSize: Config.TitleSemiBigFontSize, fontFamily: Fonts.GeometricRegular,color:Colors.White },
    ItemView: { justifyContent: 'center', marginLeft: Config.margin, width: width - (Config.margin * 22), },
    InactiveCorouselDot: { borderRadius: 10, width: height / 150, height: height / 150, backgroundColor: Colors.Grey },
}));