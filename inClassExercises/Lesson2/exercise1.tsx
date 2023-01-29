import "./styles.css";

const products: string[] = ["Milk", "Bread", "Butter", "Yogurt"];

export default function App() {
  return (
    /* Instead of null write html list of checkboxes:
      • [ ] Milk
      • [ ] Bread
      • [ ] Butter
      • [ ] Yogurt
    */
    <ul>
      {products.map((string) => (
        <li>
          <label>{string}</label>
          <input type="checkbox" />
        </li>
      ))}
    </ul>
  );
}
