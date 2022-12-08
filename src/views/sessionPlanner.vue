<template>
  <Navbar/>
  <div class="mx-3 my-2">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 session-container">
        <h2 class="session-text">Sessions</h2>
        <div class="row"> <!-- Each of the session Cards is here-->
          <div class="col-sm-12 col-md-12 col-lg-12 session-card-row">
            <div v-for="(session, index) in plannerData.Unscheduled" :key="session.name">
              <SessionCard :sessionComponent=session :index=index @viewDetailsClick="viewExtraSessionDetails(session)" @addSessionClick="addSession(session, index)"/>
            </div>
          </div>
        </div>
           
      </div>
      <div class="col-sm-12 col-md-12 col-lg-8 session-container">
        <button type="button" class="btn btn-success save-btn" @click="saveWeeklySession">Save <i class="bi bi-save"></i></button>
        <h2 class="session-text">Weekly Log </h2>
        <div class="weekday-grid-wrapper"> <!-- Using Grid template here instead of bootstraps rows/cols-->
          <div style="grid-column: 1; grid-row: 1;" class="weekday weekday-column">
            <p class="weekday-text">Monday</p>
            <p class="session-length-text" v-if="sessionLengths.Monday.reduce((partialSum, a) => partialSum + a, 0) > 0">Session Length: {{sessionLengths.Monday.reduce((partialSum, a) => partialSum + a, 0)}} min </p>
            <p class="session-length-text" v-else>No Sessions</p>
          </div>
          <div style="grid-column: 2; grid-row: 1;" class="weekday session-cards-column" >
              <div v-for="cardSession in plannerData.Monday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
                <ChosenSessionCard :chosenSessionComponent=cardSession  @removeSessionClick="removeSession(cardSession)"/>
            </div>
          </div>
          <div style="grid-column: 1; grid-row: 2;" class="weekday weekday-column">
            <p class="weekday-text">Tuesday</p>
            <p class="session-length-text" v-if="sessionLengths.Tuesday.reduce((partialSum, a) => partialSum + a, 0) > 0">Session Length: {{sessionLengths.Tuesday.reduce((partialSum, a) => partialSum + a, 0)}} min</p>
            <p class="session-length-text" v-else>No Sessions</p>
          </div>
          <div style="grid-column: 2; grid-row: 2;" class="weekday session-cards-column">
            <div v-for="cardSession in plannerData.Tuesday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
              <ChosenSessionCard :chosenSessionComponent=cardSession  @removeSessionClick="removeSession(cardSession)"/>
            </div>
          </div>
          <div style="grid-column: 1; grid-row: 3;" class="weekday weekday-column">
            <p class="weekday-text">Wednesday</p>
            <p class="session-length-text" v-if="sessionLengths.Wednesday.reduce((partialSum, a) => partialSum + a, 0) > 0">Session Length: {{sessionLengths.Wednesday.reduce((partialSum, a) => partialSum + a, 0)}} min</p>
            <p class="session-length-text" v-else>No Sessions</p>
          </div>
          <div style="grid-column: 2; grid-row: 3;" class="weekday session-cards-column">
              <div v-for="cardSession in plannerData.Wednesday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
                <ChosenSessionCard :chosenSessionComponent=cardSession  @removeSessionClick="removeSession(cardSession)"/>
              </div>
          </div>
          <div style="grid-column: 1; grid-row: 4;" class="weekday weekday-column">
            <p class="weekday-text">Thursday</p>
            <p class="session-length-text" v-if="sessionLengths.Thursday.reduce((partialSum, a) => partialSum + a, 0) > 0">Session Length: {{sessionLengths.Thursday.reduce((partialSum, a) => partialSum + a, 0)}} min</p>
            <p class="session-length-text" v-else>No Sessions</p>
          </div>
          <div style="grid-column: 2; grid-row: 4;" class="weekday session-cards-column">
              <div v-for="cardSession in plannerData.Thursday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
                <ChosenSessionCard :chosenSessionComponent=cardSession  @removeSessionClick="removeSession(cardSession)"/>
              </div>
          </div>
          <div style="grid-column: 1; grid-row: 5;" class="weekday weekday-column">
            <p class="weekday-text">Friday</p>
            <p class="session-length-text" v-if="sessionLengths.Friday.reduce((partialSum, a) => partialSum + a, 0) > 0">Session Length: {{sessionLengths.Friday.reduce((partialSum, a) => partialSum + a, 0)}} min</p>
            <p class="session-length-text" v-else>No Sessions</p>
          </div>
          <div style="grid-column: 2; grid-row: 5;" class="weekday session-cards-column">
              <div v-for="cardSession in plannerData.Friday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
                <ChosenSessionCard :chosenSessionComponent=cardSession  @removeSessionClick="removeSession(cardSession)"/>
              </div>
          </div>
          <div style="grid-column: 1; grid-row: 6;" class="weekday weekday-column">
            <p class="weekday-text">Saturday</p>
            <p class="session-length-text" v-if="sessionLengths.Saturday.reduce((partialSum, a) => partialSum + a, 0) > 0">Session Length: {{sessionLengths.Saturday.reduce((partialSum, a) => partialSum + a, 0)}} min</p>
            <p class="session-length-text" v-else>No Sessions</p>
          </div>
          <div style="grid-column: 2; grid-row: 6;" class="weekday session-cards-column">
              <div v-for="cardSession in plannerData.Saturday" :key="cardSession.name" class="selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
                <ChosenSessionCard :chosenSessionComponent=cardSession  @removeSessionClick="removeSession(cardSession)"/>
              </div>
          </div>
          <div style="grid-column: 1; grid-row: 7;" class="weekday weekday-column">
            <p class="weekday-text">Sunday</p>     
            <p class="session-length-text" v-if="sessionLengths.Sunday.reduce((partialSum, a) => partialSum + a, 0) > 0">Session Length: {{sessionLengths.Sunday.reduce((partialSum, a) => partialSum + a, 0)}} min</p>
            <p class="session-length-text" v-else>No Sessions</p>
          </div>
          <div style="grid-column: 2; grid-row: 7;" class="weekday session-cards-column">
              <div v-for="cardSession in plannerData.Sunday" :key="cardSession.name" class="card selected-session-card" :style="{ backgroundColor: cardSession.type_colour}">
                <ChosenSessionCard :chosenSessionComponent=cardSession  @removeSessionClick="removeSession(cardSession)"/>
              </div>
          </div>
        </div>
      </div>  
    </div>
  
  <div class="modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" id="extraSessionDetailModal">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Additional Session Information</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeSessionDetailModal"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <p><strong>Name:</strong> {{this.selectedSession.name}} </p>
            </div>
          </div>
          <div class="row" v-if="this.selectedSession.variation != null">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <p><strong>Variation :</strong> {{this.selectedSession.variation}} </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <p><strong>Description:</strong> {{this.selectedSession.description}} </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <p><strong>Type:</strong> {{this.selectedSession.type}} </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <p><strong>Length:</strong> {{this.selectedSession.length}} Minutes</p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <p><strong>Target Intensity:</strong> {{this.selectedSession.target_intensity}} </p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <p><strong>Target Fatigue:</strong> {{this.selectedSession.target_fatigue}} </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="closeSessionDetailModal" style="width: 50%;">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//Import Components
import SessionCard from '../components/SessionCard.vue'
import ChosenSessionCard from '../components/ChosenSessionCard.vue'
import Navbar from '../components/Navbar.vue'


import $ from 'jquery'
import jsonData from '../../data.json' //Import the json data
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore' 
import { db } from '@/firebase' 


export default {
  name: 'App',
  components: {
    Navbar,
    SessionCard,
    ChosenSessionCard,
  },
  data() {
    return {
      toShow: true,
      plannerData: jsonData, //Set the json data to be used within system
      sessionTypes: [],
      selectedSession: {},
      sessionLengths: { //Object of arrays to calculate session lengths
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": [],
      },
      mondayLength: 0,
      state: {
        highlighted: {
          // This function highlights the current weeks dates
          customPredictor: function(date) {
            var highlightDate = new Date();
            var highlightStartDate = new Date(highlightDate.getFullYear(), highlightDate.getMonth(), highlightDate.getDate() - highlightDate.getDay() + 1) ;
            var highlightEndDate = new Date(highlightDate.getFullYear(), highlightDate.getMonth(), highlightDate.getDate() - highlightDate.getDay() + 8);
            if (Date.parse(date) > Date.parse(highlightStartDate) && Date.parse(date) <= Date.parse(highlightEndDate)) {
              return true
            }
          },
        }
      },
      state2: {
        disabled: {
          // This function highlights the current weeks dates
          customPredictor: function(date) {
            var disabledDate = new Date();
            var disabledStartDate = new Date(disabledDate.getFullYear(), disabledDate.getMonth(), disabledDate.getDate() - disabledDate.getDay() + 1) ;
            var disabledEndDate = new Date(disabledDate.getFullYear(), disabledDate.getMonth(), disabledDate.getDate() - disabledDate.getDay() + 8);
            if (Date.parse(date) < Date.parse(disabledStartDate) || Date.parse(date) > Date.parse(disabledEndDate)) {
              return true
            }
          },
        }
      },
      sessionWeekCount: 0,
    }
  },
  async mounted() {
    //On load of page after json data has been read assign some new variables
    for(var i = 0; i < this.plannerData.Unscheduled.length; i++) {
      this.plannerData.Unscheduled[i].isAssigned = false;
      this.plannerData.Unscheduled[i].dateSelected = null;
    }
    const docRef = doc(db, "weeklySession/sessionCount"); //Get the number of weeks that have been saved
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) { //If exists increment and use locally when saving the next week
      this.sessionWeekCount =  (docSnap.data().count) + 1;
      console.log(this.sessionWeekCount)
    } else {
      console.log("No such document!");
    }
  },
  methods: {
    async saveWeeklySession() {
      var weekToSave = { //Create object to save
        "Monday" : this.plannerData.Monday,
        "Tuesday" : this.plannerData.Tuesday,
        "Wednesday" : this.plannerData.Wednesday,
        "Thursday" : this.plannerData.Thursday,
        "Friday" : this.plannerData.Friday,
        "Saturday" : this.plannerData.Saturday,
        "Sunday" : this.plannerData.Sunday,
      };
      try {
        await setDoc(doc(db, "weeklySession", "sessionWeek" + this.sessionWeekCount), weekToSave); //Save object to firebase
        console.log("Document written with ID: ", "sessionWeek" + this.sessionWeekCount);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // Update the session week count
      const countRef = doc(db, "weeklySession", "sessionCount");
      await updateDoc(countRef, {
        count: this.sessionWeekCount
      });

      alert("Your sessions for this week have been saved");
      location.reload();
    },
    sessionDateSelected(dateSelected, selectedSession) {
      var result  = this.plannerData.Unscheduled.filter(function(obj){return obj.name == selectedSession.name && obj.isAssigned == false}); //Find all sessions that belong to what has been chosen
      result[result.length - 1].dateSelected = dateSelected; //Assign the latest session in the array based of the length of session that are unassigned 
    },
    viewExtraSessionDetails(session) {
      this.selectedSession = session;
      $('#extraSessionDetailModal').show();
    },
    closeSessionDetailModal() {
      $('#extraSessionDetailModal').hide();
    },
    addSession(selectedSession, index) {
       var datePickerValue = $('#'+index).val().split("-") //dd-MM-yyyy
      // //Do some shuffling to get the day of the week
      var formattedValue = datePickerValue[2] + "-" + datePickerValue[1] + "-" + datePickerValue[0] //yyyy-MM-dd
      const formattedDate = new Date(formattedValue);
      const dayofWeek = formattedDate.getDay(); // Sunday - Saturday : 0 - 6
      if (isNaN(dayofWeek)) {
        alert("No date selected - Please choose a date that you want to complete your workout on.")
      } else {
        switch (dayofWeek) {
          case 0: //Sunday
            this.validateSessionAndAddSession(this.sessionLengths.Sunday, this.plannerData.Sunday, selectedSession, "Sunday") //Pass any allocated sessions data for that date and the session that has just been picked
            break;
          case 1: 
            this.validateSessionAndAddSession(this.sessionLengths.Monday, this.plannerData.Monday, selectedSession, "Monday")
            break;
          case 2: 
            this.validateSessionAndAddSession(this.sessionLengths.Tuesday, this.plannerData.Tuesday, selectedSession, "Tuesday")
            break;
          case 3: 
            this.validateSessionAndAddSession(this.sessionLengths.Wednesday, this.plannerData.Wednesday, selectedSession, "Wednesday")
            break;
          case 4: 
            this.validateSessionAndAddSession(this.sessionLengths.Thursday, this.plannerData.Thursday, selectedSession, "Thursday")
            break;
          case 5: 
            this.validateSessionAndAddSession(this.sessionLengths.Friday, this.plannerData.Friday, selectedSession, "Friday")
            break;
          case 6: 
            this.validateSessionAndAddSession(this.sessionLengths.Saturday, this.plannerData.Saturday, selectedSession, "Saturday")
            break;
        }
      }
    },
    validateSessionAndAddSession(sessionLengthDate, plannerData, selectedResult, date) {
      if ((parseInt(sessionLengthDate.reduce((partialSum, a) => partialSum + a, 0)) + selectedResult.length) <= 60) { //Calculate if the amount in the array is greater than expected 
        sessionLengthDate.push(selectedResult.length)   
        plannerData.push(selectedResult) //Push the latest one into the correct date
        selectedResult.isAssigned = true; //Assign the latest session in the array based of the length of session that are unassigned
        selectedResult.dateSelected = date;
      } else {
        alert("Session length will be greater than 1 hour")
      }
    },
    removeSession(cardSession) {
      var plannerDataArray = Object.values(this.plannerData);
      var UnscheduledPlannerDataArray = plannerDataArray[0]
      for (let i = 1; i < plannerDataArray.length; i++) { //Loop through the dates to find which array to remove the session object from
        if (plannerDataArray[i].includes(cardSession)) {
          const indexOfObject = plannerDataArray[i].findIndex(object => {
            return object.name === cardSession.name;
          });
          plannerDataArray[i].splice(indexOfObject, 1) //Once index has been found remove
        }
      }
      console.log(cardSession)
      //Remove the session time and recalculate
      var sessionLengthArray = Object.values(this.sessionLengths);
      var lengthToRemoveFrom = null;
      switch(cardSession.dateSelected) { //Get the session time array based on date
        case "Monday":
            lengthToRemoveFrom = sessionLengthArray[0]
            break;
        case "Tuesday":
            lengthToRemoveFrom = sessionLengthArray[1]
            break;
        case "Wednesday": 
            lengthToRemoveFrom = sessionLengthArray[2]
            break;
        case "Thursday": 
            lengthToRemoveFrom = sessionLengthArray[3]  
            break;
        case "Friday": 
            lengthToRemoveFrom = sessionLengthArray[4] 
            break;
        case "Saturday": 
            lengthToRemoveFrom = sessionLengthArray[5]
            break;
        case "Sunday": 
            lengthToRemoveFrom = sessionLengthArray[6]
            break;
      }
      const indexOfObject2 = lengthToRemoveFrom.findIndex(object => {
        return object === cardSession.length; //object eg: 25
      });
      lengthToRemoveFrom.splice(indexOfObject2, 1) //Find the index in the array where the lengths match and remove
      
      //Find the object in unsceduled that is assigned and unassign it show it can show in the sessions list 
      UnscheduledPlannerDataArray.find(x => x.name == cardSession.name && x.dateSelected == cardSession.dateSelected && x.isAssigned == true).isAssigned = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
