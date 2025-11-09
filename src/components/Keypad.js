// Code Keypad Component Here

function Keypad() {
  return (
    <div>
      <label htmlFor="password">Enter Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={() => console.log("Entering password...")}
      />
    </div>
  );
}

export default Keypad;
