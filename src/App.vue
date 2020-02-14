<template>
    <div class="container">
        <div class="row">
        <div class="col col-lg-2" style="width:20%;display:inline-block">
        <form  role="form" class="form">
        Login:
        <input type="login" v-model="login" class="form-control"/>
        <br>
        Password:
        <input type="password" v-model="password" class="form-control"/>
        <br>
        Status:
        {{status}}
        <br>        
        <button @click="changeUser" class="btn btn-primary">Log in</button>
        </form>
        </div>
        <div class="col col-lg-10" style="width:700px;display:inline-block;vertical-align:top">
           <h1>Vue.js mail app</h1>
           <p>Just a project for self-learning vue.js technology. Development of a multi-user mail application
            (only frontend parts) for your own needs and learning vue.js for further professional growth as a specialist. 
            The project must switch between users and be able to add new ones). It should be possible to send messages 
            to spam, and forward messages between users.
            </p>
        </div>
        </div>
        <div class="mail-box">
            
            <app-sidebar :messages="messages" :user="user"></app-sidebar>
            <app-content :messages="messages"></app-content>
        </div>
        
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import Content from './Content.vue';
    import users from './data/users';
    /*import messages from './data/messages';
    import randomMessages from './data/random-messages';*/
    import { eventBus } from './main';
    let userId=1; // for test
    export default {
        data() {
            return {
                userId:userId,
                login:"",
                password:"",
                status:"",
                user: users[userId],
                messages: users[userId].messages
            };
        },
        methods: {
            changeUser() {
                let temp=users.filter((i)=>{console.log(i.user);return this.login==i.user});
                console.log(temp)                
                if(temp[0]===undefined) {
                   this.status="User "+this.login+" not found";
                   console.log("ddd")
                   return false;            
                }else{
                if(temp[0].password===this.password) {
                   this.status="Success "+temp[0].name+"!";
                   this.user=temp[0];
                   this.messages=temp[0].messages;
                   return true;
                }else{
                   this.status="Error password";
                   return false;                 
                }  
                }           
            }
            
        },/*,
        created() {
            eventBus.$on('refreshMessages', () => {
                let randomIndex = Math.floor(Math.random() * randomMessages.length);
                let temp = [randomMessages[randomIndex]];
                this.messages = temp.concat(this.messages.slice(0));
            });

            eventBus.$on('sentMessage', (data) => {
                let temp = [data.message];
                this.messages = temp.concat(this.messages.slice(0));
            });
        }*/
        components: {
            appSidebar: Sidebar,
            appContent: Content
        }
    }
</script>