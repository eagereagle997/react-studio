// TODO: create a component that displays a single bakery item

export function BakeryItem(props) {

    const item = props.item;
    const cart = props.cart;
    const handleCart = props.handleCart;
    var cartTotal = props.cartTotal;
    const handleTotal = props.setTotal;

    const bakeItemATC = () => {
        handleCart([...cart, item]);
        handleTotal(cartTotal += item.price);
        console.log(cart);
    }

    

    return (
        <div className = "BakeryItem">
            <img src = {item.image}></img>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>

            <button onClick={bakeItemATC}>Click Me!</button>
        </div>
    );

    // () => bakeItemATC()
}
