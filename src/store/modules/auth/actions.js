import axios from 'axios';

export default {
  login() {},
  async signup(context, payload) {
    try {
      const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBClVpni8dHy7-YM6M_o8840cZRyRqj-c8',
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }
      );
      console.log(response);
    } catch (err) {
      const error = new Error(
        err.response.data.error.message || 'Failed to authenticate'
      );
      throw error;
    }
  },
};
