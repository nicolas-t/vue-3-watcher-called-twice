<template>
    <h1>Vue 3 watcher called twice</h1>
    <div class="instructions">
        <h3>Steps</h3>
        <div>1. Open devtools, console tab.</div>
        <div>2. Click <router-link :to="'/about/nested'">About link</router-link>.</div>
        <div>4. Click <button @click="handleModifyClick">modify shared state</button>.</div>
        <h3>Observations</h3>
        <div><span class="code">sharedState</span> watcher is called twice.</div>
        <h3>Expected behaviour</h3>
        <div><span class="code">sharedState</span> watcher is called only once.</div>
    </div>
    <div id="nav">
        <router-link to="/home/nested">Home</router-link> |
        <router-link to="/about/nested">About</router-link>
    </div>
    <button @click="handleModifyClick">modify shared state</button>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<script>
export default {
    methods: {
        handleModifyClick() {
            return this.$store.commit('modifySharedState')
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
span.code {
    font-family: monospace;
    padding: 3px;
    background: #efefef;
}
.instructions {
    text-align: left;
    border-bottom: 1px solid silver;
    padding: 20px;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
