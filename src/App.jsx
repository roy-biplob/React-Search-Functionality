
import './App.css'
import SearchComponent from './assets/componect/SearchComponent';

function App() {
  const students = [
    {
      name: 'Alice Johnson',
      roll: 1,
      reg: '2021001',
      paid: true,
      father:"NIP"
    },
    {
      name: 'Bob Smith',
      roll: 2,
      reg: '2021002',
      paid: false,
       father:"NIP"
    },
    {
      name: 'Charlie Brown',
      roll: 3,
      reg: '2021003',
      paid: true,
       father:"NIP"
    },
    {
      name: 'David Wilson',
      roll: 4,
      reg: '2021004',
      paid: false,
       father:"NIP"
    },
    {
      name: 'Eve Davis',
      roll: 5,
      reg: '2021005',
      paid: true,
       father:"T"
    },
  ];
  

  return (
    <>
      <div>
        <h1>Search Example</h1>
        <SearchComponent data={students} />
      </div>
    </>
  )
}

export default App
