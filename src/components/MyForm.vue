<template>
  <form>
    <input type="text" placeholder="Digite um titulo" v-model="title" />
    <input
      type="text"
      placeholder="Digite uma descrição"
      v-model="description"
    />
    <button @click="submitForm">Adicionar</button>
  </form>
</template>

<script>
import "../styles/myForm.scss";
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const submitForm = () => {
      axios.post("http://localhost:3330/create", {
        title: title.value,
        description: description.value,
      });
    };
    return {
      title,
      description,
      submitForm,
    };
  },
};
</script>
