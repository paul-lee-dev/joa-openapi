import axios, { AxiosInstance } from "axios";

const baseURL: string = "https://joa13.site/v1";
const testAdmin: string = "c11599f2-4fe1-42df-aa9a-ef378b0b8e3f";
const testMember: string = "90240424-7a53-460c-8d4e-f786eda65fbb";

export const useAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    adminId: testAdmin,
    "Content-Type": "application/json",
  },
  timeout: 10000
})

export const getAxios =  async ( url: string, params?: any )  => {
  try {
    const response = await useAxios.get( url, { params } )
    return response?.data
  } catch( error ){
    return Promise.reject(error)
  }
} 

export const postAxios =  async( url: string, params?: any )  =>{
  try{
    const response = await useAxios.post( url, params )
    console.log(response)
    return response
  } catch( error ){
    return Promise.reject( error )
  }
}

export const deleteAxios = async( url: string, params?: any ) => {
  try{
    const response = await useAxios.delete( url, { params } )
    return response
  } catch( error ){
    return Promise.reject( error )
  }
}

export const patchAxios = async(url: string, params?: any ) =>{
  try{
    const response = await useAxios.patch( url, params )
    console.log(response)
    return response
  } catch( error ){
    return Promise.reject( error )
  }
}

