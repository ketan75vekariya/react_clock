function Clock() {
  let date = new Date();
  return (
    <div>
      <p>
        The time is {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default Clock;
