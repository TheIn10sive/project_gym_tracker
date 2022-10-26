<template>
  <ion-toolbar>
    <ion-title>{{ title }}</ion-title>
    <ion-button
      v-if="settings"
      slot="end"
      fill="clear"
      size="small"
      @click="showSettings()"
    >
      <ion-icon :icon="settingsSharp" />
    </ion-button>
  </ion-toolbar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  modalController,
} from "@ionic/vue";
import { settingsSharp } from "ionicons/icons";

import SettingsModal from "@/components/modals/SettingsModal.vue";

export default defineComponent({
  name: "AppToolbar",
  props: {
    title: {
      type: String,
    },
    settings: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
  },
  setup() {
    return {
      settingsSharp,
    };
  },
  methods: {
    async showSettings() {
      const modal = await modalController.create({
        component: SettingsModal,
      });
      await modal.present();
    },
  },
});
</script>
