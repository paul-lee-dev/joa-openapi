import axios, { AxiosInstance, AxiosError } from "axios";

const baseURL: string = "https://joa13.site/v1";
const testAdmin: string = "7354e642-9472-4dd5-8455-742503378beb";
const testMember: string = "7a5b903c-5fd6-4192-885d-6b8e4fd400e9";
const testApiKey: string = "a2e3e331-5e4c-4260-a7aa-53ff14844700";

export const useAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    adminId: testAdmin,
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

