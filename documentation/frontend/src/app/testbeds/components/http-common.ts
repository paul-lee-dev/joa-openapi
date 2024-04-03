import axios, { AxiosInstance, AxiosError } from "axios";

const baseURL: string = "https://joa13.site/v1";
const testMember: string = "2a9da790-02ef-4bbe-b4a5-8b9636465e51";
const testApiKey: string = "cde35c0d-726d-4b43-bff2-36e0258dd014";

export const useAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    memberId: testMember,
    apiKey: testApiKey,
    "Content-Type": "application/json",
  },
  timeout: 10000
})

export const getAxios = async (url: string, params?: any) => {
  try {
    const response = await useAxios.get(url, { params })
    console.log(response)
    return response
  }
  catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.message);
    }
    return Promise.reject(error)
  }
}

export const postAxios = async (url: string, params?: any) => {
  try {
    const response = await useAxios.post(url, params)
    console.log(response)
    return response
  }
  catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.message);
      throw new Error("request data 입력 값이 잘못되었습니다.");
    }
    return Promise.reject(error)
  }
}

export const deleteAxios = async (url: string, params?: any) => {
  try {
    // const response = await useAxios.delete( url, { params } )
    const response = await useAxios.delete(url, { data: params })
    console.log(response)
    return response
  }
  catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.message);
    }
    return Promise.reject(error)
  }
}

export const patchAxios = async (url: string, params?: any) => {
  try {
    const response = await useAxios.patch(url, params)
    console.log(response)
    return response
  }
  catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.message);
    }
    return Promise.reject(error)
  }
}

