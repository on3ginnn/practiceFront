import UserAPI from  "../api/userAPI";


class UserStore{
    async register(data){
        try{
            const response = await UserAPI.register(data);
            if (response.status == 200){
                console.log("register success");
            }
            return false;
        } catch (error){
            console.log(error);
        }
    }
    async login(data){
        try{
            const response = await UserAPI.login(data);
            if (response.status == 200) {
                console.log("login success")
            }
            return false;
        } catch (error) {
            console.log(error)
        }
    }
    async logout(){
        try {
            const response = await UserAPI.logout();
            if (response.status == 200) {
                console.log("logout success")
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }
    async getProfile(){
        try {
            const data = await UserAPI.getProfile();
            if (!data) {
                throw new Error(`данные пустые`);
            }
            return data;
        } catch (error) {
            console.error('Ошибка при получении профиля:', error);
            throw error; // Перебрасываем ошибку для обработки выше
        }
    }
}

export let userStore = new UserStore();