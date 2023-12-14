<template>
  <div class="about">
    <div class="container mt-5">
    
      <div class="row mb-5">
        <div class="col-md-5">
          <!-- <v-select id="search" autocomplete="search" name="search" v-model="selectedValue" placeholder="Select an option" :options="options" @input="logging" /> -->
          <va-select
          :label="'searchableMulti'"
          text-by="description"
          placeholder="Select "
          searchable
          track-by="id"
          @change="logging" 
          :options="options"
        />
        <va-select
                v-model="searchableMulti"
                :label="'searchableMulti'"
                searchable
                text-by="description"
                track-by="id"
                @input="logging" 
                :options="options"
              />
        </div>
      </div>

      <div class="row">

        <div class="col-md-11">
          <input type="text" class="form-control"  v-model="searchQuery" placeholder="Search by City Name ,State or County" autocomplete="off" />
        </div>
        <div class="col-md-1">
          <button class="btn btn-sm btn-success" @click="searchCity">Search</button>
        </div>
      </div>
   
    <!-- ... your existing table code ... -->
  </div>
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
              <td>
                <button class="btn btn-sm btn-success" @click="openCityModal(data)">View</button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :current-page="currentPage" :total-pages="totalPages" @page-changed="handlePageChange" />
      </div>
      <div class="row justify-content-center" v-else>
        <Loading></Loading>
      </div>
    </div>
    <CityModal :selected-city="selectedCity" /> <!-- Use the correct component name -->
  </div>
</template>

<script>
  import { ref } from 'vue'
import apiClient from '../axios';
import Loading from '../components/Loading.vue';
import CityModal from '../views/CityModal.vue'; // Assuming the correct path and component name
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
const multiSearchableSelectModel = ref({})
// const options = ref(this.options)
export default {
  components: {
    Loading,
    CityModal,
    vSelect,
  },
  data() {
    return {
      city_list: [],
      currentPage: 1,
      totalItems: 15,
      totalPages: 10,
      loading: false,
      selectedCity: {},
      searchQuery: '',
      selectedValue:null,
      searchableMulti:'',
      options:ref([
        {
          id: 1,
          description: 'First option',
        },
        {
          id: 2,
          description: 'Second option',
        },
        {
          id: 3,
          description: 'Third option',
        },
      ])
    };
  },

  methods: {
    async fetchAllCity(newPage = null) {
      try {
        const response = await apiClient.get('/get-city-list', {
          params: {
            page: newPage ?? this.currentPage, // current page
            per_page: this.perPage, // per page 
            search: this.searchQuery, // search data
          },
        });
        
        this.city_list = response.data.city_list.data;
        this.totalItems = response.data.city_list.total;
        this.currentPage = response.data.city_list.current_page;
        this.totalPages = response.data.city_list.last_page;
        this.loading = true;
      } catch (error) {
        console.error('Error fetching city list:', error);
      }
    },

    handlePageChange(newPage) {
      this.fetchAllCity(newPage);
    },

    openCityModal(city) {
      this.selectedCity = city;
      $('#cityModal').modal('show'); 
      
      
    },
    async searchCity() {
      this.currentPage = 1; // Reset to the first page when performing a new search
      await this.fetchAllCity();
    },
    closeModal() {
      // Close the modal using Vue data binding
      $('#cityModal').modal('hide');
    },
  
    logging() {
      // Handle the change event here
     alert('ok');
    },
    onSelect(event) {
      console.log(event);
    },
    
  },

  mounted() {
    this.fetchAllCity();
  },
};
</script>
