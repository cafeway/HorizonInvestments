/* eslint-disable camelcase */
/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
<template>
  <div class="container-fluid">
  <div v-if="this.connected">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <nav class="navbar navbar-expand-lg navbar-light bg-mine">
    <div class="container-fluid"> <a class="navbar-brand" href="#" style="color:#ffdb58;">WiseFex Investments</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
               <b-list-group style="max-width: 300px;">
                 <b-list-group-item class="d-flex align-items-center">
                    <b-avatar class="mr-3"></b-avatar>
                 <span class="mr-auto"> Welcome Back  {{this.user.data.displayName}}!</span>
                <b-badge></b-badge>
               </b-list-group-item>
               </b-list-group>
            </ul>
            <div class="d-flex" style="padding-right:10px">
            </div>
            <div class="d-flex" style="padding-right:10px">
                <div class="text-center text-secondary alert"  data-toggle="modal" data-target="#exampleModal" style="background-color:#FF00FF;">
                Reffer Downlines
                </div>
           </div>
           <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" id="code">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success btn-md " @click="genaratelink">
                  get link
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
</svg>
</button>
      </div>
    </div>
  </div>
</div>
             <div class="d-flex" style="padding-right:10px">
                <div class="text-center text-secondary alert" style="background-color:#32CD32;" @click="deposit()">
                Deposit</div>
           </div>
           <div class="d-flex" style="padding-right:10px">
                <div class="text-center text-secondary alert" style="background-color:#ffdb58;" @click="Withdraw()">
                Withdraw
           </div>
            </div>
        </div>
      <!-- Modal -->
<div class="modal fade" id="verify" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Hold Up!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
<div id="loadingIndicator" v-if="transaction_status == 1">
<div class="loadingBar" id="loadingBar1"></div>
<div class="loadingBar" id="loadingBar2"></div>
<div class="loadingBar" id="loadingBar3"></div>
<div class="loadingBar" id="loadingBar4"></div>
</div>
<div v-else-if="transaction_status == 2" class="text-center text-secondary alert alert-success">
<h4>Transaction id: <b>{{receipt_no}} </b> </h4>
<h5>Transaction type: <b>{{transaction_type}}</b></h5>
<h6>Transaction status: <b>Success</b></h6>
</div>
<div v-else class="text-center text-danger alert alert-primary">
  <h3>Transaction: <b>{{receipt_no}} </b> failed due:  </h3>
  <ol>
  <li>Duplicate existing transaction</li>
  <li>The transaction was already verified</li>
  </ol>
  <h5>Transaction type: <b>{{transaction_type}}</b></h5>
  <h6>Transaction status: <b>Failed</b></h6>
</div>
<label for="receipt">Verification status of </label>
<input id="receipt_no" name="receipt" v-model="receipt_no" class="form-control mr-sm-2" type="search" placeholder="ref_no:  5993859372
" aria-label="Search">
      </div>
      <div class="modal-footer" v-if="transaction_status == 1">
        <button type="button" class="btn btn-outline-danger"  @click="reload()" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-outline-primary" @click="verify()">Verify</button>
      </div>
      <div class="modal-footer" v-else-if="transaction_status == 2">
        <button type="button" class="btn btn-outline-success"  @click="reload()" data-dismiss="modal">Home</button>
      </div>
      <div class="modal-footer" v-else-if="transaction_status == 3">
        <button type="button" class="btn btn-outline-danger"  @click="reload()" data-dismiss="modal">Home</button>
      </div>
    </div>
  </div>
</div>
    </div>
</nav>

<hr>
<div>
<div>
<div id="root">
  <div class="container pt-5">
    <div class="row align-items-stretch">
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Portfolio Balance<svg
              class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
              </path>
            </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">{{this.wallet_balance}}/=</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Investment income<svg
              class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
              </path>
            </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">{{this.amount_received}}/=</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Downline Interest<svg
              class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
              </path>
            </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">{{this.refferals}}/=</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Rates<svg
              class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
              </path>
            </svg></h4>
             <span
            class="hind-font caption-12 c-dashboardInfo__subInfo">15% --- 24hrs</span>
             <span
            class="hind-font caption-12 c-dashboardInfo__subInfo">40% --- 48hrs</span>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="header-title pb-3 mt-0">Track Your Investments</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Timer</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="bid in bids" :key="bid.id">
                                    <td>{{bid.investment}}</td>
                                    <td v-if="bid.state == 'running'"><span class="badge badge-boxed badge-soft-warning">pending</span></td>
                                    <td v-else-if="bid.state =='matured'"><span class="badge badge-boxed badge-soft-running">matured</span></td>
                                    <td v-else><span class="badge badge-boxed badge-soft-primary">cashed out</span></td>
                                    <td>
                                    <vue-countdown-timer
      @start_callback="startCallBack(bid.id)"
      @end_callback="endCallBack(bid.id)"
      :start-time="bid.startdate"
      :end-time="bid.stopdate"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="''"
      label-position="begin"
      :end-text="'timer expired'"
      :day-txt="'D'"
      :hour-txt="'H'"
      :minutes-txt="'M'"
      :seconds-txt="'S'">
    </vue-countdown-timer>
                                    </td>
                                    <td v-if="bid.state == 'running'"><button class="btn btn-sm btn-default disabled"><strike>running</strike></button></td>
                                    <td v-else-if="bid.state == 'matured'" ><button  class="btn btn-sm btn-outline-success" @click="cashout(bid.id)">Cash-out</button></td>
                                     <td v-else><p class="alert alert-success" role="alert">Cashed out</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--end table-responsive-->
                    <div class="pt-3 border-top text-right">
<!-- Modal -->
<div class="modal fade" id="withdraw" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Withdraw</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input
        type="number"
        value="200"
        placeholder="amount"
        id="withdrawal"
        v-model="form.withdrawal"
        class="form-control"
        />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="withdraw()">Withdraw</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="invest" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">WiseFoxes invest in Wise-fex.</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form v-if="Investment == 0">
  <div class="form-group">
    <input type="number" class="form-control" id="period"  readonly required autofocus  aria-describedby="emailHelp" placeholder="number of days" value="1">
  </div>
  <div class="form-group">
    <input type="number" required autofocus  class="form-control" id="investment" placeholder="amount">
  </div>
</form>
<div  v-else-if="Investment == 1" class="alert alert-warning" role="alert">
<h3>Your Investment Successfull...!</h3>
</div>
<div  v-else-if="Investment == 2" class="alert alert-warning" role="alert">
<h4>Bid Failed due to insufficient wallet_balance
<p><a href="https://ravesandbox.flutterwave.com/pay/bitbid">Kindly Top Here</a>Or Try Biding a smaller amount</p>
</h4>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" @click="refresh()" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-primary" @click="invest()">Invest</button>
      </div>
    </div>
  </div>
</div>

                    <!-- <a href="#" class="text-warning">View all <i class="fa fa-eye"></i></a> -->
                       <button class="btn btn-secondary" @click="logout()">
                       Logout
                       </button>
                       <button class="btn btn-secondary" data-toggle="modal" data-target="#invest">
                       Invest
                       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
</svg>
                       </button>
                     <!-- <button type="button" class="btn btn-warning btn-md" @click="verify_trans()">
 Withdraw
</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<!-- Footer -->
<footer class="bg-footer text-center text-white">
  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!--social media-->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Form -->
    <section class="">
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <!--Grid column-->

          <!--Grid column-->
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    </section>
    <!-- Section: Form -->

    <!-- Section: Text -->
    <section class="mb-4">
      <p>
       All T&C's Apply
      </p>
    </section>
    <!-- Section: Text -->

    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    WiseFex International
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
  </div>
  <div v-else  class="container-fluid" style="padding-left:500px">
  <p></p>
    <div class="load">
        <div class="fingers">
            <div class="nails"></div>
        </div>

        <div class="fingers">
            <div class="nails"></div>
        </div>

        <div class="fingers">
            <div class="nails"></div>
        </div>

        <div class="fingers">
            <div class="nails"></div>
        </div>

        <div class="pollex"></div>

    </div>
  </div>
</div>

</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  data () {
    return {
      form: {
        number: '',
        amount: 0,
        withdrawal: 0
      },
      receipt_no: '',
      refferals: 0,
      amount_sent: 0,
      amount_received: 0,
      wallet_balance: 0,
      activated: false,
      verified: '',
      transaction_status: 1,
      transaction_type: '',
      invitelink: '',
      Investment: 0,
      total_bids: 0,
      bids: [],
      now: 0,
      doc_ref: '',
      connected: true
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },

  updated: function () {
    window.location.href('/dash')
  },
  mounted: function () {
    this.Investment = 0
    this.invitelink = ''
    this.receipt_no = ''
    this.transaction_type = ''
    this.transaction_status = 1
    let db = firebase.firestore()
    db.collection('users').doc(firebase.auth().currentUser.email).collection('invitees').get().then(snapshot => {
      this.refferals = snapshot.size
    })
    db.collection('users').doc(this.user.data.email).collection('investments').get().then(snapshot => {
      this.total_bids = snapshot.size
    })
    db.collection('users').doc(this.user.data.email).collection('investments').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.bids.push(doc.data())
      })
    })
    firebase.firestore().collection('users').doc(this.user.data.email).get().then(snapshot => {
      let data = snapshot.data()
      this.amount_sent = data.amount_sent
      this.amount_received = data.amount_received
      this.wallet_balance = data.wallet_balance
      this.activated = data.activated
    })
  },
  methods: {
    refresh: function () {
      window.location.reload()
    },
    // eslint-disable-next-line camelcase
    cashout: function (bid_id) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', bid_id).get().then(snapshot => {
        snapshot.forEach(doc => {
          db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.cashed) {
              let cashout = snapshot.data().investment
              db.collection('users').doc(this.user.data.email).get().then(snapshot => {
              // eslint-disable-next-line camelcase
                let profit = cashout * 0.15
                // eslint-disable-next-line camelcase
                let amount_received = snapshot.data().amount_received + cashout + profit
                let wb = snapshot.data().wallet_balance + cashout + profit
                db.collection('users').doc(this.user.data.email).update({
                  wallet_balance: wb,
                  amount_received: amount_received
                })
                db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).update({
                  state: 'cashed',
                  matured: true,
                  cashed: true
                })
                window.location.reload()
              })
            } else {
              this.$swal('cashed out .... please refresh')
              window.location.reload()
            }
          })
        })
      })
    },
    verify_trans: function () {
      var request = require('request')
      var options = {
        'method': 'GET',
        'url': 'https://api.flutterwave.com/v3/transactions/123456/verify',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer FLWSECK_TEST-40f50b8a0e514349a47be4d0acc29e0f-X'
        }
      }
      request(options, function (error, response) {
        if (error) throw new Error(error)
        console.log(response.body)
      })
    },
    starttimer: function (id, period) {
      this.now = id
      let db = firebase.firestore()
      console.log(this.now)
      var startdate = new Date()
      var startdateconverted = new Date().getTime()
      var maturedate = startdate.setDate(startdate.getDate() + period)
      console.log(startdateconverted)
      console.log(maturedate)
      firebase.firestore().collection('users').doc(this.user.data.email).collection('investments').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach(doc => {
          // eslint-disable-next-line camelcase
          var doc_id = doc.id
          db.collection('users').doc(this.user.data.email).collection('investments').doc(doc_id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.redeemed) {
              db.collection('users').doc(this.user.data.email).collection('investments').doc(doc_id).update({
                startdate: startdateconverted,
                stopdate: maturedate,
                redeemed: true,
                started: true
              })
            } else {}
          })
        })
      })
    },
    // eslint-disable-next-line camelcase
    startCallBack: function (bid_id) {
      console.log(bid_id)
    },
    // eslint-disable-next-line camelcase
    endCallBack: function (bid_id) {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('investments').where('id', '==', bid_id).get().then(snapshot => {
        snapshot.forEach(doc => {
          let db = firebase.firestore()
          db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).get().then(snapshot => {
            let ifmatured = snapshot.data().matured
            if (ifmatured) {
              console.log(snapshot.data().state)
            } else {
              console.log('......')
              db.collection('users').doc(this.user.data.email).collection('investments').doc(doc.id).update({
                state: 'matured'
              })
            }
          })
        })
      })
    },
    invest: function () {
      let investment = document.getElementById('investment').value
      let period = document.getElementById('period').value
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.email).get().then(snapshot => {
        if (parseFloat(investment) <= snapshot.data().wallet_balance) {
          this.Investment = 1
          let db = firebase.firestore()
          let balance = snapshot.data().wallet_balance - parseFloat(investment)
          db.collection('users').doc(firebase.auth().currentUser.email).update({
            wallet_balance: balance
          })
          console.log(balance)
          // eslint-disable-next-line camelcase
          let cust_id = parseFloat(this.total_bids) + 1
          console.log(this.now)
          var startdate = new Date()
          var startdateconverted = new Date().getTime()
          var maturedate = startdate.setDate(startdate.getDate() + parseFloat(period))
          console.log(startdateconverted)
          db.collection('users').doc(firebase.auth().currentUser.email).collection('investments').add({
            id: cust_id,
            investment: parseFloat(investment),
            period: parseFloat(period),
            date: new Date().toDateString(),
            started: false,
            state: 'running',
            cashed: false,
            startdate: startdateconverted,
            stopdate: maturedate

          })
        } else {
          this.Investment = 2
          console.log('***')
        }
        window.location.href('/dash')
      })
    },
    logout: function () {
      firebase.auth().signOut()
      this.$router.push('/login')
    },
    genaratelink () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://wise-fex.com/#/register'
      var referee = firebase.auth().currentUser.uid
      var parameters = {'uid': referee}
      var finalURL = createURLwithParameters(baseURL, parameters)
      let field = document.getElementById('code')
      field.value = finalURL
    },
    reload: function () {
      window.location.reload()
    },
    verify: function () {
      var ref = document.getElementById('receipt_no').value
      this.receipt_no = ref
      console.log(ref)
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.email).collection('transactions').doc(this.receipt_no).get().then(snapshot => {
        if (snapshot.data().redeemed !== true) {
          // eslint-disable-next-line camelcase
          let balance_now = this.wallet_balance + snapshot.data().amount
          console.log(balance_now)
          this.transaction_status = 2
          this.transaction_type = snapshot.data().tx_ref
          db.collection('users').doc(firebase.auth().currentUser.email).collection('transactions').doc(ref).update({
            redeemed: true
          })
          db.collection('users').doc(firebase.auth().currentUser.email).update({
            wallet_balance: balance_now
          })
        } else {
          this.transaction_status = 3
        }
      })
    },
    deposit: function () {
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK-dfa1f8026935ce5fdeb76020057e0ec0-X',
        tx_ref: 'Deposit',
        amount: this.form.amount,
        currency: 'KES',
        country: 'KE',
        payment_option: 'mpesa,card,ussd,account,paypal',
        customer: {
          email: firebase.auth().currentUser.email,
          name: this.user.data.displayName,
          phone_number: this.form.number
        },
        callback: function (data) {
          let db = firebase.firestore()
          db.collection('users').doc(firebase.auth().currentUser.email).collection('transactions').doc(data.flw_ref).set({
            transaction_id: data.transaction_id,
            transaction_status: data.status,
            date: new Date(),
            amount: data.amount,
            redeemed: false,
            reference: data.flw_ref,
            tx_ref: data.tx_ref
          })
        }
      })
    },
    withdraw: function () {
      let db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('withdrawals').add({
        amount: parseFloat(this.form.withdrawal),
        status: false
      })
    }
  }
}
</script>
<style scoped>
@import '../assets/footer.css';
.bg-mine {
 background-color:#4545b9;
}
.bg-footer {
 background-color:#BC427F;
}
.c-dashboardInfo {
  margin-bottom: 15px;
}
.c-dashboardInfo .wrap {
  background: #ffffff;
  box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 40px 25px 20px;
  height: 100%;
}
.c-dashboardInfo__title,
.c-dashboardInfo__subInfo {
  color: #6c6c6c;
  font-size: 1.18em;
}
.c-dashboardInfo span {
  display: block;
}
.c-dashboardInfo__count {
  font-weight: 600;
  font-size: 2.5em;
  line-height: 64px;
  color: #323c43;
}
.c-dashboardInfo .wrap:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  content: "";
}

.c-dashboardInfo:nth-child(1) .wrap:after {
  background: linear-gradient(82.59deg, #00c48c 0%, #00a173 100%);
}
.c-dashboardInfo:nth-child(2) .wrap:after {
  background: linear-gradient(81.67deg, #0084f4 0%, #1a4da2 100%);
}
.c-dashboardInfo:nth-child(3) .wrap:after {
  background: linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%);
}
.c-dashboardInfo:nth-child(4) .wrap:after {
  background: linear-gradient(81.67deg, #ff647c 0%, #1f5dc5 100%);
}
.c-dashboardInfo__title svg {
  color: #d7d7d7;
  margin-left: 5px;
}
.MuiSvgIcon-root-19 {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
}

</style>
