import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { incremented } from "features/counter/counter-slice";

function exampleThunkFunction(dispatch, getState) {
	const stateBefore = getState()
	console.log(`Counter before: ${stateBefore.counter}`);
	dispatch(incremented)
	const stateAfter = getState()
	console.log(`Counter after: ${stateAfter.counter}`);
}


export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const response = await fetch("user/abc");
      const data = await response.json();
      console.log(data);
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Hello from about</h1>
      <button
        className="border m-4 text-red-500 font-semibold p-4 "
        onClick={() => dispatch(exampleThunkFunction)}
      >
        Dispatch an Action
      </button>
    </div>
  );
}
