<template>
  <ion-header>
    <ion-toolbar>
      <ion-button slot="start" fill="clear" size="small" @click="cancel()">
        <ion-icon :icon="arrowBack" />
      </ion-button>
      <ion-title>Einstellungen</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-list-header>
        <ion-label>Design</ion-label>
      </ion-list-header>
      <ion-item>
        <ion-label>Dunkler Modus</ion-label>
        <ion-toggle
          :checked="DesignService.status.dark"
          @ionChange="onToggleDarkmode($event)"
        />
      </ion-item>
    </ion-list>
  </ion-content>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  IonList,
  IonItem,
  IonListHeader,
  IonLabel,
  IonToggle,
  IonToolbar,
  modalController,
} from "@ionic/vue";

import DesignService from "@/service/DesignService";
import { arrowBack } from "ionicons/icons";

export default defineComponent({
  name: "SettingsPage",
  components: {
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonToggle,
    IonToolbar,
  },
  setup() {
    const cancel = () => {
      modalController.dismiss();
    };

    return {
      DesignService,
      arrowBack,
      cancel,
    };
  },
  methods: {
    onToggleDarkmode(event: CustomEvent) {
      DesignService.setDarkMode(event.detail.checked);
    },
  },
});
</script>
