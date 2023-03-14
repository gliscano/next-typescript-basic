import Image from "next/image"


export const Navbar = () => {
  return (
    <div className="flex justify-between px-6 bg-gray-700 text-lg text-gray-50">
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        alt="icon App"
        width={64}
        height={64}
      />
      <div>Pokemon</div>
      <div>Favorites</div>
    </div>
  );
};