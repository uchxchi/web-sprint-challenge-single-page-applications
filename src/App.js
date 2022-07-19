import React, { useState, useEffect } from "react";
import Homepage from './homepage'
import Pizza from './pizza'
import schema from "./schema";
import * as yup from 'yup'
import './App.css'

import { Route, Switch, Link} from 'react-router-dom'
import axios from "axios";

const initialFormValues = {
    text: '',
    size: '',
    mushroom: false,
    cheese: false,
    sausage: false,
    pepperoni: false,
    special: '',
}
const initialFormError = {
    name: '',
    size: '',
    mushroom: false,
    cheese: false,
    sausage: false,
    pepperoni: false,
    special: '',
}
const initialDisabled = true


const App = () => {
    const [orderPizza, setOrderPizza] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormError)
    const [disabled, setDisabled] = useState(initialDisabled)

    const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
   }

   const newPizzaOrder = () => {
    axios.post('https://reqres.in/api/orders', orderPizza)
    .then(res => {
       setOrderPizza([...orderPizza, res.data])
      console.log(res.data)

    })
    .catch(err => {

    })
  }


    const change = (name, value) => {
      validate(name, value)
      setFormValues({...formValues, [name]: value})
  
    }

    const submit = () => {
      const newOrder = {
         text: formValues.text.trim(),
         size: formValues.size,
         toppings: ['pepperoni', 'sausage', 'cheese', 'mushroom'].filter(toppings => formValues[toppings] )
      }
       setOrderPizza([...orderPizza, newOrder])
      setFormValues(initialFormValues)
       newPizzaOrder(newOrder)
    }

    useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  

  return (
    <div >
      <header>
        <h1>Lambda Eats</h1>
         <nav id="order_pizza" >        
       <Link to='/'>Home</Link>
        <Link  to='/pizza'>Order pizza</Link>
          
      </nav>
      </header>
      
      {
        orderPizza.map((pizza, id) => {
          // console.log(pizza)
          return (
            <div key={id}>
              {pizza.text}
            </div>
          )

        })
      }

      <Switch >

        <Route path='/pizza'>
            <Pizza
            formValues={formValues}
            formErrors={formErrors}
            submit={submit}
            change={change}
            disabled={disabled}
             />  
        </Route>
            
        <Route>
          <Homepage path='/' /> 
        </Route>
      </Switch>
    </div>
    // <>
      // <h1>Lambda Eats</h1>
    //   <p>You can remove this code and create your own header</p>
    // </>
  );
};
export default App;
