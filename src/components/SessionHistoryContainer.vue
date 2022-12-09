<template>
	<h2 class="session-text">Chosen Week Sessions</h2>
	<div class="weekday-grid-wrapper"> 
		<div style="grid-column: 1; grid-row: 1;" class="weekday weekday-column">
			<p class="weekday-text">Monday</p>
		</div>
		<div style="grid-column: 2; grid-row: 1;" class="weekday session-cards-column" >
				<div v-for="cardSession in chosenWeekData.Monday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
					<ChosenSessionCard :chosenSessionComponent=cardSession  @removeSessionClick="removeSession(cardSession)"/>
				</div>
		</div>
		<div style="grid-column: 1; grid-row: 2;" class="weekday weekday-column">
			<p class="weekday-text">Tuesday</p>
		</div>
		<div style="grid-column: 2; grid-row: 2;" class="weekday session-cards-column">
		<div v-for="cardSession in chosenWeekData.Tuesday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
					<ChosenSessionCard :chosenSessionComponent=cardSession />
				</div>
		</div>
		<div style="grid-column: 1; grid-row: 3;" class="weekday weekday-column">
			<p class="weekday-text">Wednesday</p>
		</div>
		<div style="grid-column: 2; grid-row: 3;" class="weekday session-cards-column">
				<div v-for="cardSession in chosenWeekData.Wednesday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
					<ChosenSessionCard :chosenSessionComponent=cardSession />
				</div>
		</div>
		<div style="grid-column: 1; grid-row: 4;" class="weekday weekday-column">
			<p class="weekday-text">Thursday</p>
		</div>
		<div style="grid-column: 2; grid-row: 4;" class="weekday session-cards-column">
				<div v-for="cardSession in chosenWeekData.Thursday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
					<ChosenSessionCard :chosenSessionComponent=cardSession />
				</div>
		</div>
		<div style="grid-column: 1; grid-row: 5;" class="weekday weekday-column">
			<p class="weekday-text">Friday</p>
		</div>
		<div style="grid-column: 2; grid-row: 5;" class="weekday session-cards-column">
			<div v-for="cardSession in chosenWeekData.Friday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
					<ChosenSessionCard :chosenSessionComponent=cardSession />
				</div>
		</div>
		<div style="grid-column: 1; grid-row: 6;" class="weekday weekday-column">
			<p class="weekday-text">Saturday</p>
		</div>
		<div style="grid-column: 2; grid-row: 6;" class="weekday session-cards-column">
			<div v-for="cardSession in chosenWeekData.Saturday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
					<ChosenSessionCard :chosenSessionComponent=cardSession />
				</div>
		</div>
		<div style="grid-column: 1; grid-row: 7;" class="weekday weekday-column">
			<p class="weekday-text">Sunday</p>     
		</div>
		<div style="grid-column: 2; grid-row: 7;" class="weekday session-cards-column">
				<div v-for="cardSession in chosenWeekData.Sunday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
					<ChosenSessionCard :chosenSessionComponent=cardSession />
				</div>
		</div>
	</div> 
</template>

<script>
import ChosenSessionCard from '../components/ChosenSessionCard.vue'
export default {
  name: 'SessionHistoryContainer',
  props: {
    chosenWeekData: Object,
    index: Number,
  },
  components: {
		ChosenSessionCard
  },
	mounted(){
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
