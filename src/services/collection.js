import http from "../config/http";
import axios, { AxiosResponse, AxiosError, AxiosPromise } from 'axios';

// const apiUrl = "http://localhost:8090" // TODO: dev
const apiUrl = "https://api.kmonsterz.io" // TODO: dev

// 목록 조회
export const ntfList = () => {
  return http.post("/collection/list", {});
};

// 세부 정보 조회
export const ntfData = (nftId) => {
  return http.post(`/collection/${nftId}`, {});
};

// 회원가입
export const join = (data) => {
  return http.post("/auth/signup/employee", data);
};

// nft 재고 얼마나 남았는지...
export const getRemain = () => {

  const apiInstance = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    headers: {},
  });

  const getRemainUrl = apiUrl + '/collection/remain/all';
  return apiInstance.post(getRemainUrl, {});
}
