<template>
  <ion-page>
    <ion-header>
      <app-toolbar title="Archiv" />
    </ion-header>
    <ion-content>
      <ion-searchbar @ionChange="onInput($event)"></ion-searchbar>
      <ion-list>
        <template v-for="letter of letters" :key="letter">
          <ion-list-header class="letterHeader">{{ letter }}</ion-list-header>
          <ion-item
            v-for="exercise of searchResults[letter]"
            :key="exercise.pk"
          >
            <ion-label>{{ exercise.fields.name }}</ion-label>
          </ion-item>
        </template>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

import {
  IonPage,
  IonHeader,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonSearchbar,
} from "@ionic/vue";

import AppToolbar from "@/components/generic/AppToolbar.vue";

import exerciseData from "@/data/exercises.json";
import muscleData from "@/data/muscles.json";

export default defineComponent({
  name: "ArchivePage",
  components: {
    AppToolbar,
    IonPage,
    IonHeader,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    IonSearchbar,
  },
  setup() {
    const filteredExercises = exerciseData
      .filter((e) => e.model === "exercises.exercise")
      .sort((prev, next) => {
        if (prev.fields.name != undefined && next.fields.name != undefined) {
          return prev.fields.name.localeCompare(next.fields.name);
        } else {
          return 0;
        }
      });
    const numbers = "0123456789";
    const alphabeticOrder: { [key: string]: any } = {};
    for (const exercise of filteredExercises) {
      if (exercise.fields.name != undefined) {
        const firstLetter = exercise.fields.name[0].toUpperCase();
        const title = numbers.includes(firstLetter) ? "#" : firstLetter;
        if (alphabeticOrder[title] === undefined) {
          alphabeticOrder[title] = [exercise];
        } else {
          alphabeticOrder[title].push(exercise);
        }
      }
    }
    const letters = Object.keys(alphabeticOrder);
    const searchResults = ref(alphabeticOrder);
    return {
      filteredExercises,
      muscleData,
      alphabeticOrder,
      letters,
      searchResults,
    };
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.letterHeader {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  background: var(--ion-background-color);
}
</style>
