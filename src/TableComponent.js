import * as React from 'react';
const TableComponent = (props) => {
const rows = [
    { id: 1,
      name: 'olive processing plant',
      hazard:'red'
    },
    { id: 2,
        name: 'gas supply plant',
        hazard:'red'
      },
      { id: 3,
        name: 'energy storage',
        hazard:'yellow'
      },
      { id: 4,
        name: 'biomass boilers',
        hazard:'green'
      }
]
 //searchbar
 const [searchQuery, setSearchQuery] = React.useState('');

 const filterData = (query, data) => {
  if (!query) {
    return data;
  }
  const filteredArray = data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
  return filteredArray;
};

const filteredData = filterData(searchQuery, props.assets);

const getHazardLevel = (hazard) => {
  if (hazard === 'red') {
    return (
      <img alt="redDot" src='/redDot.png'/>
    );
  } else if (hazard === 'yellow') {
    return (
      <img alt="orangeDot" src='/orangeDot.png'/>
    );
  } else {
    return (
      <img alt="greenDot" src='/greenDot.png'/>
    );
  }

 

 
};



//sort column TODO after retrieving data
const [sortedField, setSortedField] = React.useState(null);
 const [order, setOrder] = React.useState('asc');

const sortColumn = () => {
const orderLogic = { red: 1, yellow: 2, green: 3 };
if (order === 'asc') {
  const filteredAsc = filteredData.sort((a,b) => { return orderLogic[a.hazard] - order[b.hazard]})
} else if (order === 'desc') {
  // TODO
  };
}

    return (
        <>
        <form class="d-flex">
        <input 
        class="form-control me-1" 
        type="search"
        placeholder="Search" 
        aria-label="Search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        />
        <button class="btn btn-outline-primary" type="submit">
        <img src="/search.svg" alt="search icon" width="22" height="22" />
        </button>
        </form>
        <div class="table-responsive">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Asset Name</th>
      <th scope="col">
        Combined
        {/* <i class="bi bi-sort-up" onClick={ () => {
          setOrder('desc');
          sortColumn(order)}} /> */}
        </th>
      <th scope="col">Extreme Temperatures</th>
      <th scope="col">Drought</th>
      <th scope="col">Wildfires</th>
      <th scope="col">Extreme precipitation</th>
      <th scope="col">Fluvial flooding</th>
      <th scope="col">Coastal flooding</th>
    </tr>
  </thead>
  <tbody>
    { filteredData.map((row) => {
        return (
            <>
            <tr>
              {/* TODO call map after retrieving data from firebase */}
            <th scope="row">{row.name}</th>
               {/* now asset.name */}
            <td>{getHazardLevel(row.hazard)}</td>
            <td>{getHazardLevel(row.hazard)}</td>
            <td>{getHazardLevel(row.hazard)}</td>
            <td>{getHazardLevel(row.hazard)}</td>
            <td>{getHazardLevel(row.hazard)}</td>
            <td>{getHazardLevel(row.hazard)}</td>
            <td>{getHazardLevel(row.hazard)}</td>
            </tr>
            </>
        )
    })}
  </tbody>
</table>
      </div>
      </>
    )
}
export default TableComponent;
