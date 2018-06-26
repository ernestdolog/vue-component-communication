<template>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                    <p>Server managed: <select v-model="serverNr">
                        <option v-for="qt in qtServers">{{ qt }}</option>
                    </select></p>
                    <button @click="modifyServer">Modify server #{{ serverNr }}</button>
                    <p>Select the quantity of managed servers: <select v-model="qtServers" @change="modifyServerQuantity">
                        <option v-for="index in 20">{{ index }}</option>
                    </select></p>
                </footer>
            </div>
        </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: {
            qtServers: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                serverNr: 1
            }
        },
        methods: {
            modifyServer() {
                eventBus.sendServerChange(parseInt(this.serverNr))
            },
            modifyServerQuantity() {
                this.$emit('serversQuantityChanged', parseInt(this.qtServers))
            }
        }
    }
</script>

<style>

</style>
