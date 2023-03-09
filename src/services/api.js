import axios from 'axios';
import { omit } from 'lodash';
// import { useSelector } from 'react-redux';
// import { selectUserId } from 'redux/authorization/authSelectors';

//  const userId = useSelector(selectUserId);
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const AuthApi = {
  // реєструємо юзера
  async registerNewUser(userData) {
    const { data } = await axios.post('/auth/register', userData);
    return data;
  },

  async loginUser(signedUserData) {
    // логіним юзера
    const { data } = await axios.post('/auth/login', signedUserData);
    return data;
  },

  async logOutUser() {
    // юзерлогаут
    const { data } = await axios.post('/auth/logout');
    return data;
  },

  async refreshUser(sid, refreshToken) {
    // рефреш юзер
    const { data } = await axios({
      data: { sid },
      headers: { Authorization: refreshToken },
      method: 'post',
      url: `/auth/refresh`,
    });
    return data;
  },
};

export const DailyApi = {
  // інфа про незареєстрованого юзера
  async getDailyRateInfo(userInfo) {
    const { data } = await axios.post('/daily-rate', userInfo);
    return data;
  },

  async getDailyRateInfoBasedOnId(userInfo) {
    const { data } = await axios.post(
      `/daily-rate/${userInfo.userId}`,
      omit(userInfo, ['userId'])
    );
    return data;
  },
};

export const ProductApi = {
  async productSearch(search) {
    const { data } = await axios.get('/product/', { params: { search } });
    return data;
  },
};

// export const DayApi = {
//   async productSearch(productInfo) {
//     const { data } = await axios.get('/day', productInfo);
//     return data;
//   },

//   async deleteProduct(productInfo) {
//     const { data } = await axios.delete('/day', productInfo);
//     return data;
//   },

//   async getDayInfo(dateInfo) {
//     const { data } = await axios.post('/day/info', dateInfo);
//     return data;
//   },
// };

// Search and get a list of products by query
export async function productSearch(search) {
  const { data } = await axios.get('/product/', { params: { search } });
  return data;
}
// Post an eaten product
export async function addProduct(productInfo) {
  const { data } = await axios.post('/day', productInfo);
  return data;
}
// Delete eaten product
export async function deleteProduct(productData) {
  const { data } = await axios.delete('/day', {data:productData});
  return data;
}
// Get info for day
export async function getDayInfo(date) {
  const { data } = await axios.post('/day/info', {date});
  return data;
}

export const UserApi = {
  async getUserInfo() {
    const { data } = await axios.get('/user');
    return data;
  },
};
// 640637c11fbd81052541e3d9

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return token;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};
