<template>
    <div class="container">
        <input type="number" v-model="userId"/><button @click="changeUser">change</button>
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
                user: users[userId],
                messages: users[userId].messages
            };
        },
        methods: {
            changeUser() {
                this.user=users[this.userId];
                this.messages=user[this.userId].messages;             
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