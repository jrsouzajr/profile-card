import { Field, FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import type { TextInputFieldInterface } from "./text-input-field.types";

const TextInputField = ({textTitle, id, handleEventChange, inputValue, messageError, placeholder, isValidData}: TextInputFieldInterface) => {

    return(
        <div>
            <FieldLabel htmlFor={id}>{textTitle}</FieldLabel>
            <Field className="gap-1" data-invalid={!isValidData}>
                <Input
                  id={id}
                  type="text"
                  value={inputValue}
                  onChange={handleEventChange}
                  placeholder={placeholder}
                />
              </Field>
              {messageError ? 
              <FieldError>
                {messageError}
            </FieldError>
                :
                ""
                }
        </div>
    )
}

export default TextInputField