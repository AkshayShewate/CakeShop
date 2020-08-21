    import React, {useState} from 'react'
    import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
    import IconButton from '@material-ui/core/IconButton';

    const CAKE = 'Cake';
    const BROWNIE = 'Brownie';

    
    function Products({ setCart, cart }) {

        const [products] = useState([
            {
              category: CAKE,
              name: 'Cake1',
              cost: '100.00',
              image: 'https://images.unsplash.com/photo-1546393009-ef37dc6dfd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
            },
            {
              category: BROWNIE,  
              name: 'Cake2',
              cost: '110.00',
              image: 'https://images.unsplash.com/photo-1566121652444-41d39986a87a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
            },
            {
              category: CAKE,
              name: 'Cake3',
              cost: '140.00',
              image: 'https://images.unsplash.com/photo-1546393009-ef37dc6dfd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
            },
            {
              category: BROWNIE,    
              name: 'Cake4',
              cost: '120.00',
              image: 'https://images.unsplash.com/photo-1549589237-9e70b6be4da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
      
            
            },
            {
              category: CAKE,  
              name: 'Browine1',
              cost: '150.00',
              image: 'https://images.unsplash.com/photo-1561741403-3f7c1f93d0a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
            },
            {
              category: BROWNIE,  
              name: 'Browine2',
              cost: '180.00',
              image: 'https://images.unsplash.com/photo-1558417468-0dbb3a9c5251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
            },
          ])

          
          const addToCart = (product) => {
            let newCart = [...cart];
            let itemInCart = newCart.find(
              (item) => product.name === item.name
            );
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              itemInCart = {
                ...product,
                quantity: 1,
              };
              newCart.push(itemInCart);
            }
            setCart(newCart);
          };
        
          const [category, setCategory] = useState(CAKE);
        
          const getProductsInCategory = () => {
            return products.filter(
              (product) => product.category === category
            );
          };
        
          return (
            <>
              <h1 style = {{color: "rgb(230, 7, 155)"}}>Products</h1>
              <h2 style = {{color: "rgb(230, 7, 155)"}}>Select a category  :</h2>
              <select className="custom-select" onChange={(e) => setCategory(e.target.value)} style = {{color: 'yellow', backgroundColor:"blue", width:"200px", height:"40px"}}  >
                <option value={CAKE}>{CAKE}</option>
                <option value={BROWNIE}>{BROWNIE}</option>
              </select>
              
              <div className="products">
                {getProductsInCategory().map((product, idx) => (
                  <div className="product" key={idx}>
                    <h3 style = {{color: "#ffeb3b"}}>{product.name}</h3>
                    <h4 style = {{color: "#ffeb3b"}}>${product.cost}</h4>
                    <img src={product.image} alt={product.name} />
                    <div>
                    <IconButton onClick={() => addToCart(product)} color="primary" aria-label="add to shopping cart">
                        Cart
                       <AddShoppingCartIcon />
                   </IconButton>
                   </div>
                  </div>
                ))}
              </div>
            </>
          );
        }
    
    export default Products
    