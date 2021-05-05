import history from './history';
import jwtDecode from 'jwt-decode';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclass';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclass123';
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

export const getSessionData = () => {
    const sessionData = localStorage.getItem('app-token') || '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData;
}

// 

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();

    try {
        const tokenDecoded = jwtDecode(sessionData.access_token);
        return tokenDecoded;
    } catch (error) {
        return {};
    }
}

export const isTokenValid = () => {
    const { exp } = getAccessTokenDecoded();

    return Date.now() <= exp * 1000;
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();

    return sessionData.access_token && isTokenValid();
}


export const isAllowedByRole = (routeRoles) => {
    if (routeRoles.length === 0) {
        return true;
    }

    const { authorities } = getAccessTokenDecoded();

    return routeRoles.some(role => authorities?.includes(role));
}

//   

export const logout = () => {
    localStorage.removeItem('app-token');
    history.replace('/login');
}