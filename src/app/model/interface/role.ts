export interface IRole {
    insuranceCategoryId: number,
    categoryName: string
}

export interface IDesignation {
    designationId: number,
    designation: string
}

export interface APIResponseModel {
    message: string,
    result: boolean, 
    data: any
}