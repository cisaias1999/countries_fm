import { useEffect, useState } from "react";
import Input_form from "../Input/Input_form";
import Select from "../Select/Select";
import Country_card from "../Country_card/Country_card";

const Forms = () => {
  const continents = [
    {
      value: "Africa",
      label: "Africa",
      id: "1"
    },
    {
      value: "Americas",
      label: "Americas",
      id: "2"
    },
    {
      value: "Asia",
      label: "Asia",
      id: "3"
    },
    {
      value: "Europe",
      label: "Europe",
      id: "4"
    },
    {
      value: "Oceania",
      label: "Oceania",
      id: "5"
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const [imputRegion, setimputRegion] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleSelectedChange = (e) => {
    const imputRegion = e.target.value;
    setimputRegion(imputRegion);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Hubo un error al cargar el archivo.");
        }
        const data = await response.json();
        setJsonData(data);
        setFilteredData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Filtrar por región
    const filteredData = jsonData.filter((item) => item.region === imputRegion);
    setFilteredData(filteredData);
  }, [imputRegion]);

  useEffect(() => {
    // Filtrar por región
    const filteredData = jsonData.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredData(filteredData);
  }, [inputValue]);

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row justify-between w-full flex-wrap gap-[20px]">
          <Input_form handleInputChange={handleInputChange} value={inputValue} />
          <Select label="Filter by Region" options={continents} handleSelectChange={handleSelectedChange} />
        </div>
        <div className="w-full flex flex-wrap justify-center sm:justify-around lg:justify-between mt-[47px]">
          {filteredData.map((item) => (
            <Country_card key={item.area} nombre={item.name} bandera={item.flag} poblacion={item.population.toLocaleString()} capital={item.capital} region={item.region} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Forms;
