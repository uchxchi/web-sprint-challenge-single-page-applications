import React from "react";



function Pizza (props) {
  const {
    formValues,
    formErrors,
    submit,
    change,
    disabled
  } = props

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
        
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()

    }
    return(
        <div>
            <form onSubmit={onSubmit} id="pizza-form">

                  <div>
                <div>{formErrors.text}</div>
                <div>{formErrors.size}</div>
                </div>
              
                <div>
                     <label>
                     <input
                name="text"
                type="text"
                id="name-input"
                value={formValues.text}
                onChange={onChange}
                placeholder="enter name"
                 />
                </label>
                </div>
               
                <label>
                    <select
                     name="size" 
                     id="size-dropdown"
                     value={formValues.size}
                     onChange={onChange}
                     >
                        <option value=''>---Select Pizza Size---</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>

                <div>
                    <h3>Toppings</h3>
                    <label> Pepperoni
                    <input
                    name="pepperoni"
                    type="checkbox"
                    checked={formValues.pepperoni}
                    onChange={onChange}

                    />
                </label>

                <label>  Sausage
                    <input
                    name="sausage"
                    type="checkbox"
                    checked={formValues.sausage}
                    onChange={onChange}

                    />
                </label>

                <label> Extra cheese
                    <input
                    name="cheese"
                    type="checkbox"
                    checked={formValues.cheese}
                    onChange={onChange}

                    />
                </label> 

                <label> Mushroom
                    <input
                    name="mushroom"
                    type="checkbox"
                    checked={formValues.mushroom}
                    onChange={onChange}

                    />
                </label>

                  
                </div>

               <label>
                     <input
                     name="special"
                     type="text"
                     id="special-text"
                     value={formValues.special}
                     onChange={onChange}

                     placeholder="special intsructions"
                 />
                </label>
                

                <button disabled={disabled} id="order-button">Order</button>

               
            </form>
        </div>
    )
}

export default Pizza