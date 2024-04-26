import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
    
    state: () => {
        return {    // token and user saved to localStorage -> not best practice ?
            token: localStorage.getItem('jwtToken') || null,
            user: localStorage.getItem('user') || null,     // saved to localStorage as a string 'null'
        }
    },

    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem('jwtToken', token);
        },
        clearToken() {
            this.token = null;
            localStorage.setItem('jwtToken', null);
        },
        setUser(user) {
            this.user = user;
            localStorage.setItem('user', user);
        },
        clearUser() {
            this.user = null;
            localStorage.setItem('user', null);
        },
        checkIfAuth() {
            if(localStorage.getItem('jwtToken') === 'null' || localStorage.getItem('jwtToken') === null){
                return false;
            }
            return true;
        }
    },
})