import { apiClient } from '../config/APIConfig';

export default class UserAPI {
    static async register(data) {
        try{
            const response = await apiClient.post('/register/', data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    static async login (data) {
        try{
            const response = await apiClient.post('/login/', data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    static async logout () {
        try{
            const response = await apiClient.post('/logout/', data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    static async getProfile(){
        try{
            const response = await apiClient.get('/user/profile/');
            const data = response.data;
            return data;
        } catch (error) {
            if (error.response.status === 401) {
                console.log("401");
            }
        }
    }
}