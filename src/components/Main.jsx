import { useState } from "react";

export default function Main() {
  const [items, setItems] = useState(["banana", "orange", "water melon"]);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center pt-20 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 bg-white p-6 rounded-xl shadow-md"
      >
        <input
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-60"
          name="ingredient"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded-lg font-semibold"
        >
          + Add Ingredient
        </button>
      </form>

      <ul className="mr-50 list-disc mt-6 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
