import { Button } from "antd";
import { useStore } from "../useStore";

export default function Filter() {
  const setCategory = useStore((state) => state.setCategory);

  return (
    <div style={{ marginBottom: 20 }}>
      <Button onClick={() => setCategory("all")}>Все</Button>
      <Button onClick={() => setCategory("phones")}>Телефоны</Button>
      <Button onClick={() => setCategory("laptops")}>Ноутбуки</Button>
      <Button onClick={() => setCategory("accessories")}>Аксессуары</Button>
    </div>
  );
}