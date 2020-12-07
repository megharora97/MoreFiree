import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import Reducer from '../reducers/actionreducers'
import thunk from 'redux-thunk'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'react-native-firebase/firestore'

import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

// react-redux-firebase config
const firebaseConfig = {
    // userProfile: 'users',
    // useFirestoreForProfile: true,
    projectId: "morefire-61dcd",
    apiKey: "AIzaSyD9mPm5Z5Pp_-M9i6FWf2fDDjaaCm8LV6E",
    authDomain: "morefire-61dcd.firebaseapp.com",
    databaseURL: "https://morefire-61dcd-default-rtdb.firebaseio.com/",
    messagingSenderId: "123049071524",
    storageBucket: "morefire-61dcd.appspot.com",
    appId: '1:123049071524:android:bc02c4e8c9a7f739a2a731'
}

// Initialize firebase instance
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    externalReducer: Reducer // <- needed if using firestore
})



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, Reducer)
// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Data = {
        Matches: [
            {
                event: "OMNI Fun Day",
                contest: "Darts",
                rounds: [
                    {
                        p1: +2,
                        p2: -2
                    },
                    {
                        p1: -5,
                        p2: +5
                    },
                    {
                        p1: +2,
                        p2: -2
                    }
                ]
            },
            {
                event: "Rotary club",
                contest: "Frisbee Toss",
                rounds: [
                    {
                        p1: -2,
                        p2: +2
                    },
                    {
                        p1: +2,
                        p2: -2
                    },
                    {
                        p1: +2,
                        p2: -2
                    }
                ]
            },
            {
                event: "OMNI Fun Day",
                contest: "Frisbee Toss",
                rounds: [
                    {
                        p1: +2,
                        p2: -2
                    },
                    {
                        p1: -9,
                        p2: +9
                    },
                    {
                        p1: +2,
                        p2: -2
                    }
                ]
            },
            {
                event: "Rotary club",
                contest: "CornHole",
                rounds: [
                    {
                        p1: +2,
                        p2: -2
                    },
                    {
                        p1: -9,
                        p2: +9
                    },
                    {
                        p1: +2,
                        p2: -2
                    }
                ]
            },
            {
                event: "OMNI Fun Day",
                contest: "CornHole",
                rounds: [
                    {
                        p1: +2,
                        p2: -2
                    },
                    {
                        p1: -9,
                        p2: +9
                    },
                    {
                        p1: +2,
                        p2: -2
                    }
                ]
            }
        ],
        Filters: {
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
}


export const store = createStore(persistedReducer, Data, applyMiddleware(thunk));
export const persistor = persistStore(store);


export const firebaseProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}
