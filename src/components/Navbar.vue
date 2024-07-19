<template>
    <v-navigation-drawer 
        v-model="drawer" 
        expand-on-hover 
        rail
        permanent
        :width="auto">
        <v-list>
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                subtitle="work@muhammadalqaaf.com"
                title="Muhammad Alqaaf">

            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
            density="compact"
            nav>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.value"
                router
                :to="item.route">

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavbarView',
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Home', icon: 'mdi-home-circle', value: 'homePage', route: '/' },
                { title: 'Information', icon: 'mdi-information', value: 'infoPage', route: '/info' },
                { title: 'Education History', icon: 'mdi-school', value: 'eduHistoryPage', route: '/education' },
                { title: 'Work History', icon: 'mdi-briefcase', value: 'workHistoryPage', route: '/work' },
            ],
        }
    }
}

</script>

