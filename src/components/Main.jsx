export default function Main() {
  return (
    <main className="flex items-center justify-center pt-20 bg-gray-50">
      <form className="flex gap-3 bg-white  rounded-xl shadow-md">
        <input
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-100"
        />
        <button className="bg-black text-white px-5 py-2 rounded-lg font-semibold">
          + Add Ingredient
        </button>
      </form>
    </main>
  );
}
