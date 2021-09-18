import Item from './Item';

function ItemList ({ products }) {
    if (!products) {
        return (<img src="../images/spinning-loading.gif"></img>
        )
    }

    return (
        products.map (prod => <Item key={prod.id} prod={prod} />)
    )
}

export default ItemList;