import { Button, Input} from '@mui/material'
import React, { useState } from 'react'



export const Form = () => {

    const [values, setValues] = useState({
        name: "",
        lastname: "",
        phone: "" ,
        email: "",
        address: "",
        obs: "",
    })
    const handleInputChange = (e) =>{
        console.log(e.target.name)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(values)
    }
    
    
    
    
    return (
        <form onSubmit={handleSubmit}>
            
            <Input
                onChange={handleInputChange}
                name="name"
                value={values.name}
                type="text"
                placeholder="Nombre"
            />
            <Input
                onChange={handleInputChange}
                name="lastname"
                value={values.lastname}
                type="text"
                placeholder="Apellido"
            />

            <Input
                onChange={handleInputChange}
                name="phone"
                value={values.phone}
                type="phone"
                placeholder="Telefono"
            />

            <Input
                onChange={handleInputChange}
                name="email"
                value={values.email}
                type="email"
                placeholder="email"
            />

            <Input
                onChange={handleInputChange}
                name="address"
                value={values.address}
                type="text"
                placeholder="Dirección de envío"
            />
            <Input
                onChange={handleInputChange}
                name="obs"
                value={values.obs}
                type="text"
                placeholder="Observaciones"
            />

            <Button type="submit" variant="contained">Enviar</Button>

        </form>
    )
}
