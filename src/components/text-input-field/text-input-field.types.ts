export interface TextInputFieldInterface {
    textTitle?: string,
    id: string,
    name: string,
    inputValue?: string,
    handleEventChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    messageError?: string,
    isInvalidData: boolean
}