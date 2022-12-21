//import
import register from "./components/register.vue";
import login from './components/login.vue'
import dashboard from './pages/dashboard.vue'
import form from './pages/form.vue'
import detail from './pages/detail.vue'
import Add from "./pages/Add.vue";
import AnggotaKK from "./pages/AnggotaKK.vue";
import DetailAnggota from "./pages/DetailAnggota.vue";
import user from './pages/User.vue'

//export
export default [
    {
        path:"/register",
        component:register
    },
    {
        path:"/",
        component:login
    },
    {
        path:"/dashboard",
        component:dashboard
    },
    {
        path:"/form",
        component:form
    },
    {
        path:"/detail/:id",
        name: 'detailKaka',
        component:detail
    },
    {
        path:"/detail/:id/Add",
        component:Add,
        name:'Add'
    },
    {
        path:"/:id/Add/AnggotaKK",
        component:AnggotaKK,
        name:'AnggotaKK'
    },
    {
        path:"/:id/Add/DetailAnggota/:ide",
        component:DetailAnggota, 
        name:'DetailAnggota'  
    },
    {
        path:"/user",
        component:user,
        name:'user'
    }
];