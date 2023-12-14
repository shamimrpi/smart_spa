<template>
    <div>
      <button class="btn btn-sm btn-info mt-2" @click="exportTable(tableData, tableFields)">Export Table</button>
      <table>
        <thead>
          <tr>
            <th v-for="field in tableFields" :key="field.key">{{ field.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td v-for="field in tableFields" :key="field.key">{{ item[field.key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
// import { exportTable } from '../stores/tableExport'; // Update the path
  
  export default {
    
    data() {
      return {
        tableData: [
          { id: 1, name: 'John Doe', age: 25 },
          { id: 2, name: 'Jane Doe', age: 30 },
          // Add more data as needed
        ],
        tableFields: [
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'age', label: 'Age' },
          // Add more fields as needed
        ],
      };
    },
    methods: {
    },
  };
  </script>
  