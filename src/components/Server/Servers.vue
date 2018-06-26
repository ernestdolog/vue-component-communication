<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="index in qtServers" :serverNr="index"></app-server>
        </ul>
    </div>
</template>

<script>
    import AppServer from './AppServer.vue';
    export default {
        props: {
            qtServers: {
                type: Number,
                required: true
            }
        },
        components: {
            'app-server': AppServer
        }
    }
</script>

<style>

</style>
