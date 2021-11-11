<template>
  <div className="dashboard">
    <div className="task-card" v-for="card in cardList" :key="card._id">
      <div className="text">
        <h1 className="task-title">{{ card.title }}</h1>
        <p className="task-description">{{ card.description }}</p>
      </div>
      <div>
        <font-awesome-icon
          icon="edit"
          @click="toUpdate(card)"
          class="task-options update"
        />
      </div>
      <div>
        <font-awesome-icon
          icon="trash"
          @click="deleteCard(card._id)"
          class="task-options delete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../styles/myList.scss";
import axios from "axios";

export default {
  name: "MyList",
  data() {
    return {
      cardList: [],
    };
  },
  created() {
    this.getCardList();
  },
  methods: {
    getCardList() {
      axios
        .get("http://localhost:3330/get")
        .then((res) => {
          this.cardList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCard(id) {
      console.log(id);
      axios
        .delete(`http://localhost:3330/delete/${id}`)
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toUpdate(card) {
      console.log(card);
      this.$router.push({
        name: "Update",
        params: {
          id: card._id,
          title: card.title,
          description: card.description,
        },
      });
    },
  },
};
</script>
