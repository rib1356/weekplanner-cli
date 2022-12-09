<template>
  <Navbar/>
  <div class="mx-3 my-2">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 session-container">
        <h2 class="session-text">Weekly Session history</h2>
        <div class="row"> <!-- Each of the session Cards is here-->
          <div class="col-sm-12 col-md-12 col-lg-12 session-card-row">
            <div v-for="(seshHistory, index) in sessionHistory" :key="index">
              <SessionHistoryCard :sessionHistoryComponent="seshHistory" :index="index" @selectSessionWeek="displaySelectedSession(index)"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-8 session-container">
        <SessionHistoryContainer :chosenWeekData="selectedWeek" v-if="selectedWeek" />
      </div> 
      
    </div>
</div>
</template>

<script>
//Import Components
import SessionHistoryCard from '../components/SessionHistoryCard.vue'
import SessionHistoryContainer from '../components/SessionHistoryContainer.vue'
// import ChosenSessionCard from '../components/ChosenSessionCard.vue'
import Navbar from '../components/Navbar.vue'


// import $ from 'jquery'
// import jsonData from '../../data.json' //Import the json data
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase' 


export default {
  name: 'App',
  components: {
    Navbar,
    SessionHistoryCard,
    SessionHistoryContainer,
  },
  data() {
    return {
      sessionHistory: [],
      sessionCount: 0,
      selectedWeek: [],
    }
  },
  async mounted() {
    //Get all of the saved weeks from firebase
   const querySnapshot = await getDocs(collection(db, "weeklySession"));
    querySnapshot.forEach((doc) => {
      if (typeof doc.data().count === 'undefined') { //Only push the session history
        this.sessionHistory.push(doc.data());
      } else {
        this.sessionCount = doc.data().count;
      }
    });
  },
  methods: {
    displaySelectedSession(index) {
      this.selectedWeek = this.sessionHistory[index] //Selected session week comes in order so will just be the index get that information
      console.log(this.selectedWeek);
    }
  }
}
</script>

<style>
.page-background {
    /* background-color: #14bcce; */
    background-color: #212322;
    /* background-color: #3182a9; */
}

.session-container {
    border: solid 3px #212322;
    border-radius: 20px;
    background-color: #227dab;
    height: fit-content;
}

.session-card-row { 
    max-height: 80vh;
    overflow-y: scroll;
}

.session-card {
    --bs-card-spacer-y: 0.2rem;
    --bs-card-spacer-x: 0.5rem;
    border: 3px solid #212322 ;
    margin-bottom: 5px;
}

.selected-session-card {
    --bs-card-spacer-y: 0.2rem;
    --bs-card-spacer-x: 0.5rem;
    border: 2px solid #212322 ;
    border-radius: 10px;
    margin: 5px;
    width: 48%;
    display: inline-block;
}

.card-text {
    margin-bottom: 0px;
}

.icon-card-text {
    display: inline;
    margin-right: 5px;
    font-weight: bold;
}

.card-icons {
    font-size: 35px;
}

.modal-title {
    text-align: center;
}

.modal-backdrop {
    background-color: red;
}

.session-wrapper {
    display: grid; 
    grid-template-columns: 20% 80%; 
    height: 80vh;
}

.weekday-grid-wrapper {
    display: grid; 
    grid-template-columns: 20% 80%; 
    height: fit-content;
    min-height: 80vh;
}

.weekday {
    border: solid 2px #212322;
    background-color: #d7e3e8;
}

.weekday-column {
    border-radius: 10px 0px 0px 10px;
    margin: 5px -1px 5px -1px;
    background-color: #d7e3e8;
}

.session-cards-column {
    border-radius: 0px 10px 10px 0px;
    margin: 5px -1px 5px -1px;
    min-height: auto;
}

.session-text {
    text-align: center;
    color: #212322;
    margin-top: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid #212322;
    font-size: 28px;
    padding-bottom: 5px;
}

::-webkit-scrollbar-track {
    margin-top: 10px;
    margin-bottom: 10px;

}

.weekday-text {
    text-align: center;
    margin-bottom: 0px;
    font-weight: bold;
    font-size: 20px;
    color: #212322;
}

.session-length-text {
    text-align: center;
    margin-bottom: 2px;
    margin-top: -5px;
    color: #212322;
}

.trash-icon {
    float: right;
    font-size: 30px;
    margin-top: 1%;
}

.bi-person-circle {
    color: white;
    font-size: 35px;
    display: block;
    float: right;
    padding-left: 15px;
}

input,
select {
    font-size: 100%;
    border: 1px solid #ccc;
    width: 100%;
    margin-top: 5px !important;
    border: 2px solid black;
    border-radius: 7px;
    width: 100%;
    height: 38px;
}

.save-btn {
    display: inline;
    float: right;
    margin-top: 3px;
}

@media screen and (max-width: 575px) {
    .selected-session-card {
        width: 98%;
    }

}

@media screen and (max-width: 475px) {
    .card-icons {
        font-size: 25px;
    }

    .icon-card-text {
        margin-right: 0px;
    }
}

@media screen and (max-width: 376px) {
    .card-icons {
        font-size: 20px;
    }

    .icon-card-text {
        margin-right: 0px;
    }
}

/* At this width stack the divs so the session picker is on top with the weekly table below */
@media screen and (max-width: 992px) {

    .session-container {
        margin-top: 5px;
    }

    .weekday-grid-wrapper {
        display: inline;
        height: 100%;
        margin-bottom:10px;
        height: 100vh;
    }

    .session-card-row { 
        max-height: 50vh;
        overflow-y: scroll;
    }

    .weekday-column {
        border-radius: 10px 10px 0px 0px;
        margin: 5px 0px 5px 0px;

    }

    .session-cards-column {
        border-radius: 0px 0px 10px 10px;
        margin: -7px 0px 20px 0px;
        width: 100%;
        min-height: 30px;
    }

    .session-text {
        text-align: center;
        margin-bottom: 15px;
        width: 100%;
        
    }

    .weekday-text {
        text-align: center;
        margin-bottom: 0px;
        font-weight: bold;
        font-size: 20px;
    }

    .session-length-text {
        text-align: center;
        margin-bottom: 2px;
        margin-top: -5px;
    }

}
</style>
