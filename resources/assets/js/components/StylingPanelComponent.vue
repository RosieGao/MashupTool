<template>
    <div class="stylingPanel navbar navbar-default">
        <ul class="nav">
            <li>
                <a class="section-title" role="button" data-toggle="collapse" href="#linkProperties" aria-expanded="true" aria-controls="gridCollection">
                    <span>Link</span>
                </a>
                <ul id="linkProperties" class="stylingList">
                    <div class="form-inline">
                        <label>url</label>
                        <input id="styling_url" type="text" class="form-control"></input>
                    </div>
                </ul>
            </li>
            <li>
                <a class="section-title" role="button" data-toggle="collapse" href="#borderProperties" aria-expanded="true" aria-controls="gridCollection">
                    <span>Border</span>
                </a>
                <ul id="borderProperties" class="stylingList">
                    <div class="form-inline">
                        <label>border-top</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>border-bottom</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>border-left</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>border-right</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>border-width</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>border-style</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>border-color</label>
                        <input type="text" class="form-control"></input>
                    </div>
                </ul>
            </li>
            <li>
                <a class="section-title" role="button" data-toggle="collapse" href="#marginProperties" aria-expanded="true" aria-controls="gridCollection">
                    <span>Margin</span>
                </a>
                <ul id="marginProperties" class="stylingList">
                    <div class="form-inline">
                        <label>margin-top</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>margin-bottom</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>margin-left</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>margin-right</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>max-height</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>max-width</label>
                        <input type="text" class="form-control"></input>
                    </div>
                </ul>
            </li>
            <li>
                <a class="section-title" role="button" data-toggle="collapse" href="#paddingProperties" aria-expanded="true" aria-controls="gridCollection">
                    <span>Padding</span>
                </a>
                <ul id="paddingProperties" class="stylingList">
                    <div class="form-inline">
                        <label>padding-top</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>padding-bottom</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>padding-left</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>padding-right</label>
                        <input type="text" class="form-control"></input>
                    </div>
                </ul>
            </li>
            <li>
                <a class="section-title" role="button" data-toggle="collapse" href="#sizeProperties" aria-expanded="true" aria-controls="gridCollection">
                    <span>Size</span>
                </a>
                <ul id="sizeProperties" class="stylingList">
                    <div class="form-inline">
                        <label>height</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>width</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>max-height</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>max-width</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>min-height</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>min-width</label>
                        <input type="text" class="form-control"></input>
                    </div>
                </ul>
            </li>
            <li>
                <a class="section-title" role="button" data-toggle="collapse" href="#backgroudProperties" aria-expanded="true" aria-controls="gridCollection">
                    <span>Backgroud</span>
                </a>
                <ul id="backgroudProperties" class="stylingList">
                    <div class="form-inline">
                        <label>bg-image</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>bg-color</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>bg-position</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>bg-size</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>bg-repeat</label>
                        <input type="text" class="form-control"></input>
                    </div>
                </ul>
            </li>
            <li>
                <a class="section-title" role="button" data-toggle="collapse" href="#textProperties" aria-expanded="true" aria-controls="gridCollection">
                    <span>Text</span>
                </a>
                <ul id="textProperties" class="stylingList">
                    <div class="form-inline">
                        <label>text-align</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>font-size</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>font-weight</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>font-family</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>font-variant</label>
                        <input type="text" class="form-control"></input>
                    </div>
                    <div class="form-inline">
                        <label>font-style</label>
                        <input type="text" class="form-control"></input>
                    </div>
                </ul>
            </li>
        </ul>
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
