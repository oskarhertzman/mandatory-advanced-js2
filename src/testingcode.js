const items = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "10" },
  { name: "11" },
];




const App = () => {
  const result = movies.map((x,i) => {
      return i % 3 === 0 ? movies.slice(i, i+3) : null;
  }).filter(x => x != null);

  return (
    <div>
      {result.map((result, index) => {
        return (<section key={index}>
          {result.map(item => <span>{item.name}</span>)}
        </section>);
       })}
    </div>
  );
};
