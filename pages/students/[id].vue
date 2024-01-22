<template>
  <div class="mt-5 container">
    <h1>Student Create page</h1>
    <div class="card">
      <div class="card-header">
        <h4>
          Edit Student
          <NuxtLink to="/" class="btn btn-success float-end">Back</NuxtLink>
        </h4>
      </div>
      <div class="card-body">
        <div v-if="isLoading">
          <Loading :title="isLoadingTitle" />
        </div>

        <div v-else>
          <form @submit.prevent="updateStudent">
            <div class="mb-3">
              <label> Name </label>
              <input type="text" v-model="student.name" class="form-control" />
            </div>
            <div class="mb-3">
              <label> course </label>
              <input
                type="text"
                v-model="student.course"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label> Email </label>
              <input
                type="email"
                v-model="student.email"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label> Phone </label>
              <input type="text" v-model="student.phone" class="form-control" />
            </div>

            <div class="mb-3">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "studentEdit",
  data() {
    return {
      studentId: "",
      student: {},
      isLoading: false,
      isLoadingTitle: "Loading....",
      //   erroList : {}
    };
  },
  mounted() {
    this.studentId = this.$route.params.id;
    // alert(this.studentId);

    this.getStudent(this.studentId);
  },
  methods: {
    getStudent(studentId){
        this.isLoading=true;
        axios.get(`http://localhost:4000/students/${studentId}`).then(res=>{
            console.log(res);
            this.isLoading = false;
            this.student= res.data;
        });
    },
    updateStudent() {
      this.isLoading = true;
      this.isLoadingTitle = "Updating...";

      //   var myThis= this;
      axios.put(`http://localhost:4000/students/${this.studentId}`, this.student).then((res) => {
        console.info(res);
        this.isLoading = false;
        this.$router.push('/students');
      });
    },
  },
};
</script>

<style></style>
