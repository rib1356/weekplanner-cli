<template>
	<div class="card-body">
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12" style="height: fit-content"> <!-- Will be components-->
				<div v-for="message in messages" :key="message.message">
					<div class="card session-card-coach" v-if="message.user == 'coach'">
						<div class="card-body">
							<div class="row">
								<div class="col-sm-12 col-md-12 col-lg-12">
									<h3 class="card-title" style="font-weight:bold; margin-bottom: 0px">{{message.user}}: </h3>
									<h6 style="display:inline;">{{message.message}}</h6>
								</div>
							</div>
						</div>
					</div>
					<div class="card session-card-client" v-else>
						<div class="card-body">
							<div class="row">
								<div class="col-sm-12 col-md-12 col-lg-12">
									<h3 class="card-title" style="font-weight:bold; margin-bottom: 0px">{{message.user}}: </h3>
									<h6 style="display:inline;">{{message.message}}</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'MessageBox',
	props: {
		messages: Array,
		isClientView: Boolean,
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

.session-card-client {
    --bs-card-spacer-y: 0.2rem;
    --bs-card-spacer-x: 0.5rem;
    border: 3px solid #212322 ;
		height: fit-content;
		width: 50%;
		background-color:#42b1e1;
		margin-bottom: 5px;
}

.session-card-coach {
	--bs-card-spacer-y: 0.2rem;
	--bs-card-spacer-x: 0.5rem;
	border: 3px solid #212322 ;
	height: fit-content;
	width: 50%;
	background-color:#576c75;
	margin-bottom: 5px;
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


@media screen and (max-width: 992px) {
  .session-card-coach {
    width: 80%;
  }
  .session-card-client {
    width: 80%;
  }

}
</style>
