import React from "react";

export const Item = ({products}) => {
    return(
        <article key={products.id}>
              <h3>{products.desc}</h3>
              <p>Precio: ${products.price}</p>
        </article>

    )
}