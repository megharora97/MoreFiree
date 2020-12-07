import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../Utils/Colorss';
import Fonts from '../Utils/CustomFonts';
import Config from '../Utils/Config';


//------------ Side Menu --------------
export const SideMenuJson = {


    Events: [
        { value: 'OMNI Fun Day', Checked: false },
        { value: 'Rotary Club Event', Checked: false },
        { value: 'Placeholder Name', Checked: false },
    ],


    Contest: [
        { value: 'BasketBall', path: 'Contest' },
        { value: 'Darts', path: 'Contest' },
        { value: 'CornHole', path: 'Contest' },
        { value: 'Frisbee Toss', path: 'Contest' },
    ],


    Player: [
        { value: 'Player1', Checked: false },
        { value: 'Player2', Checked: false },

    ],

    Points: [
        { value: '0-5', Checked: false },
        { value: '5-25', Checked: false },
        { value: '25-100', Checked: false },
        { value: '100+', Checked: false },
    ],


}

export const Contestss = {
    BasketBall: [
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '+1',
            sub: '-1'
        },
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '-5',
            sub: '+5'
        },
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '+1',
            sub: '-1'
        }
    ],

    Darts: [
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '+1',
            sub: '-1'
        },
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '-5',
            sub: '+5'
        },
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '+1',
            sub: '-1'
        }
    ],

    CornHole: [
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '+1',
            sub: '-1'
        },
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '-5',
            sub: '+5'
        },
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '+1',
            sub: '-1'
        }
    ],
    FrisbeeToss: [
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '+1',
            sub: '-1'
        },
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '-5',
            sub: '+5'
        },
        {
            name: 'Player1 Wins',
            img1: require('../../assets/boy1.png'),
            img2: require('../../assets/boy2.png'),
            title: 'Placeholder',
            add: '+1',
            sub: '-1'
        }
    ],
}



