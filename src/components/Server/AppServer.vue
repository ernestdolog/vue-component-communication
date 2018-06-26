<template>
            <li class="list-group-item">
                Server #{{ serverNr }} Status: {{ status }}
            </li>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: {
            serverNr: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                status: 'Unknown'
            }
        },
        methods: {
            changeServer() {
                if (this.status === 'Unknown') {
                    this.status = 'Critical'
                } else if (this.status === 'Critical') {
                    this.status = 'Healing'
                } else if (this.status === 'Healing') {
                    this.status = 'Healed'
                } else if (this.status === 'Healed') {
                    this.status = 'Normal'
                } else if (this.status === 'Normal') {
                    this.status = 'Unknown'
                }
            }
        },
        created() {
            eventBus.$on('serverWasChanged', (data) => {
                if (this.serverNr === data) {
                    this.changeServer()
                }
            })
        }
    }
</script>

<style>

</style>
