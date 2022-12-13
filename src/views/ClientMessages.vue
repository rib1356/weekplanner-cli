<template>
  <Navbar/>
  <div class="mx-3 my-2">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 session-container">
        <h4 style="text-align:center;">Client Messages</h4>
        <MessageBox :messages="messages" :isClientView="clientView"/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 session-container">
        <h4 style="text-align:center;">Send Message</h4>
        <MessageInput :isClientView="clientView" @sendMessage="saveMessageToFirebase"/>
      </div>
    </div>
</div>
</template>

<script>
//Import Components
import MessageInput from '../components/MessageInput.vue'
import MessageBox from '../components/MessageBox.vue'
import Navbar from '../components/Navbar.vue'

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '@/firebase' 


export default {
  name: 'ClientMessages',
  components: {
    Navbar,
    MessageBox,
    MessageInput
  },
  data() {
    return {
      messages: [],
      clientView: true,
    }
  },
  async mounted() {
    //Load all the of the users messages - would put a limit or a time stamp on this so not everything is grabbed in the future
    this.getMessageData();
  },
  methods: {
    async getMessageData() {
      this.messages = []; //Clear the array first
      const querySnapshot = await getDocs(collection(db, "messages"));
      querySnapshot.forEach((doc) => {
        this.messages.push(doc.data());
      });
    },
    async saveMessageToFirebase(messageToSend) {
      console.log("hello")
      console.log(messageToSend)
      var messageToSave = { //Create object to save
        "user" : this.isClientView ? 'client' : 'coach',
        "message" : messageToSend,
      };
      try {
        await addDoc(collection(db, "messages"), messageToSave); //Save the message object to firebase
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // Get the new messages
      this.getMessageData();
    }
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
