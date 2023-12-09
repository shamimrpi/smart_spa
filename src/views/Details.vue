<template>
    <div class="modal fade" id="cityModal" tabindex="-1" role="dialog" aria-labelledby="cityModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cityModalLabel">City Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Display city details here -->
            <div>
              <strong>City ID:</strong> {{ selectedCity.city_id }}
            </div>
            <div>
              <strong>City Name:</strong> {{ selectedCity.city }}
            </div>
            <div>
              <strong>State ID:</strong> {{ selectedCity.state_id }}
            </div>
            <div>
              <strong>County Name:</strong> {{ selectedCity.county_name }}
            </div>
            <div>
              <strong>State Name:</strong> {{ selectedCity.state_name }}
            </div>
            <!-- Add more details as needed -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
  </script>
  
  <style>
  /* Add your styling here */
  </style>
  