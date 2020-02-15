<template>
    <aside class="sm-side">
        <table class="user-head">
            <tr>
            <td class="user-avatar">
            
            <img :src="user.avatar">
            </td>
            <td class="user-name">
                
                <h5>{{user.name}}</h5>
                <span class="email-address">{{user.email}}</span>
                <app-user :user="user"></app-user>
            </td>
            </tr>
        </table>

        <div class="compose-wrapper">
            <app-compose :user="user"></app-compose>
        </div>

        <ul class="inbox-nav">
            <li :class="{ active: activeView == 'app-inbox' }">
                <a href="#" @click.prevent="navigate('app-inbox', 'Inbox')">
                    <i class="fa fa-inbox"></i>Inbox <span class="label label-danger pull-right">{{ unreadMessages.length }}</span>
                </a>
            </li>

            <li :class="{ active: activeView == 'app-sent' }">
                <a href="#" @click.prevent="navigate('app-sent', 'Sent')">
                    <i class="fa fa-envelope-o"></i>Sent <span class="label label-default pull-right">{{ sentMessages.length }}</span>
                </a>
            </li>

            <li :class="{ active: activeView == 'app-important' }">
                <a href="#" @click.prevent="navigate('app-important', 'Important')">
                    <i class="fa fa-bookmark-o"></i>Important <span class="label label-warning pull-right">{{ importantMessages.length }}</span>
                </a>
            </li>

            <li :class="{ active: activeView == 'app-trash' }">
                <a href="#" @click.prevent="navigate('app-trash', 'Trash')">
                    <i class=" fa fa-trash-o"></i>Trash <span class="label label-default pull-right">{{ trashedMessages.length }}</span>
                </a>
            </li>
            
            <li :class="{ active: activeView == 'app-spam' }">
                <a href="#" @click.prevent="navigate('app-spam', 'Spam')">
                    <i class=" fa fa-warning"></i>Spam <span class="label label-default pull-right">{{ spamMessages.length }}</span>
                </a>
            </li>
            
        </ul>
    </aside>
</template>

<script>
    import { eventBus } from './main';
    import Compose from './Compose.vue';
    import User from './User.vue';    
    
    export default {
        props: {
            messages: {
                type: Array,
                required: true
            },
            user:{
                type: Object,
                required: true
            }
        },
        data() {
            return {
                activeView: 'app-inbox'
            };
        },
        created() {
            eventBus.$on('changeView', (data) => {
                this.activeView = data.tag;
            });
        },
        methods: {
            navigate(newView, title) {
                eventBus.$emit('changeView', {
                    tag: newView,
                    title: title
                });
            }
        },
        computed: {
            unreadMessages() {
                return this.messages.filter(function(message) {
                    return (message.type == 'incoming' && !message.isRead && !message.isDeleted);
                });
            },
            sentMessages() {
                return this.messages.filter(function(message) {
                    return (message.type == 'outgoing' && !message.isDeleted);
                });
            },
            importantMessages() {
                return this.messages.filter(function(message) {
                    return (message.type == 'incoming' && message.isImportant === true && !message.isDeleted);
                });
            },
            trashedMessages() {
                return this.messages.filter(function(message) {
                    return message.isDeleted === true;
                });
            },
            spamMessages() {
                return this.messages.filter(function(message) {
                    return message.isSpam === true;
                });
            }
        },
        components: {
            appCompose: Compose,
            appUser: User
        }
    }
</script>