<template>
  <div>
    <nav v-if="totalPages > 21" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">

        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" @click="changePage(currentPage - 1)" tabindex="-1">Previous</a>
        </li>

        <li v-for="pageNumber in visiblePages" :key="pageNumber" class="page-item" :class="{ active: currentPage === pageNumber || (pageNumber === '...' && currentPage > 8) }">
          <a v-if="pageNumber !== '...'" class="page-link" @click="changePage(pageNumber)">{{ pageNumber }}</a>
          <span v-else class="page-link">...</span>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" @click="changePage(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
    
<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      itemsPerPage: 5,
      visiblePages: [], // Add visiblePages array
    };
  },
  watch: {
    totalPages: {
      handler(newVal) {
        this.updateVisiblePages();
      },
      immediate: true,
    },
    currentPage: {
      handler(newVal) {
        this.updateVisiblePages();
      },
    },
  },
  methods: {
    changePage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.$emit('page-changed', pageNumber);
      }
    },
    // Function to update visible pages
    updateVisiblePages() {
      // Update the visible pages array
      this.visiblePages = [];
      for (let i = 1; i <= Math.min(this.totalPages, 15); i++) {
        this.visiblePages.push(i);
      }

      // Add "..." and last page if total pages exceed 15
      if (this.totalPages > 15) {
        if (this.currentPage > 8) {
          this.visiblePages.splice(7, 1, "...");
        }
        this.visiblePages.push(this.totalPages);
      }
    },
  },
};
</script>
    
<style>
.active {
  font-weight: bold;

}
.a {cursor: pointer;
  
}
</style>
