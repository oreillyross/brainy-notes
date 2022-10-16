import { Link, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useContext } from "react";

interface Props {
  items: { name: string; link: string }[];
}
function Navigation({ items }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row md:text-2xl mx-auto max-w-sm">
      {items.map((item) => (
        <a key={item.name} className="text-center text-lg p-2 hover:text-green-900 hover:underline underline-offset-8 ">
          <Link to={item.link}>{item.name}
</Link>        </a>
      ))}
    </div>
  );
}

export default Navigation;
