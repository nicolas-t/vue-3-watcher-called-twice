<template>
    <div class="nested-home">
        nested home <br />
        {{ sharedState }}
    </div>
</template>

<script>
export default {
    name: 'NestedHome',
    components: {},
    watch: {
        sharedState: {
            handler: function (b, a) {
                console.log('NestedHome reacted to sharedState change', a, '->', b)
            },
        },
    },
    computed: {
        sharedState() {
            return this.$store.state.sharedState
        },
    },
}
</script>
