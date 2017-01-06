<template>
    <div class="leftPanel navbar navbar-default navbar-side">
        <ul class="nav">
            <li>
                <a role="button" data-toggle="collapse" href="#gridSystem" aria-expanded="true" aria-controls="gridSystem">
                    <span>Grid System</span>
                </a>
                <ul class="collapse in" id="gridSystem">
                    <grid_system_component></grid_system_component>
                    <grid_system_component></grid_system_component>
                    <grid_system_component></grid_system_component>
                    <grid_system_component></grid_system_component>
                    <grid_system_component></grid_system_component>
                </ul>
            </li>
            <li>
                <a data-toggle="collapse" href="#components" aria-expanded="false">
                    <span>Components</span>
                </a>
                <ul class="collapse" id="components">
                    <heading_component/>
                    <paragraph_component/>
                    <table_component/>
                    <form_component/>
                    <form_group_component/>
                    <text_area_component/>
                    <select_component/>
                    <file_component/>
                    <search_component/>
                    <button_component/>
                    <checkbox_component/>
                    <radio_button_component/>
                    <inline_checkbox_component/>
                    <inline_radio_button_component/>
                    <image_component/>
                    <dropdown_component/>
                    <dropup_component/>
                    <button_group_component/>
                    <tab_navbar_component/>
                    <pill_navbar_component/>
                    <navbar_component/>
                    <breadcrumb_component/>
                    <pagination_component/>
                    <pager_component/>
                    <jumbotron_component/>
                    <thumbnail_component/>
                    <alert_component/>
                    <progressbar_component/>
                    <media_object_component/>
                    <list_group_component/>
                    <panel_component/>
                    <responsive_embed_component/>
                </ul>
            </li>
            <li>
                <a data-toggle="collapse" href="#animation" aria-expanded="false">
                    <span>Animation</span>
                </a>
                <ul class="collapse" id="animation">
                </ul>
            </li>
        </ul>
    </div>
</template>

<style>
    .leftPanel{
        height: 100%;
    }
    #gridSystem, #components, #animation{
        padding: 0;
    }
</style>

<script>
    import grid_system_component from './gridSystemComponent.vue';
    import heading_component from './components/headingComponent.vue';
    import paragraph_component from './components/paragraphComponent.vue';
    import table_component from './components/tableComponent.vue';
    import form_component from './components/formComponent.vue';
    import form_group_component from './components/formGroupComponent.vue';
    import text_area_component from './components/textAreaComponent.vue';
    import select_component from './components/selectComponent.vue';
    import file_component from './components/fileComponent.vue';
    import search_component from './components/searchComponent.vue';
    import button_component from './components/buttonComponent.vue';
    import checkbox_component from './components/checkboxComponent.vue';
    import radio_button_component from './components/radioButtonComponent.vue';
    import inline_checkbox_component from './components/inlineCheckboxComponent.vue';
    import inline_radio_button_component from './components/inlineRadioButtonComponent.vue';
    import image_component from './components/imageComponent.vue';
    import dropdown_component from './components/dropdownComponent.vue';
    import dropup_component from './components/dropupComponent.vue';
    import button_group_component from './components/buttonGroupComponent.vue';
    import tab_navbar_component from './components/tabNavbarComponent.vue';
    import pill_navbar_component from './components/pillNavbarComponent.vue';
    import navbar_component from './components/navbarComponent.vue';
    import breadcrumb_component from './components/breadcrumbComponent.vue';
    import pagination_component from './components/paginationComponent.vue';
    import pager_component from './components/pagerComponent.vue';
    import jumbotron_component from './components/jumbotronComponent.vue';
    import thumbnail_component from './components/thumbnailComponent.vue';
    import alert_component from './components/alertComponent.vue';
    import progressbar_component from './components/progressbarComponent.vue';
    import media_object_component from './components/mediaObjectComponent.vue';
    import list_group_component from './components/listGroupComponent.vue';
    import panel_component from './components/panelComponent.vue';
    import responsive_embed_component from './components/responsiveEmbedComponent.vue';

    export default{
        data(){
            return{
            }
        },
        components:{
            grid_system_component,
            heading_component,
            paragraph_component,
            table_component,
            form_component,
            form_group_component,
            text_area_component,
            select_component,
            file_component,
            search_component,
            button_component,
            checkbox_component,
            radio_button_component,
            inline_checkbox_component,
            inline_radio_button_component,
            image_component,
            dropdown_component,
            dropup_component,
            button_group_component,
            tab_navbar_component,
            pill_navbar_component,
            navbar_component,
            breadcrumb_component,
            pagination_component,
            pager_component,
            jumbotron_component,
            thumbnail_component,
            alert_component,
            progressbar_component,
            media_object_component,
            list_group_component,
            panel_component,
            responsive_embed_component
        }
    }
</script>
