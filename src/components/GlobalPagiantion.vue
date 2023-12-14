<!-- GlobalPagination.vue -->

<template>
    <div>
   
  
      <!-- Add the global pagination component -->
      <pagination
        :total-items="items.length"
        :items-per-page="perPage"
        :v-model="currentPage"
        @change="handlePageChange"
      ></pagination>
    </div>
  </template>
  
  <script>
  import Pagination from 'vuejs-uib-pagination';
  
  export default {
    components: {
      Pagination,
    },
    props: {
      items: Array,
      perPage: Number,
      currentPage: Number,
    },
    computed: {
      // Calculate the total number of pages based on the number of items and items per page
      totalPages() {
        return Math.ceil(this.items.length / this.perPage);
      },
      // Calculate the sliced items to display on the current page
      paginatedItems() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.items.slice(start, end);
      },
    },
    methods: {
      // Handle page change
      handlePageChange(page) {
        this.$emit('page-change', page);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here if needed */
  </style>
  