import axios from 'axios';

const QUERY_URL = 'https://jsonplaceholder.typicode.com';

class QueryService {
  constructor() {
    this.QUERY_URL = QUERY_URL;
  }

  getAllData(limit) {
    return axios.get(`${this.QUERY_URL}/todos/?_limit=${limit}`);
  }
}

export default new QueryService();
