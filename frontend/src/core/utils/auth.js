import history from './history';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclass';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclass123';
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

export const getSessionData = () => {
    const sessionData = localStorage.getItem('app-token') || '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData;
}

export const logout = () => {
    localStorage.removeItem('app-token');
    history.replace('/login');
}