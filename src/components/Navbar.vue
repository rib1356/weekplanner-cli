<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="../../assets/latticeLogo.png" alt="latticeLogo" width="50" height="50" style="margin-left:10px">
            Week Planner
          </a>
        <form class="form-inline">
          <a class="navbar-brand" href="#" style="float:left">
            Rob
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
  }
</style>
