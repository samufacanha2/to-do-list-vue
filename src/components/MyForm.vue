<template>
  <form>
    <input type="text" placeholder="Digite um titulo" v-model="title" />
    <input
      type="text"
      placeholder="Digite uma descrição"
      v-model="description"
    />
    <button v-if="!update" @click="submitForm">Adicionar</button>
    <div v-if="update" class="footer-buttons">
      <button @click="goBack">Voltar</button>
      <button @click="updateForm">Salvar</button>
    </div>
  </form>
</template>

<script>
import "../styles/myForm.scss";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "MyForm",
  methods: {
    submitForm(e) {
      e.preventDefault();
      axios
        .post("http://localhost:3330/create", {
          title: this.title,
          description: this.description,
        })
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          err.response.status === 400
            ? alert("Verifique se os dados estao inseridos corretamente")
            : alert("erro no servidor", err.response.status);
          console.log(err.response.status);
        });
    },
    goBack() {
      this.$router.push({
        path: "/",
      });
    },
    updateForm(e) {
      e.preventDefault();
      axios
        .put(`http://localhost:3330/update/${this.card.id}`, {
          title: this.title,
          description: this.description,
        })
        .then(() => {
          this.goBack();
        });
    },
  },
  props: {
    update: {
      type: Boolean,
      default: false,
    },
    card: {
      type: Object,
    },
  },
  setup(props) {
    const title = ref(props.card ? props.card.title : "");
    const description = ref(props.card ? props.card.description : "");
    return {
      title,
      description,
    };
  },
};
</script>
