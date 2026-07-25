export interface TextInputFieldInterface {
    textTitle?: string,
    id: string,
    inputValue?: string,
    handleEventChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    messageError?: string,
    isValidData: boolean
}