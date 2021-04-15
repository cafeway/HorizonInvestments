<template>
<div class="container-fluid">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
 <nav class="navbar navbar-expand-lg navbar-dark bg-mine" style="padding-top:30px:">
  <a class="navbar-brand disabled" href="" style="color:#ffdb58;">WiseFex Investments</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
<hr>
 <div class="text-center text-secondary">
    DONT FORGET TO REFFER FRIENDS
    </div>
<div class="container">
<div class="row align-items-center ">
    <div class="col-lg-12">
        <div>
            <p id="profile-name" class="profile-name-card"></p>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <div class="card">
   <form>
      <h2 class="title"> Log in</h2>
      <p class="subtitle">Don't have an account? <a><router-link to="/register">sign Up</router-link> </a></p>
      <p class="or"><span>or</span></p>

      <div class="email-login">
         <label for="email"> <b>Email</b></label>
         <input type="text"  class="text-center" placeholder="CashMoney@gmail.com" name="email" id="email" v-model="form.email" required>
         <label for="psw"><b>Password</b></label>
         <input type="password" class=" text-center" placeholder="************" name="password" v-model="form.Password" required>
      </div>
      <button class="cta-btn"  type="button" @click="submit()" >Log In</button>
      <a class="forget-pass" href="#">Forgot password?</a>
   </form>
</div>
        </div>
    </div>
</div>
</div>
</div>
</template>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      form: {
        email: '',
        Password: ''
      },
      error: null,
      activated: false,
      loading: true
    }
  },
  created () {
    const script = document.createElement('script')
    script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    document.getElementsByTagName('head')[0].appendChild(script)
    this.connected = window.navigator.onLine
  },
  methods: {
    submit () {
      firebase.auth()
        .signInWithEmailAndPassword(this.form.email, this.form.Password)
        .then(data => {
          this.$router.push('/dash')
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
<style scoped>
@import '../assets/auth.css'
body {
  background-color: rgb(228, 229, 247);
}
.social-login img {
  width: 24px;
}
a {
  text-decoration: none;
}

.card {
  font-family: sans-serif;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  margin-bottom:3em;
  border-radius: 10px;
  background-color: #ffff;
  padding: 1.8rem;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-weight: bold;
  margin: 0;
}
.subtitle {
  text-align: center;
  font-weight: bold;
}
.btn-text {
  margin: 0;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.google-btn {
  background: #fff;
  border: solid 2px rgb(245 239 239);
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  padding: 10px 10px;
  flex: auto;
  align-items: center;
  gap: 5px;
  justify-content: center;
}
.fb-btn {
  background: #fff;
  border: solid 2px rgb(69, 69, 185);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
}

.or {
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid rgb(245 239 239);
  line-height: 0.1em;
  margin: 25px 0;
}
.or span {
  background: #fff;
  padding: 0 10px;
}

.email-login {
  display: flex;
  flex-direction: column;
}
.email-login label {
  color: rgb(170 166 166);
}

input[type="text"],
input[type="password"] {
  padding: 15px 20px;
  margin-top: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}

.cta-btn {
  background-color: rgb(69, 69, 185);
  color: white;
  padding: 18px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
  border: none;
}

.forget-pass {
  text-align: center;
  display: block;
}
.bg-mine {
 background-color:#4545b9;
}

</style>
