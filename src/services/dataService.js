import http from "../http-common";

class dataService {
        create(data) {
        return http.post("kk/insert",data);
    }
    getAll(){
        return http.get("/kk/getAll");
    }
    deleteKK(Id) {
        return http.delete(`/kk/delete/${Id}`);
      }
    
      updateKK(Id, data) {
        return http.put(`/kk/update/${Id}`, data);
      }
      getIdKK(Id){
        return http.get(`/kk/getById/${Id}`);
      }
}



export default new dataService();