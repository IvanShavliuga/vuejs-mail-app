<template>
    <div>
        <a href="#composeModal" data-toggle="modal"  id="link" class="fa fa-edit">Edit data</a>

        <div aria-hidden="true" role="dialog" tabindex="-1" id="composeModal" class="modal fade" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">&times;</button>
                        <h4 class="modal-title" style="color:black">User data {{user.user}}</h4>
                    </div>

                    <div class="modal-body">
                        <form  role="form" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">Name</label>
                                <div class="col-lg-10">
                                    <input type="text" v-model="user.name" id="name" class="form-control">
                                </div>
                            </div>
									 <div class="form-group">
                                <label class="col-lg-2 control-label" for="subject">Site</label>
                                <div class="col-lg-10">
                                    <input type="text" v-model="user.site" id="site" class="form-control">
                                </div>
                            </div>
                            

                            <div class="form-group">
                                <div class="col-lg-offset-2 col-lg-10">
                                    <button class="btn btn-send" type="submit">Submit</button>
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
                user: {
                    name: 'dkskj',
                    site: 'fjgkl',
                    user: 'iv2'
                }
            };
        }
    }
</script>
<style>
#link {
   color:#fff;
}
</style>