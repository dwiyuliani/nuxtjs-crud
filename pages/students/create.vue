<template>
    <div class="container">
      <h1>Student Create page</h1>
      <div class="card">
        <div class="card-header">
          <h4>
            Add Student
            <NuxtLink to="/" class="btn btn-success float-end">Back</NuxtLink>
          </h4>
        </div>
        <div class="card-body">
          <div v-if="isLoading">
            <Loading :title="isLoadingTitle" />
          </div>
  
          <div v-else>
            <form @submit.prevent="saveStudent">
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
  
  import axios from 'axios';
  export default {
    name: "studentCreate",
    data() {
      return {
        student: {
          name: "",
          course: "",
          email: "",
          phone: "",
        },
        isLoading: false,
        isLoadingTitle: "Loading....",
      //   erroList : {}
      };
    },
    methods: {
      saveStudent() {
        this.isLoading = true;
        this.isLoadingTitle = "Saving...";
  
      //   var myThis= this;
        axios.post('http://localhost:4000/students',this.student).then(res=>{
          console.info(res);
  
          this.student.name="";
          this.student.course="";
          this.student.email="";
          this.student.phone="";
  
        //   this.isLoading = false;
        //   this.isLoadingTitle="Loading . . .";
  
        });
      //   .catch(function(error){
      //     console.log(error,'error');
      //     if(error){
      //         myThis.erroList = error;
      //         this.isLoading = false;
      //     }
      //   });
      },
    },
  };
  </script>
  
  <style></style>
  