<script>
import MyForm from "../components/MyForm.vue";
import MyList from "../components/MyList.vue";
import "../styles/update.scss";
export default {
  data() {
    return {
      card: this.$route.params,
    };
  },
  components: {
    MyForm,
  },
  created() {
    console.log(this.card);
  },
};
</script>

<template>
  <MyForm v-bind:update="true" v-bind:card="card" />
</template>
