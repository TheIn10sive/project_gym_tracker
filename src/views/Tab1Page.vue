<template>
  <ion-page>
    <ion-header>
      <app-toolbar title="test" settings="true" />
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-text>ProfilPage</ion-text>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonText,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import AppToolbar from "@/components/generic/AppToolbar.vue";

export default defineComponent({
  name: "Tab1Page",
  components: {
    IonText,
    IonHeader,
    IonContent,
    IonPage,
    AppToolbar,
  },
});
</script>
