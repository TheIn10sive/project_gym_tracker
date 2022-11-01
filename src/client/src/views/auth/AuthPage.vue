<template>
  <ion-page>
    <ion-header>
      <app-toolbar />
    </ion-header>
    <ion-content>
      <ion-segment v-model="mode">
        <ion-segment-button value="register">Registrieren</ion-segment-button>
        <ion-segment-button value="login">Login</ion-segment-button>
      </ion-segment>
      <login-mask v-if="mode === 'register'" />
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonSegment,
  IonSegmentButton,
} from "@ionic/vue";
import AppToolbar from "@/components/generic/AppToolbar.vue";
import LoginMask from "@/views/auth/RegisterMask.vue";

export default defineComponent({
  name: "AuthPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    AppToolbar,
    IonSegment,
    LoginMask,
    IonSegmentButton,
  },
  setup() {
    return {
      mode: ref("register"),
    };
  },
});
</script>
