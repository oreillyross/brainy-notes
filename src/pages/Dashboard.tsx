export default function Dashboard() {

  async function handleSignOut() {}

  return (
    <div>
      <h1>Welcome logged in friend</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
