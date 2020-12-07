import React from 'react';
import { Dimensions, FlatList, ScrollView, SafeAreaView, View } from 'react-native';
import { Image, Text, Icon } from 'react-native-elements'
import Colors from '../Utils/Colorss';
import Config from '../Utils/Config'
import Header from '../../src/Component/Header';
import Styles from '../Component/Styles';
import { Contestss } from '../../src/Component/ImageJson';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { fetchingContestSuccess } from '../redux/reducers/actionreducers'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'


const { height, width } = Dimensions.get('window');

class Contest extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const { route } = this.props;
        console.log('route', route);
        console.log('RandomData', this.props.Data);

    }


    applyFilter(data) {

        return data.slice(0, 3)
    }

    remainingFilter(data) {

        return data.slice(2,5)
    }



    renderDart = ({ item, index }) => {
        console.log('renderDart',item);
        const img1 = require('../../assets/boy1.png')
        const img2 = require('../../assets/boy2.png')
        return (
            <View key={index} style={{ flex: 1, flexDirection: 'row', borderWidth: 0.2, borderColor: Colors.Grey94 }}>
                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', }}>{item.p1 > item.p2 ? "Player1 Wins" : "Player2 Wins"}</Text>
                </View>
                <View style={{ flex: 0.5, padding: Config.margin }}>

                    <View style={{ flexDirection: 'row', marginBottom: Config.margin }}>
                        <Image
                            source={img1}
                            style={{ height: 20, width: 20, borderRadius: Config.margin }}
                            resizeMethod='resize'
                            placeholderStyle={{ backgroundColor: Colors.trans }}
                        />
                        <View style={{ marginHorizontal: Config.margin / 2 }}>
                            <Icon
                                name='circle'
                                type='feather'
                                color={Colors.Black}
                                size={height / 50}
                                containerStyle={{
                                    justifyContent: 'center',
                                }}
                                underlayColor='transparent'
                            />
                        </View>
                        <Text style={{ marginHorizontal: Config.margin / 2, fontWeight: 'bold' }}>{item.p1}</Text>
                        <Text style={{ marginHorizontal: Config.margin / 2, fontWeight: 'bold' }}>{"Placeholder"}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            source={img2}
                            style={{ height: 20, width: 20, borderRadius: Config.margin }}
                            resizeMethod='resize'
                            placeholderStyle={{ backgroundColor: Colors.trans }}
                        />
                        <View style={{ marginHorizontal: Config.margin / 2 }}>
                            <Icon
                                name='circle'
                                type='feather'
                                color={Colors.Black}
                                size={height / 50}
                                containerStyle={{
                                    justifyContent: 'center',
                                }}
                                underlayColor='transparent'
                            />
                        </View>
                        <Text style={{ marginHorizontal: Config.margin / 2, fontWeight: 'bold' }}>{item.p2}</Text>
                        <Text style={{ marginHorizontal: Config.margin / 2, fontWeight: 'bold' }}>{"Placeholder"}</Text>
                    </View>
                </View>
            </View>
        )
    }



    render() {
        return (
            <SafeAreaView style={Styles().container}>
                <Header
                    navigation={this.props.navigation}
                    onMenuPress={() => this.props.navigation.toggleDrawer()}
                />

                <ScrollView style={{ flex: 1, width: '100%' }} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View>


                        {this.applyFilter(this.props.Data).map((match, index) => {

                            return (
                                <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: Config.margin, backgroundColor: Colors.Yellowish }}>
                                        <Text style={{ fontWeight: 'bold' }}>{match.event}</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{match.contest}</Text>
                                    </View>
                                    <View style={{ marginBottom: Config.margin }} >
                                        {/* <Text style={{ fontWeight: 'bold' }}>Match {index + 1}: {match.contest}</Text> */}

                                        <FlatList
                                            showsVerticalScrollIndicator={false}
                                            showsHorizontalScrollIndicator={false}
                                            data={match.rounds}
                                            extraData={this.state}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={this.renderDart}
                                        />
                                    </View>
                                </>
                            )
                        })}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: Config.margin, backgroundColor: Colors.NavyBlue }}>
                            <Text style={{ fontWeight: 'bold', color: Colors.White }}>Other Challenges</Text>

                            <View>
                                <Icon
                                    name={Config.UpArror}
                                    type={Config.TypeArrow}
                                    size={height / 40}
                                    iconStyle={{ fontWeight: 'bold' }}
                                    color={Colors.White}
                                />
                            </View>
                        </View>

                        {this.remainingFilter(this.props.Data).map((match, index) => {

                            return (
                                <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: Config.margin, backgroundColor: Colors.Yellowish }}>
                                        <Text style={{ fontWeight: 'bold' }}>{match.event}</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{match.contest}</Text>
                                    </View>
                                    <View style={{ marginBottom: Config.margin }} >
                                        {/* <Text style={{ fontWeight: 'bold' }}>Match {index + 1}: {match.contest}</Text> */}

                                        <FlatList
                                            showsVerticalScrollIndicator={false}
                                            showsHorizontalScrollIndicator={false}
                                            data={match.rounds}
                                            extraData={this.state}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={this.renderDart}
                                        />
                                    </View>
                                </>
                            )
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView >
        );
    }
}

const mapStateToProps = state => {
    console.log(" state", state)
    return {
        Data: state.Matches
    };
}

// export default compose(
//     firestoreConnect(() => ['matches']),
//     connect((state) => {
//         console.log('connecteddddata', state)
//         return {
//             Matches: state.firestore.data.matches,
//             // profile: state.firestore.profile, // pass profile data as this.props.profile
//             // auth: state.firestore.auth // pass auth data as this.props.auth
//         }
//     }
//         // connect(({ firestore: { data } }, props) => {

//         //     console.log('connecteddddata',data)
//         //     return ({ Matches: data.matches || [{}] })

//         // }, { fetchingContestSuccess })
//     ))(Contest)

//   connect(mapStateToProps, { fetchingContestSuccess })

export default connect(mapStateToProps, { fetchingContestSuccess })(Contest);
