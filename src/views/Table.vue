<template>
  <div class="container">
    <div>
      <form @submit.prevent="addProducts">
        <table class="table table-responsive">
          <tr class="bg-primary">
            <th>SL</th>
            <th @click="checkAll"><input type="checkbox"></th>
            <th>Name</th>
          </tr>
         <tr
            v-for="(product, index) in dataset"
            :key="index"
            :class="{ 'bg-info': selectedIds[index] }"
          >
            <td>{{ index + 1 }}</td>
            <td><input type="checkbox" v-model="selectedIds[index]" :value="product.id"></td>
            <td>{{ product.name }}</td>
          </tr>
        </table>

        <!-- <button type="button" @click="checkAll">Check All</button> -->
        <button type="submit">Add Selected Products</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataset: [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
        // Add more products as needed
      ],
      selectedIds: [],
    };
  },
  methods: {
    addProducts() {
      // Process selected products
      console.log('Selected Products:', this.selectedIds);
      // Perform additional actions here, e.g., make an API request to add products
    },
  },
};
</script>