import { Card } from "antd";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={product.title} src={product.image} />}
    >
      <Meta
        title={product.title}
        description={`$${product.price}`}
      />
    </Card>
  );
};

export default ProductCard;