export type UserFormDataType = {
    first_name: string,
    last_name:string,
    email:string,
    password: string,
    confirmPassword: string
}

export type UserType = {
    email: string
    first_name:string,
    last_name: string, 
    password: string,

}

export type TripFormDataType = {
    location: string,
    startDate: string,
    endDate: string,
}

export type POIFormDataType = {
    name: string,
    description:string
}