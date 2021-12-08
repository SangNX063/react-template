import { ENVS } from '@configs/Configs.env';
import createAxiosInstance from '@services/axios';
import { AxiosInstance } from 'axios';

class RpcHttpCoinServiceClient {
  http: AxiosInstance;
  constructor() {
    const url = ENVS.REACT_APP_VERSION;
    this.http = createAxiosInstance({ baseURL: url });
  }
  apiGetListPools() {
    return this.http.get('pdex/v3/listpools?pair=all');
  }
}

export default RpcHttpCoinServiceClient;
