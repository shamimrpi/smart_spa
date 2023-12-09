<template>
  <div class="modal fade" id="cityModal" tabindex="-1" role="dialog" aria-labelledby="cityModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cityModalLabel">City Details</h5>
       
        </div>
        <div class="modal-body">
          <table class="table table-bordered">
            <tr>
              <th>Id</th>
              <td>{{ selectedCity.city_id }}</td>
              <th>City</th>
              <td>{{ selectedCity.city }}</td>
            </tr>

            <tr>
              <th>City Ascii</th>
              <td>{{ selectedCity.city_ascii }}</td>
              <th> State Id</th>
              <td>{{ selectedCity.state_id }}</td>
            </tr>

            <tr>
              <th>State Name</th>
              <td>{{ selectedCity.state_name }}</td>
              <th> County Fips</th>
              <td>{{ selectedCity.county_fips }}</td>
            </tr>
            <tr>
              <th>County name</th>
              <td>{{ selectedCity.county_name }}</td>
              <th>Lat</th>
              <td>{{ selectedCity.lat }}</td>
            </tr>
            <tr>

              <th>Lng</th>
              <td>{{ selectedCity.lng }}</td>
              <th>Population</th>
              <td>{{ selectedCity.population }}</td>
            </tr>
            <tr>

              <th>Density</th>
              <td>{{ selectedCity.density }}</td>
              <th>Source</th>
              <td>{{ selectedCity.source }}</td>
            </tr>
            <tr>

              <th>Military</th>
              <th>{{ selectedCity.military }}</th>
              <th>Incorporated</th>
              <td>{{ selectedCity.incorporated }}</td>
            </tr>
            <tr>

              <th>Timezone</th>
              <td>{{ selectedCity.timezone }}</td>
              <th>Ranking</th>
              <td>{{ selectedCity.ranking }}</td>
            </tr>
            <tr>
              <th>Zips</th>
              <td>{{ selectedCity.zips }}</td>
            </tr>
</table>

            <!-- Add more details as needed -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    selectedCity: Object, // Passed city data from the parent component

  },

};
// console.log(selectedCity);
</script>
  
<style>
/* Add your styling here */
</style>
  