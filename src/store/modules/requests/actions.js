import axios from 'axios';
export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const databaseUrl = context.rootGetters.databaseUrl;
    const { data: responseData } = await axios.post(
      `${databaseUrl}/requests/${payload.coachId}.json`,
      newRequest
    );
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const databaseUrl = context.rootGetters.databaseUrl;

    try {
      const token = context.rootGetters.token;
      const { data: responseData } = await axios.get(
        `${databaseUrl}/requests/${coachId}.json?auth=` + token
      );
      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId,
          userEmail: responseData[key].userEmail,
          message: responseData[key].message,
        };
        requests.push(request);
      }
      context.commit('setRequest', requests);
    } catch (err) {
      const error = new Error(err.response.data.error || 'Failed to fetch');
      throw error;
    }
  },
};
