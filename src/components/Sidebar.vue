<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { defineProps } from 'vue';
import { SidebarMenu } from 'vue-sidebar-menu';

const props = defineProps({
    menu: {
        type: Array,
        required: true,
    },
    collapsed: {
        type: Boolean,
        default: false,
    },
    width: {
        type: String,
        default: '290px',
    },
    widthCollapsed: {
        type: String,
        default: '65px',
    },
    showOneChild: {
        type: Boolean,
        default: false,
    },
    showChild: {
        type: Boolean,
        default: false,
    },
    rtl: {
        type: Boolean,
        default: false,
    },
    relative: {
        type: Boolean,
        default: false,
    },
    hideToggle: {
        type: Boolean,
        default: false,
    },
    theme: {
        type: String,
        default: '',
    },
    disableHover: {
        type: Boolean,
        default: false,
    },
    linkComponentName: {
        type: String,
        default: undefined,
    },
});

const menu = [
    {
        header: "Main Navigation",
        hiddenOnCollapse: true,
    },
    {
        href: '/',
        title: 'Home',
        // icon: 'fa fa-user',
        icon: 'far fa-hourglass',
    },
    {
        href: '/explore',
        title: 'Explore',
        // icon: 'fa fa-chart-area',
        icon: 'far fa-hourglass',
    },
    {
        href: '/notifications',
        title: 'Notifications',
        // icon: 'fa fa-user',
        icon: 'far fa-hourglass',
    },
    {
        href: '/messages',
        title: 'Messages',
        // icon: 'fa fa-chart-area',
        icon: 'far fa-hourglass',
    },
    {
        href: '/lists',
        title: 'Lists',
        // icon: 'fa fa-user',
        icon: 'far fa-hourglass',
    },
    {
        href: '/bookmarks',
        title: 'Bookmarks',
        // icon: 'fa fa-chart-area',
        icon: 'far fa-hourglass',
    },
    {
        href: '/communities',
        title: 'Communities',
        // icon: 'fa fa-user',
        icon: 'far fa-hourglass',
    },
    {
        href: '/premium',
        title: 'Premium',
        // icon: 'fa fa-chart-area',
        icon: 'far fa-hourglass',
    },
    {
        href: '/profile',
        title: 'Profile',
        // icon: 'fa fa-user',
        icon: 'far fa-hourglass',
    },
    {
        href: '/charts',
        title: 'Explore',
        // icon: 'fa fa-chart-area',
        icon: 'far fa-hourglass',
    },
];
</script>

<template>
    <!-- <sidebar-menu :menu="menu" /> -->
    <SidebarMenu :menu="menu">
        <!-- <template v-slot:header>header</template>
        <template v-slot:footer>footer</template>
        <template v-slot:toggle-icon>toggle-icon</template> -->
        <template v-slot:dropdown-icon="{ isOpen }">
            <span v-if="!isOpen">+</span>
            <span v-else>-</span>
        </template>
    </SidebarMenu>
</template>

<style scoped>
.v-sidebar-menu {
    --vsm-primary-color: #0b429a;
    --vsm-base-bg: #2a2a2e;
    --vsm-item-color: #fff;
    --vsm-item-active-line-color: var(--vsm-primary-color);
    --vsm-item-open-color: #fff;
    --vsm-item-open-bg: var(--vsm-primary-color);
    --vsm-item-hover-bg: rgba(30, 30, 33, 0.5);
    --vsm-icon-color: var(--vsm-item-color);
    --vsm-icon-bg: #1e1e21;
    --vsm-mobile-item-color: #fff;
    --vsm-mobile-item-bg: var(--vsm-primary-color);
    --vsm-mobile-icon-color: var(--vsm-mobile-item-color);
    --vsm-mobile-icon-bg: transparent;
    --vsm-dropdown-bg: #36363b;
    --vsm-header-item-color: rgba(255, 255, 255, 0.7);
    --vsm-toggle-btn-color: #fff;
    --vsm-toggle-btn-bg: #1e1e21;
    --vsm-item-font-size: 16px;
    --vsm-item-line-height: 35px;
    --vsm-item-padding: 10px 15px;
    --vsm-icon-height: 35px;
    --vsm-icon-width: 35px;
}
/*  All styles customization can be done in normal CSS by using this classes
.v-sidebar-menu {}
.v-sidebar-menu.vsm_expanded {}
.v-sidebar-menu.vsm_collapsed {}
.v-sidebar-menu.vsm_rtl {}
.v-sidebar-menu .vsm--item {}
.v-sidebar-menu .vsm--link {}
.v-sidebar-menu .vsm--link_active {}
.v-sidebar-menu .vsm--link_hover {}
.v-sidebar-menu .vsm--link_open {}
.v-sidebar-menu .vsm--link_mobile {}
.v-sidebar-menu .vsm--link_level-[n] {}
.v-sidebar-menu .vsm--link_disabled {}
.v-sidebar-menu .vsm--title {}
.v-sidebar-menu .vsm--icon {}
.v-sidebar-menu .vsm--arrow {}
.v-sidebar-menu .vsm--arrow_open {}
.v-sidebar-menu .vsm--badge {}
.v-sidebar-menu .vsm--badge_default {}
.v-sidebar-menu .vsm--header {}
.v-sidebar-menu .vsm--dropdown {}
.v-sidebar-menu .vsm--mobile-bg {}
.v-sidebar-menu .vsm--toggle-btn {}
*/
</style>
