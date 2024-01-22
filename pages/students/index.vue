<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>
          Students List
          <NuxtLink to="/students/create" class="btn btn-warning float-end">
            Add Student</NuxtLink
          >
        </h4>
      </div>
      <div class="card-body">
        <div v-if="isLoading">
          <Loading title="loading ..."></Loading>
        </div>

        <div v-else>
          <table class="table table-stripped table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(student, index) in students" :key="index">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.course }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.phone }}</td>
                <td>
                  <NuxtLink :to="`/students/${student.id}`" class="btn btn-success btn-sm mx-2">
                    Edit</NuxtLink>
                  <button @click="deleteStudent($event ,student.id)" class="btn btn-danger btn-sm mx-2">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  nama: "student",
  data() {
    return {
      students: {},
      isLoading:true
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios.get("http://localhost:4000/students").then((res) => {
        // console.log(res.data);
        this.isLoading = false;
        this.students = res.data;
      });
    },
    deleteStudent(event, studentId){
        if(confirm('are you sure ? ')){
            event.target.innerText = 'Deleting ...';
            axios.delete(`http://localhost:4000/students/${studentId}`).then(res=>{
                event.target.innerText = 'Delete';
                this.getStudents();
            });
        }
    }
  },
};
</script>

<style></style>
