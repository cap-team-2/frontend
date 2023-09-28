// cart component 

export default function Cart({cartProducts}) {
    // console.log(session.id)
    // console.log(cartProducts)

  return (
    <div>
        <p>My Cart</p>
        {cartProducts ?
            cartProducts.map((productAdded, index) => {
                return (
                    <div key={productAdded.id + index} className="rounded-none border-black">
                        <img src={productAdded.image} alt={productAdded.name}/>
                        <p> Name: {productAdded.name}</p>
                        <p> Description: {productAdded.description}</p>
                        <p> Cost: {productAdded.cost}</p>
                        <p> Quantity: {productAdded.quantity}</p>
                        <p> Weight: {productAdded.weight} {productAdded.unit_measurement}</p>
                        <p> </p>
                    </div>
                )
            })
         : null}
    </div>
  )
}