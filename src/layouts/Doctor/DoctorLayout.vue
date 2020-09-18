<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row window-height">
        <div class="col-3 col-md-2 col-sm-4 q-pa-lg">
          <div class="side-bar bg-custom-purple with-radius">
            <div class="side-bar-content fit column content-center">
              <div class="user-content fixed-width q-px-lg">
                <div class="row">
                  <q-avatar size="60px">
                    <img src="https://cdn.quasar.dev/img/avatar.png">
                  </q-avatar>
                  <div class="user-content-information q-ml-sm">
                    <div class="column">
                      <p class="header-name">Dr. Strange</p>
                      <p class="text-caption text-white">ECG</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="menu q-mt-lg q-px-lg">
                <p class="text-h6 text-white">
                  Dashboard
                </p>
                <p class="text-h6 text-white">
                  Menu
                </p>
              </div>
              <div class="q-px-lg justify-end log-out">
                <p class="text-h6 text-white">
                  Log Out
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9 col-md-10 col-sm-8 q-py-lg q-pr-lg">
          <router-view></router-view>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="sass">

.bg-custom-purple
  background-color: #6D62FE

.side-bar
  height: 100%

.with-radius
  border-radius: 25px

.fixed-width
  width: 100%

.user-content
  padding-top: 130px

.header-name
  font-size: 20px;
  color: white;
  margin: 0

.log-out
  margin-top: 465px;
</style>
