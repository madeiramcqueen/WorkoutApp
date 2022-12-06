// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/workouts';

export function index() {
    return sendRequest(BASE_URL);
}

export function show(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function update(id, workout) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', workout);
}

export function create(id, workout) {
    return sendRequest(BASE_URL, 'POST', workout);
}

export function deleteWorkout(id, workout) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE', workout);
}