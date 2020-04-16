import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import { connectRoutes } from 'redux-first-router';
import createHashHistory from 'history/createHashHistory';

const routesMap = {
  HOME: '/',

  USERS: '/users/:id?',
  QUEUES: '/queues/:id?',
};

const { reducer, middleware, enhancer } = connectRoutes(routesMap, {
  createHistory: createHashHistory,
});

const middlewares = [...getDefaultMiddleware(), middleware];
export const store = configureStore({
  reducer: {
    location: reducer,
  },
  middleware: middlewares,
  enhancers: [enhancer],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
