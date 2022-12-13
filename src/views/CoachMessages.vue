<template>
  <Navbar/>
  <div class="mx-3 my-2">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 session-container">
        <h4 style="text-align:center;">Coach Messages</h4>
        <MessageBox :messages="messages" :isClientView="'right'"/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 session-container">
        <h4 style="text-align:center;">Client Messages</h4>
        <MessageBox :messages="messages" :isClientView="'right'"/>
      </div>
    </div>
</div>
</template>

<script>
//Import Components
// import SessionHistoryCard from '../components/SessionHistoryCard.vue'
import MessageBox from '../components/MessageBox.vue'
import Navbar from '../components/Navbar.vue'

import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase' 


export default {
  name: 'ClientMessages',
  components: {
    Navbar,
    MessageBox
  },
  data() {
    return {
      messages: [],
    }
  },
  async mounted() {
    //Load all the of the users messages - would put a limit or a time stamp on this so not everything is grabbed in the futureS
   const querySnapshot = await getDocs(collection(db, "messages"));
    querySnapshot.forEach((doc) => {
      this.messages.push(doc.data());
    });
  },
  methods: {
    
  }
}
</script>

<style scoped>

.session-container {
  width: 50%;
  margin:auto;
}

@media screen and (max-width: 992px) {
  .session-container {
    width: 100%;
  }

}

</style>
