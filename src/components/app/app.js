import { Component, lazy, Suspense } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import aromistico from "../../assets/img/aromistico.png";
import solimo from "../../assets/img/solimo.png";
import presto from "../../assets/img/presto.png";

import "./app.scss";

const CoffeeHouse = lazy(() => import('../coffee-house/coffee-house'));
const OurCoffee = lazy(() => import('../our-coffee/our-coffee'));
const Pleasure = lazy(() => import('../pleasure/pleasure'));
const Divider = lazy(() => import('../divider/divider'));
const CoffeeItemAbout = lazy(() => import('../coffee-item-about/coffee-item-about'));

const data = [
  {
    name: "AROMISTICO Coffee 1 kg",
    region: "Brazil",
    price: "6.99$",
    img: aromistico,
    id: 1
  },
  {
    name: "AROMISTICO Coffee 1 kg",
    region: "Kenya",
    price: "6.99$",
    img: aromistico,
    id: 2
  },
  {
    name: "AROMISTICO Coffee 1 kg",
    region: "Columbia",
    price: "6.99$",
    img: aromistico,
    id: 3
  },
  {
    name: "AROMISTICO Coffee 1 kg",
    region: "Brazil",
    price: "6.99$",
    img: aromistico,
    id: 4
  },
  {
    name: "AROMISTICO Coffee 1 kg",
    region: "Brazil",
    price: "6.99$",
    img: aromistico,
    id: 5
  },
  {
    name: "AROMISTICO Coffee 1 kg",
    region: "Brazil",
    price: "6.99$",
    img: aromistico,
    id: 6
  },
];

const best = [
  {
    name: "Solimo Coffee Beans 2 kg",
    price: "10.73$",
    img: solimo,
    id: 1,
  },
  {
    name: "Presto Coffee Beans 1 kg",
    price: "15.99$",
    img: presto,
    id: 2,
  },
  {
    name: "AROMISTICO Coffee 1 kg",
    price: "6.99$",
    img: aromistico,
    id: 3,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      term: "",
      data,
      best
    };
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  filterPanel = (term) => {
    this.setState({ term });
  };

  changeRegion = (items, filter) => {
    switch (filter) {
      case "Brazil":
        return items.filter((item) => item.region === "Brazil");
      case "Kenya":
        return items.filter((item) => item.region === "Kenya");
      case "Columbia":
        return items.filter((item) => item.region === "Columbia");
      default:
        return items;
    }
  };

  onFilter = (filter) => {
    this.setState({ filter }); // краткая запись filter: filter
  };

  render() {
    const { data, filter, term, best } = this.state;
    const visibleData = this.changeRegion(this.searchEmp(data, term), filter);

    return (
      <>
        {/* <CoffeeHouse bestData={best} /> */}
        {/* <OurCoffee changeRegion={this.changeRegion} filterPanel={this.filterPanel} onFilter={this.onFilter} changePage={this.changePage} data={visibleData} filter={filter}/>; */}
        {/* <Pleasure changeRegion={this.changeRegion} filterPanel={this.filterPanel} onFilter={this.onFilter} changePage={this.changePage} data={visibleData} filter={filter}/>; */}
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            <Route path="/coffee-shop-project" element={<CoffeeHouse bestData={best} />} />
            <Route
              path="/coffee-shop-project/our-coffee"
              element={
                <OurCoffee
                  changeRegion={this.changeRegion}
                  filterPanel={this.filterPanel}
                  onFilter={this.onFilter}
                  data={visibleData}
                  filter={filter}
                />
              }
            />
            <Route
              path="/coffee-shop-project/pleasure"
              element={
                <Pleasure
                  changeRegion={this.changeRegion}
                  filterPanel={this.filterPanel}
                  onFilter={this.onFilter}
                  data={visibleData}
                  filter={filter}
                />
              }
            />
            <Route
            path="/coffee-shop-project/coffee-item-about/:id"
            element={<CoffeePage/>}
            />
          </Routes>
          <Divider/>
        </Suspense>
        
      </>
    );

    // switch(page) {
    //     case('main'):
    //         return <CoffeeHouse bestData={best} changePage={this.changePage}/>;
    //     case('our'):
    //         return <OurCoffee changeRegion={this.changeRegion} filterPanel={this.filterPanel} onFilter={this.onFilter} changePage={this.changePage} data={visibleData} filter={filter}/>;
    //     case('pleasure'):
    //         return <Pleasure changeRegion={this.changeRegion} filterPanel={this.filterPanel} onFilter={this.onFilter} changePage={this.changePage} data={visibleData} filter={filter}/>;
    //     default:
    //         return <CoffeeHouse bestData={best} changePage={this.changePage}/>;
    // }
  }
}

function CoffeePage() {
  const params = useParams(); // хук из реакт дома
  const filteredData = data.find(item => item.id === parseInt(params.id)); // поиск элемента массива с таким же id, как и в переменной params
  return <CoffeeItemAbout data={filteredData}/>
}

export default App;
