<template>
  <div class="card session-card" @click="$emit('selectSessionWeek')">
    <div class="card-body" >
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
					<h3 class="card-title" style="font-weight:bold; margin-bottom: 0px">Session Week {{index + 1}}</h3>
					<i class="bi bi-chevron-double-right"></i>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SessionHistoryCard',
  props: {
    sessionHistoryComponent: Object,
    index: Number,
  },
  components: {

  },
  data() {
    return {
      
    }
  },
  methods: {

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.session-card {
    --bs-card-spacer-y: 0.2rem;
    --bs-card-spacer-x: 0.5rem;
    border: 3px solid #212322 ;
    margin-bottom: 5px;
		height: 5rem;
		padding-top: 1rem;
		background-color:#d7e3e8;
}

.card-title {
	display:inline;
}

.bi-chevron-double-right {
	font-size: 40px;
	display: inline;
	float: right;
	margin-top: -0.7rem;
}


</style>
