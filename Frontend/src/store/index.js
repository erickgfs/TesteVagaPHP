
import { createStore } from "vuex"

export default createStore({
    state: {
        address: {
            bairro: "",
            cep: "",
            complemento: "",
            ddd: "",
            estado: "",
            gia: "",
            ibge: "",
            localidade: "",
            logradouro: "",
            regiao: "",
            siafi: "",
            uf: "",
            unidade: ""        
        }
    },
    mutations: {
        storeAddress(state, data) {
            state.address = data;
        },
    },
    actions: {

    },
    getters: {

    }
})