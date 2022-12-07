<template>
  <div class="card session-card" :style="{ backgroundColor: sessionComponent.type_colour}" v-if="sessionComponent.isAssigned == false">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h3 class="card-title" style="font-weight:bold; margin-bottom: 0px">{{sessionComponent.name}}</h3>
          <h4 class="card-text">Type: {{sessionComponent.type}}</h4>
          <p class="icon-card-text"><i class="bi bi-stopwatch card-icons"></i> {{sessionComponent.length}} min</p>
          <p class="icon-card-text"> | Intensity: {{sessionComponent.target_intensity}} 
            <i v-if="sessionComponent.target_intensity >= 8" class="bi bi-reception-4 card-icons"></i>
            <i v-else-if="sessionComponent.target_intensity >= 5 && sessionComponent.target_intensity < 8" class="bi bi-reception-3 card-icons"></i>
            <i v-else-if="sessionComponent.target_intensity >= 3 && sessionComponent.target_intensity < 5" class="bi bi-reception-2 card-icons"></i>
            <i v-else class="bi bi-reception-1 card-icons"></i>
            
          </p>
          <p class="icon-card-text"> | Fatigue: {{sessionComponent.target_fatigue}} 
            <i v-if="sessionComponent.target_fatigue >= 8" class="bi bi-reception-4 card-icons"></i>
            <i v-else-if="sessionComponent.target_fatigue >= 5 && sessionComponent.target_fatigue < 8" class="bi bi-reception-3 card-icons"></i>
            <i v-else-if="sessionComponent.target_fatigue >= 3 && sessionComponent.target_fatigue < 5" class="bi bi-reception-2 card-icons"></i>
            <i v-else class="bi bi-reception-1 card-icons"></i>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-md-4 col-lg-4">
          <button type="button" class="btn btn-primary" style="width: 100%; margin-top:5px;"  @click="$emit('viewDetailsClick')">Details</button>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <Datepicker :id=index v-model="picked" :lower-limit="lowerLimit()" :upper-limit="upperLimit()" inputFormat="dd-MM-yyyy" />
        </div>
        <div class="col-sm-3 col-md-4 col-lg-4">
          <button type="button" class="btn btn-success" style="width: 100%; margin-top:5px;" @click="$emit('addSessionClick')">Add Session</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
export default {
  name: 'SessionCard',
  props: {
    sessionComponent: Object,
    index: Number,
  },
  components: {
    Datepicker
  },
  data() {
    return {
      picked: new Date(),
    }
  },
  methods: {
    lowerLimit() {
      var localDate = new Date();
      var lowerLimitDate = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate() - localDate.getDay() + 1); //Get start of week
      return lowerLimitDate;
    },
    upperLimit() {
      var localDate = new Date();
      var upperLimitDate = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate() - localDate.getDay() + 7); //Get end of week
      return upperLimitDate;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
