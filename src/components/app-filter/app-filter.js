import "./app-filter.scss";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "Brazil", label: "Brazil" },
    { name: "Kenya", label: "Kenya" },
    { name: "Columbia", label: "Columbia" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const clazz = props.filter === name ? 'active' : '';
    return (
      <button
        className={`filter__click-button ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilter(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <>
      <div className="filter__click">
        <div className="filter__click-text">Or filter</div>
        {buttons}
        <div className="filter__reset" onClick={() => props.onFilter("")}>Reset filters</div>
      </div>
    </>
  );

};

export default AppFilter;
