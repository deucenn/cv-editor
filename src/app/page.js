import NavBar from "./components/Navbar";
import Input from "./components/Input";
import Preview from "./components/Preview";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2">
        <Input />
        <Preview />
      </div>
    </>
  );
}
