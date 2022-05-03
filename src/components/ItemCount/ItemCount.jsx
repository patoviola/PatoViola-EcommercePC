import React from 'react'
import { useState } from 'react'

const itemCount = () => {

    const [stock, setStock] = useState(0)

    function suma(){
        stock < 8 ? setStock(stock + 1) : setStock(stock)
    }
    function resta(){
        stock > 0 ? setStock(stock - 1) : setStock(stock)
    }

  return (
    <div className='d-grid gap-2 col-6 mx-auto'>
        <p className="text-black text-center fs-5">
        <i onClick={resta}className="bi bi-dash-circle m-4"></i>Cantidad:
        {stock}
        <i onClick={suma}className="bi bi bi-plus-circle m-4"></i>
        </p>
    <button type="button" class="btn btn-primary">Añadir al Carrito</button>
    </div>
  )
}

export default itemCount