export default function Stats({ items }) {
  let numItems = items.length;
  let numPacked = items.filter((item) => item.packed).length;
  let percentagePacked = Math.round((numPacked / numItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percentagePacked === 100
            ? ` You have everything you need, LET'S GO  ✈️ `
            : items.length > 0
            ? `You have ${numItems} on your list and you have already packed ${percentagePacked}%`
            : `Start Packing `}
        </em>
      </footer>
    </>
  );
}
