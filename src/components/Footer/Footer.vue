<template>
    <footer>
        <CopyRight />
        <Credit />
    </footer>
</template>

<script>
import CopyRight from './CopyRight.vue'
import Credit from './Credit.vue'

export default {
    name: "Footer",
    components: {
        CopyRight,
        Credit
    }
}
</script>