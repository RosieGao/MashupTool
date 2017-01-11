<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <div class="preview">
            <img src="/images/form.png">
            <span>Forms</span>
        </div>
        <div class="view">
            <form id="formview1">
                <div class="form-group">
                    <label contenteditable="true">Email address</label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label contenteditable="true">Password</label>
                    <input type="password" class="form-control">
                </div>
                <div class="checkbox">
                    <label contenteditable="true">
                        <input type="checkbox"> Check me out
                    </label>
                </div>
                <button type="submit" class="btn btn-default" contenteditable="true">Submit</button>
            </form>
            <form class="form-horizontal" id="formview2">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label" contenteditable="true">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputEmail3">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label" contenteditable="true">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label contenteditable="true">
                                <input type="checkbox"> Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default" contenteditable="true">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return{
            }
        },
    }
</script>
