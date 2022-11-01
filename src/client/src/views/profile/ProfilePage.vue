<template>
  <ion-page>
    <ion-header>
      <app-toolbar title="Profil" settings="true" />
    </ion-header>
    <ion-content></ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonHeader, IonContent } from "@ionic/vue";

import AppToolbar from "@/components/generic/AppToolbar.vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    AppToolbar,
    IonPage,
    IonHeader,
    IonContent,
  },
});
</script>
