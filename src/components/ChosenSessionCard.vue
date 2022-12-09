<template>
	<div class="card-body">
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12" style="height: fit-content"> <!-- Will be components-->
				<h3 class="card-title" style="font-weight:bold; margin-bottom: 0px"></h3>
				<h4 class="card-text">Name: {{chosenSessionComponent.name}} <i class="bi bi-trash3-fill trash-icon" @click="$emit('removeSessionClick')"></i></h4>
				<p class="icon-card-text"><i class="bi bi-stopwatch card-icons"></i> {{chosenSessionComponent.length}} min</p>
				<p class="icon-card-text"> | Intensity: {{chosenSessionComponent.target_intensity}} 
					<i v-if="chosenSessionComponent.target_intensity >= 8" class="bi bi-reception-4 card-icons"></i>
					<i v-else-if="chosenSessionComponent.target_intensity >= 5 && chosenSessionComponent.target_intensity < 8" class="bi bi-reception-3 card-icons"></i>
					<i v-else-if="chosenSessionComponent.target_intensity >= 3 && chosenSessionComponent.target_intensity < 5" class="bi bi-reception-2 card-icons"></i>
					<i v-else class="bi bi-reception-1 card-icons"></i>
				</p>
				<p class="icon-card-text"> | Fatigue: {{chosenSessionComponent.target_fatigue}} 
					<i v-if="chosenSessionComponent.target_fatigue >= 8" class="bi bi-reception-4 card-icons"></i>
					<i v-else-if="chosenSessionComponent.target_fatigue >= 5 && chosenSessionComponent.target_fatigue < 8" class="bi bi-reception-3 card-icons"></i>
					<i v-else-if="chosenSessionComponent.target_fatigue >= 3 && chosenSessionComponent.target_fatigue < 5" class="bi bi-reception-2 card-icons"></i>
					<i v-else class="bi bi-reception-1 card-icons"></i>
				</p>
				<p class="card-text" v-if="chosenSessionComponent.variation != null">Variation: <strong>{{chosenSessionComponent.variation}}</strong></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ChosenSessionCard',
  props: {
    chosenSessionComponent: Object,
    index: Number,
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

</style>
