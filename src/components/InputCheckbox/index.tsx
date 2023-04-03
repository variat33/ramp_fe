import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange  }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

    // console.log("checked prop value:", checked);
    // console.log("disabled prop value:", disabled);
    // Added closing label tag after the <input> to ensure correct HTML structure and resolve issue with missing checkbox styling
    // for bug 7: modified the onChange function to receive the event object
    // and access the current state of the checkbox using the event.target.checked property

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>

      <label
          className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,

        })}
      >
      <input
          id={inputId}
          type="checkbox"
          className="RampInputCheckbox--input"
          checked={checked}
          disabled={disabled}
          onChange={(e) => {
              onChange(e.target.checked);
        }}
      />
      </label>
    </div>

  )
}
