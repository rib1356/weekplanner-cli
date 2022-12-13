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
          <div class="dropdown dropstart">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>

              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                <li>
                  <router-link to="/" class="menu-links"><p>Home</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/sessionHistory" class="menu-links"><p>Sesh History</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/clientMessages" class="menu-links"><p>Client Message</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/coachMessages" class="menu-links"><p>Coach Message</p>
                  </router-link>
                </li>
              </ul>
            </div>
         
          
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

  .menu-links {
    text-align: center;
color: white;
margin-bottom: 0rem;
text-decoration: none !important;
  }

  .bi-chevron-double-down {
    font-size: 30px;
    padding-top: 3px;
    display:inline-block;
  }
</style>
