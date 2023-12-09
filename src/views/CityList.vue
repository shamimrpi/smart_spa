<template>
  <div class="about">
    <h3 class="text-center my-3">City list page</h3>
    <div class="container">
      <div class="row justify-content-center" v-if="loading">
        <table class="table  table-hover">
          <thead class="table-success">
            <tr>
              <th>City Id</th>
            <th>City Name</th>
            <th>State Id</th>
            <th>County Name</th>
            <th>State Name</th>
            <th>Action </th>
            </tr>
           
          </thead>
          <tbody>
            <tr v-for="data in city_list" :key="data.id">
              <td>{{ data.city_id }}</td>
              <td>{{ data.city }}</td>
              <td>{{ data.state_id }}</td>
              <td>{{ data.county_name }}</td>
              <td>{{ data.state_name }}</td>
              <!-- Add more columns as needed -->
             
            </tr>

          </tbody>

        </table>
        <pagination :current-page="currentPage"  :total-pages="totalPages" @page-changed="handlePageChange" />
      </div>
      <div class="row justify-content-center" v-else>
            <Loading></Loading>
        </div>
    </div>

  </div>
</template>

<script>
import apiClient from '../axios';
import Loading from '../components/Loading.vue';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      id: '',
      city_list: [],
      currentPage: 1,
      totalItems: 15,
      totalPages: 10,
      loading: false,

    };
  },
  watch: {

  },
  computed: {
    setUsers() {
      return this.users;
    }
  },

  methods: {

    async fetchAllCity(newPage = null) {
      try {
        const response = await apiClient.get('/get-city-list', {
          params: {
            page: newPage ?? this.currentPage,
            per_page: this.itemsPerPage,
          },
        });
        this.city_list = response.data.city_list.data;
        this.totalItems = response.data.city_list.total;
        this.currentPage = response.data.city_list.current_page;
        this.totalPages = response.data.city_list.last_page;
        this.loading = true;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    handlePageChange(newPage) {
            this.fetchAllCity(newPage)
        },

  },
  mounted() {
     this.fetchAllCity();

  },
  

};
</script>


