<template>
  <div class="container-fluid">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter your email</label>
    <input type="email" class="form-control" id="email" v-model="form.email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">Make sure the emails match with your account</small>
  </div>
  <button type="button"  @click="submit()" class="btn btn-primary">Request</button>
</form>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      form: {
        email: ''
      },
      error: null
    }
  },
  methods: {
    submit: function () {
      firebase.auth().sendPasswordResetEmail(this.form.email)
        .then(
          this.$swal('check your email to reset your password')
        ).catch(function (err) {
          console.log(err)
        })
      console.log(this.form.email)
    }
  }
}
</script>
