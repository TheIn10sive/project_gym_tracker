<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="profile" href="/view/profile">
          <ion-icon :icon="person" />
          <ion-label>Profil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="workout" href="/view/workout">
          <ion-icon :icon="barbell" />
          <ion-label>Workout</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/view/archive">
          <ion-icon :icon="book" />
          <ion-label>Archiv</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { person, barbell, book } from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      person,
      barbell,
      book,
    };
  },
});
</script>
