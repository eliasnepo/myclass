import axios from "axios"
import qs from "qs";
import { BASE_URL, CLIENT_ID, CLIENT_SECRET, getSessionData } from "./auth";

export const makeRequest = (params) => {
    return axios({
      ...params,
    });
}

export const makePrivateRequest = (params) => {
    const sessionData = getSessionData();
  
    const headers = {
      'Authorization': `Bearer ${sessionData.access_token}`
    }
  
    return makeRequest({ ...params, headers });
  }

export const makeLogin = data => {                      // Receives an User (object) with username and password;
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;
  
    const headers = {
      Authorization: `Basic ${window.btoa(token)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  
    const payload = qs.stringify({ ...data, grant_type: 'password' });
    return makeRequest({ url: `${BASE_URL}/oauth/token`, data: payload, method: 'POST', headers})
}