//import
import http from "../http-common";


class userService{
    login(data){
        return http.post("/user/login",data);
    }
    register(data) {
        return http.post("/user/post",data);
        }
        getAll(){
        return http.get("/user/getAll");
    }
}
export default new userService();