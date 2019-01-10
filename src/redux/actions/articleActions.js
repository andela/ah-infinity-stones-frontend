import { RECEIVE_INCREMENT , REQUEST_INCREMENT } from './actionTypes';

export const requestIncrement = () => ({ type: REQUEST_INCREMENT });
export const receiveIncrement = count => ({ type: RECEIVE_INCREMENT, count});
