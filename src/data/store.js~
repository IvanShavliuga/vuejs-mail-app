import Vuex from 'vuex'
import Vue from 'vue'
import users from './users'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        users,
        user:users[0],
        messages:users[0].messages,
        userId:0    
    },
    getters: {
        users: state => { return state.users },
        user: state =>  { return state.user},
        messages: state => {return state.messages},
        userId: state =>{return state.userId}         
        //userId: state => {return state.users.filter((i)=>{return this.login==i.user});}    
    },
    actions: {
        signIn({commit},user) {
            commit('SIGNIN',user);
        },
        sentMessage({commit},obj){
            commit("SENTMESSAGE",obj);
                    
        },
        changeUser({commit},obj){
            commit("CHANGEUSER",obj);        
        }    
    },
    mutations:{
        'SIGNIN' (state, user) {
        	     console.log("sign in store ") 
             state.user=user;
             state.messages=user.messages;  
             state.userId=user.userId;      
        },
        'SENTMESSAGE' (state,obj) {
             state.user = obj.user;
             state.messages=obj.messages;
             state.userId = obj.userId;  
             console.log("obj store "+obj.user.name+" "+obj.messages.length+" "+obj.userId)                  
        },
        'CHANGEUSER' (state,obj) {
        	    console.log("change user: " +obj.userId);
             state.user=state.users[obj.userId];
             state.messages=state.users[obj.userId].messages;  
             state.userId=obj.userId; 
        }
    }
})