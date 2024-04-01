export interface bankCreateParams {
name: string,
description: string,
uri?:string
}

export interface bankCreateResponse {
bankId: string,
adminId: string,
name: string,
description: string,
uri: string,
createdAt: string,
updatedAt: string,
}

export interface bankReadParams {

}

export interface bankReadResponse {

}

export interface bankUpdateParams {

}

export interface bankUpdateResponse {

}

export interface bankListParams {

}

export interface bankListResponse {

}

export interface bankDeleteParams {

}

export interface bankDeleteResponse {

}