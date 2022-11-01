<template>
  <ion-card>
    <ion-item>
      <ion-label>E-Mail:</ion-label>
      <ion-input />
    </ion-item>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonItem, IonLabel, IonInput, IonCard } from "@ionic/vue";

import {} from "@ionic/vue";

export default defineComponent({
  name: "RegisterMask",
  components: {
    IonItem,
    IonLabel,
    IonInput,
    IonCard,
  },
});
</script>
