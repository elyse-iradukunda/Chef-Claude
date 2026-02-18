import { useState } from "react";

export default function Main() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return; 
    setItems([...items, inputValue]);
    setInputValue("");
  }

  return (
    <main className="flex flex-col items-center  pt-20 bg-gray-50 px-4">
  
      <form
        onSubmit={handleSubmit}
        className="flex bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <input
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-orange-200"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black  text-white px-5 py-2 rounded-lg font-semibold transition-colors"
        >
          + Add Ingredient
        </button>
      </form>

       
      {items.length > 0 && (
        <section className="w-full max-w-2xl mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ingredients on hand:</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
            {items.map((item, index) => (
              <li key={index} className="capitalize">{item}</li>
            ))}
          </ul>

          {items.length >= 4 && (
            <div className="mt-12 mb-20 bg-[#f4f2ed] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between shadow-sm border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Ready for a recipe?
                </h3>
                <p className="text-gray-500">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>

              <button 
                className="bg-red-600 text-white font-medium px-8 py-3 rounded-xl text-lg transition-colors whitespace-nowrap shadow-md"
                onClick={() => console.log("Generating recipe for:", items)}
              >
                Get a recipe
              </button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}