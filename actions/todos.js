import axios from 'axios';
import {API_URL} from '../constans';

export function allTodos(){
	return {
		type: 'ALL_TODOS',
		payload: axios.get(`${API_URL}/todos`)
	}
}