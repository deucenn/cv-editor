import NavBar from "./components/Navbar";
import Input from "./components/Input";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2">
        <Input />
        <p>Bye</p>
      </div>
    </>
  );
}
