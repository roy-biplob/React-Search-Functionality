import { useState } from "react";
const SearchComponent = (students) => {
  const [query, setQuery] = useState('');

  const [filteredData, setFilteredData] = useState(students.data);
  console.log(filteredData)

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    const filtered = students.data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())

    );
     if(value==""){
      setFilteredData(students.data)
     }
     else{
      setFilteredData(filtered)
     }
 
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;