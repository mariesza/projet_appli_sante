import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://fake-health-data-api.shrp.dev/",
    timeout: 3000,
    headers: {},
  });

async function getUser() {
  try {
    const response = await axios.get('/0b3a6122-7b14-4a01-9bea-e6e185dace07');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
