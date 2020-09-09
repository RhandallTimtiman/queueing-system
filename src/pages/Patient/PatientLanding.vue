<template>
  <q-page-container>
    <q-page>
      <div class="fit row">
        <img class="background" src="~assets/doctor-bg.svg" alt="" />
        <div class="headers">
          <h1 class="text-weight-bold">WOULD YOU LIKE TO SET</h1>
          <h1 class="headers-left text-weight-bold">AN APPOINTMENT</h1>
          <q-btn elevated size="xl" rounded color="primary" label="Unelevated Rounded" />
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>
<style lang="sass" scoped>
.background
  height: 760px
  position: absolute;
  top: 24vh;
  left: 15vh;

.headers
  position: absolute;
  top: 24vh;
  left: 65vh;

.headers-left
  margin-left: 271px;

</style>
