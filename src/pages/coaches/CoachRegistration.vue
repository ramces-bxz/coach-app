<template>
  <section>
    <base-card
      ><h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form
    ></base-card>
  </section>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data); //send to action
      this.$router.replace('/coaches'); //replace for form only because theres no go back
    },
  },
};
</script>
