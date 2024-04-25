export type UserType = {
    id:number,
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    dateCreated:string
}

export type UserFormDataType = {
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    password:string,
    confirmPassword:string
}

export type IngredientsType = {
    ingredient:string,
    quantity:string
}

export type RecipeFormDataType = {
    name:string,
    description:string,
    cuisine:string,
    cookTime: string,
    servings: string,
    instructions:string
}

export type TokenType = {
    token:string,
    tokenExpiration:string
}