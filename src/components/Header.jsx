import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <img src={logo} alt="chef claude logo" className="w-20 h-20 object-contain" />
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Chef Claude
        </h1>
      </div>

    </header>
  );
}
