    import React from 'react'
    import DeleteIcon from '@material-ui/icons/Delete';
    import Button from '@material-ui/core/Button';
    
    function Cart({ cart, setCart}) {

        const getTotalSum = () => {
            return cart.reduce(
                (sum, { cost, quantity}) => sum + cost * quantity, 
                0
            );
        }

        const clearCart = () => {
            setCart([]);
        }

        const setQuantity = (product, amount) => {
            const newCart = [...cart];
            newCart.find(
              (item) => item.name === product.name
            ).quantity = amount;
            setCart(newCart);
          };
        
          const removeFromCart = (productToRemove) => {
            setCart(
              cart.filter((product) => product !== productToRemove)
            );
          };
        
          return (
            <>
              <h1 style = {{color: "rgb(230, 7, 155)"}}>Cart</h1>
              {cart.length > 0 && (
                <Button variant="contained" color="secondary"  startIcon={<DeleteIcon />} onClick={clearCart} >
                    Clear Cart
                </Button>
              )}
              <div className="products">
                {cart.map((product, idx) => (
                  <div className="product" key={idx}>
                    <h3>{product.name}</h3>
                    <h4>${product.cost}</h4>
                    <div>
                    <input
                      value={product.quantity}
                      onChange={(e) =>
                        setQuantity(
                          product,
                          parseInt(e.target.value)
                        )
                      }
                    />
                    </div>
                    <img src={product.image} alt={product.name} />
                    <div>
                    <Button variant="contained" color="secondary"  startIcon={<DeleteIcon />} onClick={() => removeFromCart(product)} >
                    Remove
                    </Button>
                    </div>
                  </div>
                ))}
              </div>
        
              <div>Total Cost: ${getTotalSum()}</div>
            </>
          );
        }
    
    export default Cart
    