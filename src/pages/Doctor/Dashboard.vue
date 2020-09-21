<template>
  <div class="row">
    <div class="col-6">
      <div class="greet-header">
        <p class="greet-name">Hello Dr. Strange. Welcome Back!</p>
        <p class="greet-day">Have a wonderful day!</p>
        <q-btn
          size="lg"
          icon="local_hospital"
          rounded
          style="background: #6D62FE; color: white"
          label="Start Consultation"
        />
        <div class="patient-section">
          <div class="patient-info row">
            <div class="col-3">
              <p class="patient-info-count">
                Patient #1
              </p>
            </div>
            <div class="col-9">
              <p class="patient-info-name">
                Yami Ng Pinas
              </p>
            </div>
          </div>
          <div class="patient-info row">
            <div class="col-3">
              <p class="patient-info-count">
                Patient #2
              </p>
            </div>
            <div class="col-9">
              <p class="patient-info-name">
                Mimosa Ng Pinas
              </p>
            </div>
          </div>
          <div class="patient-info row">
            <div class="col-3">
              <p class="patient-info-count">
                Patient #2
              </p>
            </div>
            <div class="col-9">
              <p class="patient-info-name">
                Mimosa Ng Pinas
              </p>
            </div>
          </div>
          <div class="patient-info row">
            <div class="col-3">
              <p class="patient-info-count">
                Patient #2
              </p>
            </div>
            <div class="col-9">
              <p class="patient-info-name">
                Mimosa Ng Pinas
              </p>
            </div>
          </div>
          <div class="patient-info row">
            <div class="col-3">
              <p class="patient-info-count">
                Patient #2
              </p>
            </div>
            <div class="col-9">
              <p class="patient-info-name">
                Mimosa Ng Pinas
              </p>
            </div>
          </div>
          <div class="patient-info row">
            <div class="col-3">
              <p class="patient-info-count">
                Patient #2
              </p>
            </div>
            <div class="col-9">
              <p class="patient-info-name">
                Mimosa Ng Pinas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 self-end">
      <div class="row">
        <div class="col-6">
          <div class="card-container">
            <p class="text-center title"><b>You have</b></p>
            <p class="text-center jumbo">20</p>
            <p class="text-center title"><b>Consultation on <span class="light-violet">Queue</span></b></p>
          </div>
        </div>
        <div class="col-6">
          <div class="card-container">
            <p class="text-center title"><b>You have</b></p>
            <p class="text-center jumbo">20</p>
            <p class="text-center title"><b>Consultation on <span class="light-violet">Queue</span></b></p>
          </div>
        </div>
      </div>
      <div class="row space-top">
        <div class="col-6">
          <div class="card-container">
            <p class="text-center title"><b>You have</b></p>
            <p class="text-center jumbo">20</p>
            <p class="text-center title"><b>Consultation on <span class="light-violet">Queue</span></b></p>
          </div>
        </div>
        <div class="col-6">
          <div class="card-container">
            <p class="text-center title"><b>You have</b></p>
            <p class="text-center jumbo">20</p>
            <p class="text-center title"><b>Consultation on <span class="light-violet">Queue</span></b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.greeting
  font-size: x-large;

.greet-header
  margin-top: 60px;

.greet-day
  font-size: 45px;
  color: #6D62FE;
  font-weight: bold

.greet-name
  font-size: 20px
  margin-bottom: 0px

.patient-info-count
  font-size: 35px;
  font-weight: bold;
  color: #6D62FE;

.patient-info-name
  font-size: 35px;
  letter-spacing: 2px

.patient-section
  margin-top: 30px

.card-container
  height: 250px;
  width: 250px;
  border-radius: 15%;
  background-color: #E2E6FF;
  padding: 24px;

.title
  font-size: 20px;
  margin: 0px

.jumbo
  font-size: 85px;
  font-weight: bold;
  margin: 0px
  color: #6D62FE;

.light-violet
  color: #6D62FE;

.space-top
  margin-top: 30px
</style>
