<template>
    <div>
        <a href="#composeModal" data-toggle="modal" class="btn btn-compose" @click="updatemsg">Compose</a>

        <div aria-hidden="true" role="dialog" tabindex="-1" id="composeModal" class="modal fade" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">&times;</button>
                        <h4 class="modal-title">New Message</h4>
                    </div>

                    <div class="modal-body">
                        <form @submit.prevent="sendMessage" role="form" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">Subject</label>
                                <div class="col-lg-10">
                                    <input type="text" v-model="message.subject" id="subject" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">From</label>
                                <div class="col-lg-10">
                                    <input type="text" v-model="message.from" id="from" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label" for="name"></label>
                                <div class="col-lg-10">
                                    <input type="text" v-model="message.name" id="name" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">To</label>
                                <div class="col-lg-10">
                                    <input type="text" v-model="message.to" id="to" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label" for="message">Message</label>
                                <div class="col-lg-10">
                                    <textarea v-model="message.content" rows="10" cols="30" class="form-control" id="message"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-lg-offset-2 col-lg-10">
                                    <button class="btn btn-send" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import { eventBus } from './main';

    export default {
        data() {
            return {
                message: {
                    subject: '',
                    content: '',
                    name: '',
                    from: '',
                    to:''
                }
            };
        },
        props:{
            user: {
                type: Object,
                required: true
            }   
        },
        created() {
            console.log("compose "+this.user.name);
        },
        methods: {
            sendMessage() {
                eventBus.$emit('sentMessage', {
                    message: {
                        subject: this.message.subject,
                        content: this.message.content,
                        isDeleted: false,
                        type: 'outgoing',
                        date: moment(),
                        from: {
                            name: this.message.name,
                            email: this.message.from
                        },
                        attachments: []
                    }
                });
            },
            updatemsg(){
                 this.message.name=this.user.name;
                 this.message.from=this.user.email;
            }
        }
    }
</script>