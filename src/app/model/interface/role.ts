export interface IRole {
    insuranceCategoryId: number,
    categoryName: string
}

export interface IDesignation {
    propertTypeId: number,
    propertyType: string
}

export interface APIResponseModel {
    message: string,
    result: boolean, 
    data: any
}