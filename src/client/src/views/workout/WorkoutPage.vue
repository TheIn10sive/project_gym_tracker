<template>
  <ion-page>
    <ion-header>
      <app-toolbar title="Workout" />
    </ion-header>
    <ion-content> </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonHeader, IonContent } from "@ionic/vue";

import AppToolbar from "@/components/generic/AppToolbar.vue";

export default defineComponent({
  name: "WorkoutPage",
  components: {
    AppToolbar,
    IonPage,
    IonHeader,
    IonContent,
  },
});
</script>
