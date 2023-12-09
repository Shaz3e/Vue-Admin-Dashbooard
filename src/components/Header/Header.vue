<template>
  <Logo />
  <Menu />
</template>

<script>
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";

export default {
  name: "Header",
  components: {
    Logo,
    Menu
  }
}
</script>