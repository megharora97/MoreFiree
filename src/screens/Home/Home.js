import React from 'react';
import { Dimensions, FlatList, ScrollView, SafeAreaView, View, Button } from 'react-native';
import { Image, Text, Icon } from 'react-native-elements'
import Header from '../../Component/Header';
import styles from '../../Component/Styles';


const { height, width } = Dimensions.get('window');

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    render() {
        return (
            <SafeAreaView style={styles().container}>
                <Header
                    navigation={this.props.navigation}
                    onMenuPress={() => this.props.navigation.toggleDrawer()}
                />
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Button
                        title='Welcome'
                        // onPress={() => this.props.navigation.navigate('Contest')}
                    >
                    </Button>
                </View>

            </SafeAreaView >

        );
    }
}