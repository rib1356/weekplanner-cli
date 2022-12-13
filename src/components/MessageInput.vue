<template>
	<div class="card-body">
		<div class="row">
			<div class="col-xs-12 col-md-12 col-lg-112" style="height: fit-content"> 
				<input type="textarea" class="form-control message-box-input" rows="3" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="messageToSend">
				<button type="button" class="btn btn-light message-box" @click="$emit('sendMessage', messageToSend)"><i class="bi bi-send" style="font-size:30px"></i></button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'MessageBox',
	props: {
		isClientView: Boolean,
	},
  data() {
    return {
     messageToSend: "",
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.message-box {
	border: solid 2px black;
	border-radius: 10px;
	height: 5rem;
	margin-bottom: 20px;
	float: right;
	width: 10%;
	margin-top: 5px;
}

.message-box-input {
	border: solid 2px black;
	border-radius: 10px;
	height: 5rem;
	margin-bottom: 20px;
	width: 89%;
	display: inline-block;
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


@media screen and (max-width: 1240px) {
  .message-box {

	width: 20%;
}

.message-box-input {
	width: 79%;
}


}
</style>
