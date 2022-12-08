<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="../../assets/latticeLogo.png" alt="latticeLogo" width="50" height="50" style="margin-left:10px">
            Week Planner
          </a>
        <form class="form-inline">
          <a class="navbar-brand" href="/sessionHistory" style="float:left">
            <p class="username">Rob</p> <i class="bi bi-chevron-double-down"></i>
            <i class="bi bi-person-circle"></i>
          </a>
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
    margin-top: -5px;
  }

  .username {
    float:left;
    margin-top: 10px;
    margin-left: -4px;
    margin-right: 5px;
  }

  .bi-chevron-double-down {
    font-size: 30px;
    padding-top: 3px;
    display:inline-block;
  }

    /* .router {
    display: inline-block;
    color: white;
    padding-top: 15px;
    font-size: 16px;
  } */
</style>
