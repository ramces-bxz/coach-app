export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId, //access the root getters in the index.js
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    context.commit('registerCoach', coachData); //send to mutation
  },
};
