<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      show-if-above
      v-model="right"
      side="right"
      elevated
      content-class="bg-teal text-white"
      :width="300"
      :breakpoint="700"
    >
      <div class="fit column justify-center items-center content-center">
        <div class="q-pa-md full-width">
          <div v-if="step === 1">
            <div class="text-h4 text-center q-mb-md">
              Do you have an appointment?
            </div>
            <q-btn
              color="primary"
              class="full-width"
              icon-right="send"
              label="Set an appointment"
              @click="next()"
            />
            <div class="text-h6 text-center q-mb-md">
              Or
            </div>
            <q-btn
              color="primary"
              class="full-width"
              icon-right="send"
              label="Existing Patient"
              @click="next()"
            />
          </div>
          <div class="full-width" v-if="step === 2">
            <q-input
              color="white"
              filled
              v-model="information.firstName"
              label="First Name"
              stack-label
              :dense="true"
            />
            <q-input
              color="white"
              filled
              v-model="information.lastName"
              label="Last Name"
              stack-label
              :dense="true"
            />
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false,
      step: 1,
      information: {
        firstName: "",
        lastName: ""
      }
    };
  },
  methods: {
    next() {
      this.step += 1;
    }
  }
};
</script>
