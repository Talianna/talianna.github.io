<template>
<div>
    <nav class="nav__item menu">

        <!-- <div class="menu__dropdown"> -->
        <div class="menu__dropdown" v-for="item of items" :key="item.id">
    
        <!-- <a class="menu__link" href="#" @mouseover="toggle(item)">{{ item.name }}</a> -->
        <a class="menu__link" href="#">{{ item.menuName }}</a>

        <!-- <div class="dropDown" v-show="item.hidden"> -->
        <!-- <div class="dropDown"> -->
            <!--{{ item.children }}-->
            <!--
            <div class="item" v-for="(child, index) in item.children" :key="child.index" :item="child">
                {{ item.children }}
            </div>
            -->

            <!-- <a href="#" class="dropDown__link">SubMenu</a>
            <a href="#" class="dropDown__link">SubMenu</a>
            <a href="#" class="dropDown__link">SubMenu</a>
            <a href="#" class="dropDown__link">SubMenu</a>
            <a href="#" class="dropDown__link">SubMenu</a> -->

        <!-- </div> -->

    </div>
    </nav>
</div>
</template>

<script>
export default {

        data(){
            
            return {
                showMenu: false,


                items :
                [
                    // 'Menu',
                    // 'gfgfg',
                    // 'Mendsdsu',
                    // 'Medsdnu',
                    // 'Mdssenu',
                    // 'Medssdnu'

                    {
                        id: 1,
                        menuName: "Menu1",
                        children: [{name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}]
                    },
                    {
                        id: 2,
                        menuName: "Menu2",
                        children: [{name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}]
                    },
                    {
                        id: 3,
                        menuName: "Menu3",
                        children: [{name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}]
                    },
                    {
                        id: 4,
                        menuName: "Menu4",
                        children: [{name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}]
                    },
                    {
                        id: 5,
                        menuName: "Menu5",
                        children: [{name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}, {name: "SubMenu"}]
                    }
                ]
            }
    }
}
</script>

<style>

</style>