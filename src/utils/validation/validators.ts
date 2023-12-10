
export const required = (value: string) => {
    if(!value){
        return 'Field is required'
    } else {
        return undefined
    }
}

export const maxLengthCreator = (maxLength: any) => (value: any) => {
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined
}