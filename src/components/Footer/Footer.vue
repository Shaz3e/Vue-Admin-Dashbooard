<template>
    <footer>
        <Copyright />
        <Credit />
    </footer>
</template>

<script>
import Copyright from './Copyright.vue'
import Credit from './Credit.vue'

export default {
    name: "Footer",
    components: {
        Copyright,
        Credit
    }
}
</script>