<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ generateResponse() }}</p>

    </div>

</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data() {
            return {
                modifiedServers: []
            }
        },
        methods: {
            receiveUpdate(data) {
                if(!this.modifiedServers.includes(data)) {
                    this.modifiedServers.push(data)
                    this.modifiedServers.sort(function(a, b){return a-b})
                }
            },
            generateResponse() {
                let response = 'Server Details are currently not updated'
                if (this.modifiedServers.length > 0) {
                    response = 'Details changed in servers: ' + this.modifiedServers
                }
                return response
            }
        },
        created() {
            eventBus.$on('serverWasChanged', (data) => {
                this.receiveUpdate(data)
            })
        }
    }
</script>

<style>

</style>
