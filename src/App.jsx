import "antd/dist/reset.css";
import { Row, Col } from "antd";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";
import { useStore } from "./useStore";

function App() {
  const { products, selectedCategory } = useStore();

  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ padding: 20 }}>
      <h1>Product List</h1>

      <Filter />

      <Row gutter={[16, 16]}>
        {filtered.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;