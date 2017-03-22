<template>
    <div class="component">
        <span href="#close" class="removeButton"><i class="fa fa-times"></i></span>
        <span href="#close" class="dragButton"><i class="fa fa-arrows"></i></span>
        <span class="properties">
            <button class="btn btn-default btn-xs" id="navbarFixedToTp" type="submit">Fixed to top</button>
            <button class="btn btn-default btn-xs" id="navbarFixedToBottom" type="submit">Fixed to bottom</button>
            <button class="btn btn-default btn-xs" id="navbarStaticTop" type="submit">Static top</button>
            <button class="btn btn-default btn-xs" id="navbarInverted" type="submit">Inverted navbar</button>
        </span>
        <div class="preview">
            <img src="https://yumeng1-vm.ead.ist.ualberta.ca/MashupTool/images/navbar.png">
            <span>Navbars</span>
        </div>
        <div class="view">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#" contenteditable="true">Brand</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#" contenteditable="true">Link <span class="sr-only">(current)</span></a></li>
                            <li><a href="#" contenteditable="true">Link</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" contenteditable="true">Dropdown <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#" contenteditable="true">Action</a></li>
                                    <li><a href="#" contenteditable="true">Another action</a></li>
                                    <li><a href="#" contenteditable="true">Something else here</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" contenteditable="true">Separated link</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" contenteditable="true">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search">
                            </div>
                            <button type="submit" class="btn btn-default" contenteditable="true">Submit</button>
                        </form>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#">Link</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" contenteditable="true">Dropdown <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#" contenteditable="true">Action</a></li>
                                    <li><a href="#" contenteditable="true">Another action</a></li>
                                    <li><a href="#" contenteditable="true">Something else here</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" contenteditable="true">Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
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
