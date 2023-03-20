import axios from 'axios';
export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId; //access the root getters in the index.js
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    const databaseUrl = context.rootGetters.databaseUrl;
    const token = context.rootGetters.token;
    await axios.put(
      `${databaseUrl}/coaches/${userId}.json?auth=` + token,
      coachData
    );
    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    }); //send to mutation
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const databaseUrl = context.rootGetters.databaseUrl;
    try {
      const { data: coachesData } = await axios.get(
        `${databaseUrl}/coaches.json`
      );
      const coaches = [];
      for (const key in coachesData) {
        const coach = {
          id: key,
          firstName: coachesData[key].firstName,
          lastName: coachesData[key].lastName,
          description: coachesData[key].description,
          hourlyRate: coachesData[key].hourlyRate,
          areas: coachesData[key].areas,
        };
        coaches.push(coach);
      }
      // console.log(coaches);
      context.commit('setCoaches', coaches);
      context.commit('setFetchTimestamp');
    } catch (err) {
      console.log(err.response);
      const error = new Error(err.response.data.error || 'Failed to fetch');
      throw error;
    }
  },
};
