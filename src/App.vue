<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers :qtServers="qtServers"></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer
                :qtServers="qtServers"
                @serversQuantityChanged="qtServers = $event"></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data() {
            return {
                qtServers: 10
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
