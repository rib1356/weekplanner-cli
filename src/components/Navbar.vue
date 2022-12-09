<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
          <router-link to="/" style="text-decoration:none !important;">
          <a class="navbar-brand" >
            <img src="../../assets/latticeLogo.png" alt="latticeLogo" width="50" height="50" style="margin-left:10px">
            Week Planner
          </a>
          </router-link>
        <form class="form-inline">
          <router-link to="/sessionHistory">
            <a class="navbar-brand" style="float:left">
              <p class="username">Sesh History</p>
            </a>
          </router-link>
          
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    background-color: #212322 !important;
    border-bottom: 2px solid white;
    height: 70px;
    margin-top: -10px;
  }

  .username {
    float:left;
    margin-top: 10px;
    margin-right: -15px;
    border: 2px solid white;
    border-radius: 10px;
    padding: 0px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .bi-chevron-double-down {
    font-size: 30px;
    padding-top: 3px;
    display:inline-block;
  }
</style>
