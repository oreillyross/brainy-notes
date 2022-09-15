import { useAppDispatch, useAppSelector } from "app/hooks";
import { incremented, amountAdded } from "./counter-slice";
import { useFetchBreedsQuery } from "../../../Z_ARCHIVE/dogs/dogs-api-slice";

export default function () {
  
	
  const dispatch = useAppDispatch();

  useFetchBreedsQuery();

  function increment() {
    dispatch(amountAdded(3));
  }

  const { data = [], isFetching } = useFetchBreedsQuery();

  return (
    <div className="max-w-auto text-center">
      <div>Number of dogs fetched: {data.length}</div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((breed) => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>
                <img src={breed.image.url} alt={breed.name} height={250} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={increment}
        className="hover:bg-slate-600 rounded border-x-2 p-4 bg-slate-800 text-slate-100"
      >
      </button>
    </div>
  );
}
