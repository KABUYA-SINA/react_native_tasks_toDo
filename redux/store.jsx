import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import todoReducer from "./todo";
import { combineReducers } from '@reduxjs/toolkit';
import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist'


const rootReducer =  combineReducers({
    todo: todoReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export default store