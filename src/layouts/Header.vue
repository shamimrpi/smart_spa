
<template>
    <div class="container-fluid" >
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  
                    <router-link to="/" class="navbar-brand">Home</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/city-list" class="nav-link" :class="{ 'active': $route.name === 'CityList' }">City List</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/table" class="nav-link" :class="{ 'active': $route.name === 'table' }">Table</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/export" class="nav-link" :class="{ 'active': $route.name === 'export' }">Export</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    </div>
</template>

<script>


</script>


