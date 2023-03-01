<template>
  <coach-filter @change-filter="setFilter"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button to="/register" link>Register As Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No Coach Found</h3>
    </base-card>
  </section>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        backend: true,
        frontend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches']; //first coach is for namespace found in store/index.js
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>
<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
