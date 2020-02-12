<template>
    <div>
        <a href="#composeModal" data-toggle="modal"  id="link" class="fa fa-edit">Edit data</a>

        <div aria-hidden="true" role="dialog" tabindex="-1" id="composeModal" class="modal fade" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">&times;</button>
                        <h4 class="modal-title" style="color:black">User data {{useredit.user}}</h4>
                    </div>

                    <div class="modal-body">
                        <form  role="form" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">Name</label>
                                <div class="col-lg-10">
                                    <input type="text" v-model="useredit.name" id="name" class="form-control">
                                </div>
                            </div>
									 <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">Site</label>
                                <div class="col-lg-10">
                                    <input type="text" v-model="useredit.site" id="site" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">Email</label>
                                <div class="col-lg-10">
                                    <input type="email" v-model="useredit.email" id="email" class="form-control">
                                </div>
                            </div>
									 <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">Password</label>
                                <div class="col-lg-10">
                                    <input type="password" v-model="useredit.password" id="password" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-lg-offset-2 col-lg-10">
                                    <button class="btn btn-send" type="button" @click="sendUser">Submit</button>
                                    <span style="color:black">{{status}}</span>
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
        props: {
            user:{
                type: Object,
                required: true
            }
        },
        data() {
            return {
                useredit: {
                    name: 'dkskj',
                    site: 'fjgkl',
                    user: 'iv2',
                    email:"iva.drakon.nov@gmail.com",
                    password: '12345'
                },
                status:""
            };
        },
        created(){
            this.useredit.name= this.user.name;
            this.useredit.site= this.user.site;
            this.useredit.user= this.user.user;
            this.useredit.email=this.user.email;
            this.useredit.password=this.user.password;
            this.status="Data load "+this.user.name;        
        },
        methods:{
            sendUser() {
              if(this.user.password===this.useredit.password) {
                 this.user.name= this.useredit.name;
            	  this.user.site= this.useredit.site;
                 this.user.user= this.useredit.user;
                 this.user.email=this.useredit.email;
                 
                 return true;
              }else{
                 this.useredit.password=this.user.password;
                 return false;  
                             
              }
                 
               
            }          
        }
    }
</script>
<style>
#link {
   color:#fff;
}
label {
   color:#000;
}
</style>