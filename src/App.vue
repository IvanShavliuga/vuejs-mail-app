<template>
    <div class="container">
        <div class="row"  style="padding:20px" v-if="!mailview">
           <div class="col col-lg-2 loginform">
               <form  role="form" class="form">
                 <label for="login">Login:</label>
                 <input type="login" v-model="login" id="login" class="form-control"/>
                 <br>
                 <label for="password">Password:</label>
                 <input type="password" v-model="password" class="form-control"/>
                 <br>
                 <p>Status: {{status}}</p>
                 <br>        
                 <button @click.prevent="changeUser" class="btn btn-primary">Sing in</button>
              </form>
           </div>
           <div class="col col-lg-10 header">
             &nbsp;
           </div>
        </div>
        <div class="mail-box" v-else>   
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
                userId:1,
                login:"",
                password:"",
                status:"Please log in to view your email.",
                user: users[1],
                messages: users[1].messages,
                users: users,
                mailview:false
            }
         },
        methods: {
            changeUser() {
                let temp=users.filter((i)=>{return this.login==i.user});                
                if(temp[0]===undefined) {
                   this.status="User "+this.login+" not found";
                }else{
                   if(temp[0].password===this.password) {
	                   this.status="Success "+temp[0].name+"!";
	                   this.$store.dispatch('signIn',temp[0]);
	                   this.user = this.$store.getters.users[this.$store.getters.userId];
	                   this.messages = this.$store.getters.users[this.$store.getters.userId].messages;  
	                   this.userId = this.$store.getters.userId; 
	                   this.mailview = true;
                   
	                }else{
	                   this.status="Error password";
	                             
	                }  
                }
            }
        },
        created() {
            /*eventBus.$on('refreshMessages', () => {
                let randomIndex = Math.floor(Math.random() * randomMessages.length);
                let temp = [randomMessages[randomIndex]];
                this.messages = temp.concat(this.messages.slice(0));
            });
            */
            eventBus.$on('sentMessage', (data) => {
                let temp = [data.message];
                let msg=temp.concat(this.messages.slice(0));
                this.$store.dispatch('sentMessage',{user:this.user,messages:msg,userId:this.user.userId});
                this.messages = this.$store.getters.messages;
            });
            eventBus.$on('signUp', () => {
                console.log("sign up");
                let temp=this.users.filter((i)=>{return this.login==i.user});                
                if(temp[0]===undefined) {
                   this.status="User "+this.login+" not found";
                }else{ 
                   if(temp[0].password===this.password) {
                      this.status="Success "+temp[0].name+"!";
                      this.user=temp[0];
                      this.messages=temp[0].messages;    
                      this.$store.dispatch('signIn',temp[0]);       
                   }else{
                      this.status="Error password";
                   }  
                }  
            });
            this.user = this.$store.getters.users[this.$store.getters.userId];
            this.messages = this.$store.getters.users[this.$store.getters.userId].messages;
            this.users =this.$store.getters.users;
        },
        components: {
            appSidebar: Sidebar,
            appContent: Content
        }
    }
</script>
<style>
.header {
    background: url("assets/images/header.png") center center  no-repeat;
    width:600px;
    display:inline-block;
    vertical-align:top;
    height:450px;
}
.loginform{
    width:200px;
    display:inline;
}
</style>