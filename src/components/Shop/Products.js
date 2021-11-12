import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const productItems = [
    {
      itemId: Math.random().toString(30),
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      itemId: Math.random().toString(30),
      title: "Item 2",
      price: 9,
      description: "Second item on list",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map((item) => {
          return (
            <ProductItem
              itemId={item.itemId}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
