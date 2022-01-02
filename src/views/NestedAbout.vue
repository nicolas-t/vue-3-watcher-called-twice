<template>
    <div class="nested-about">
        nested about <br />
        {{ sharedState }}
    </div>
</template>

<script>
export default {
    name: 'NestedAbout',
    components: {},
    watch: {
        sharedState: {
            handler: function (b, a) {
                console.log('NestedAbout reacted to sharedState change', a, '->', b)
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
