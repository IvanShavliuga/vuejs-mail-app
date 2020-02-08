<template>
    <div class="inbox-body">
        <app-messages :messages="spamMessages"></app-messages>
    </div>
</template>

<script>
    import Messages from './Messages.vue';

    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        computed: {
            spamMessages() {
                return this.data.messages.filter(function(message) {
                    return message.isSpam==true;
                });
            }
        },
        components: {
            appMessages: Messages
        }
    }
</script>