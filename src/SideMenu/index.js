import React, { Component } from 'react';
import { Platform, StyleSheet, Linking, UIManager, LayoutAnimation, Dimensions, Alert, FlatList, ScrollView, StatusBar, Keyboard, SafeAreaView, View, KeyboardAvoidingView, Animated, ImageBackground, BackHandler, TouchableOpacityComponent } from 'react-native';
import { Button, Image, Text, Icon, Input, Divider, Avatar } from 'react-native-elements';
import Colors from '../Utils/Colorss';
import Fonts from '../Utils/CustomFonts';
import Config from '../Utils/Config';
import Styles from '../Component/Styles';
import { SideMenuJson } from '../Component/ImageJson';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import GlobalCheckbox from '../Component/GlobalCheckbox'
const { height, width } = Dimensions.get('window');

export class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            checked: true
        }
    }


    componentWillUnmount() {
        this.setState({})
    }



    //Event
    CheckEvent(ind) {
        console.log('CheckEvent', SideMenuJson.Events);
        SideMenuJson.Events.map((item, index) => {
            if (index === ind) {
                console.log('index', index, ind);
                item.Checked = true
            }
            else {
                item.Checked = false
            }
        })
        this.setState({})
    }

    renderEvent = ({ item, index }) => {
        return (
            <View key={index} style={{ flexDirection: 'row', }}>
                <GlobalCheckbox
                    WrapperAlignment={{ alignItems: 'center' }}
                    Title={<View style={{ flexDirection: 'row' }}>
                        <View style={[
                            Styles().available, { alignSelf: 'flex-start' }]}>
                            <Text style={
                                Styles().AvailableText}>{item.value ? item.value : ''}</Text>
                        </View>
                    </View>}
                    CheckedIcon='md-radio-button-on'
                    UnCheckedIcon='md-radio-button-off'
                    IconType='ionicon'
                    CheckedColor={Colors.White}
                    Checked={SideMenuJson.Events.length > 0 ? SideMenuJson.Events[index].Checked : false}
                    OnPress={() => this.CheckEvent(index)}
                />
            </View>
        )
    }


    renderContest = ({ item, index }) => {
        const { checked } = this.state;
        console.log('checke', checked);
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Contest')} style={[Styles().SideMenuItem1, { backgroundColor: checked ? Colors.trans : Colors.White }]}>
                <View style={[Styles().available, { alignSelf: 'flex-start', }]}>
                    <Text style={[Styles().AvailableText, { color: checked ? Colors.White : Colors.trans }]}  >{item.value ? item.value : ''} </Text>
                </View>
            </TouchableOpacity>
        )
    }



    // Player
    CheckPlayer(ind) {
        console.log('CheckPlayer', SideMenuJson.Player);
        SideMenuJson.Player.map((item, index) => {
            if (index === ind) {
                console.log('index', index, ind);
                item.Checked = true
            }
            else {
                item.Checked = false
            }
        })
        this.setState({})
    }

    renderPlayer = ({ item, index }) => {
        return (
            <View key={index} style={{ flexDirection: 'row', }}>
                <GlobalCheckbox
                    WrapperAlignment={{ alignItems: 'center' }}
                    Title={<View style={{ flexDirection: 'row' }}>
                        <View style={[
                            Styles().available, { alignSelf: 'flex-start' }]}>
                            <Text style={
                                Styles().AvailableText}>{item.value ? item.value : ''}</Text>
                        </View>
                    </View>}
                    CheckedIcon='md-radio-button-on'
                    UnCheckedIcon='md-radio-button-off'
                    IconType='ionicon'
                    CheckedColor={Colors.White}
                    Checked={SideMenuJson.Player.length > 0 ? SideMenuJson.Player[index].Checked : false}
                    OnPress={() => this.CheckPlayer(index)}
                />
            </View>
        )
    }

    //Points
    CheckPoints(ind) {
        console.log('CheckPoints', SideMenuJson.Points);
        SideMenuJson.Points.map((item, index) => {
            if (index === ind) {
                console.log('index', index, ind);
                item.Checked = true
            }
            else {
                item.Checked = false
            }
        })
        this.setState({})
    }

    renderPoints = ({ item, index }) => {
        return (
            <View key={index} style={{ flexDirection: 'row', }}>
                <GlobalCheckbox
                    WrapperAlignment={{ alignItems: 'center' }}
                    Title={<View style={{ flexDirection: 'row' }}>
                        <View style={[
                            Styles().available, { alignSelf: 'flex-start' }]}>
                            <Text style={
                                Styles().AvailableText}>{item.value ? item.value : ''}</Text>
                        </View>
                    </View>}
                    CheckedIcon='md-radio-button-on'
                    UnCheckedIcon='md-radio-button-off'
                    IconType='ionicon'
                    CheckedColor={Colors.White}
                    Checked={SideMenuJson.Points.length > 0 ? SideMenuJson.Points[index].Checked : false}
                    OnPress={() => this.CheckPoints(index)}
                />
            </View>
        )
    }




    render() {
        const { loading } = this.state;
        return (
            <SafeAreaView style={[Styles().container12, { width: '100%' }]}>

                <ScrollView style={{ flex: 1, width: '100%' }} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    {/* Events */}
                    <View style={{ marginTop: Config.margin * 2, width: width * 0.7 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={Styles().ItemView}>
                                <Text style={Styles().ItemTitle}>Events</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', width: width / 6 }}>
                                <Icon
                                    name={Config.DownArror}
                                    type={Config.TypeArrow}
                                    size={height / 40}
                                    iconStyle={{ fontWeight: 'bold' }}
                                    color={Colors.White}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: Config.margin }} >

                            {SideMenuJson.Events && SideMenuJson.Events != '' ?
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={SideMenuJson.Events}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={SideMenuJson.Events ? this.renderEvent : null}
                                />
                                : null}
                        </View>
                    </View>

                    {/* Contest */}

                    <View style={{}}>
                        <View style={{ flexDirection: 'row', marginBottom: Config.margin }}>
                            <View style={Styles().ItemView}>
                                <Text style={Styles().ItemTitle}>Contest</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', width: width / 6 }}>
                                <Icon
                                    name={Config.DownArror}
                                    type={Config.TypeArrow}
                                    size={height / 40}
                                    iconStyle={{ fontWeight: 'bold' }}
                                    color={Colors.White}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: Config.margin }} >

                            {SideMenuJson.Contest && SideMenuJson.Contest != '' ?
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={SideMenuJson.Contest}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={SideMenuJson.Contest ? this.renderContest : null}
                                />
                                : null}
                        </View>
                    </View>

                    {/* Player */}
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={Styles().ItemView}>
                                <Text style={Styles().ItemTitle}>Player</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', width: width / 6 }}>
                                <Icon
                                    name={Config.DownArror}
                                    type={Config.TypeArrow}
                                    size={height / 40}
                                    iconStyle={{ fontWeight: 'bold' }}
                                    color={Colors.White}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: Config.margin }} >

                            {SideMenuJson.Player && SideMenuJson.Player != '' ?
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={SideMenuJson.Player}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={SideMenuJson.Player ? this.renderPlayer : null}
                                />
                                : null}
                        </View>
                    </View>

                    {/* Points */}
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={Styles().ItemView}>
                                <Text style={Styles().ItemTitle}>Points</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', width: width / 6 }}>
                                <Icon
                                    name={Config.DownArror}
                                    type={Config.TypeArrow}
                                    size={height / 40}
                                    iconStyle={{ fontWeight: 'bold' }}
                                    color={Colors.White}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: Config.margin }} >

                            {SideMenuJson.Points && SideMenuJson.Points != '' ?
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={SideMenuJson.Points}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={SideMenuJson.Points ? this.renderPoints : null}
                                />
                                : null}
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        );

    }
}

export default SideMenu