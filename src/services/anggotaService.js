import http from "../http-common";


class anggotaService{
    create(data) {
        return http.post("ak/insert",data);
    }
    getAll(){
        return http.get("/ak/getAll");
    }
    deleteAK(Id) {
        return http.delete(`/ak/delete/${Id}`);
      }
    
      updateAK(id, data) {
        return http.put(`/ak/update/${id}`, data);
      }
      getIdAK(Id){
        return http.get(`/ak/getById/${Id}`);
      }
      getIdKK(id_kk){
        return http.get(`/ak/getIdKK/${id_kk}`);
      }
      deleteIdKK(id_kk){
        return http.delete(`/ak/deleteIdKK/${id_kk}`)
      }
}
export default new anggotaService();