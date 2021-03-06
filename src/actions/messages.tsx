import client from './client';
import { SET_MESSAGES } from './types';

// const BASE_URL = process.env.BASE_URL;
export const getAllMessages = () => async (dispatch: any) => {
	try {
		const res = await client.get(`/messages`);
		dispatch(setMessages(res.data));
	} catch (error) {
		console.log('err ', error);
	}
};

export const setMessages = (payload: any) => {
	return {
		type: SET_MESSAGES,
		payload,
	};
};
