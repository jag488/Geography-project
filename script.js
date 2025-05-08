// Centered on the Americas
const map = L.map('map').setView([15, -75], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Extra country info for the Americas
const extraCountryInfo = {
  "United States": {
    independence: "1776",
    government: "Federal presidential constitutional republic",
    topCities: ["New York City", "Los Angeles", "Chicago"]
  },
  "Canada": {
    independence: "1867",
    government: "Federal parliamentary constitutional monarchy",
    topCities: ["Toronto", "Montreal", "Vancouver"]
  },
  "Colombia": {
  independence: "1810",
  government: "Presidential republic",
  topCities: ["Bogotá", "Medellín", "Cali"]
},
  "Mexico": {
    independence: "1810",
    government: "Federal presidential constitutional republic",
    topCities: ["Mexico City", "Guadalajara", "Monterrey"]
  },
  "Brazil": {
    independence: "1822",
    government: "Federal presidential constitutional republic",
    topCities: ["São Paulo", "Rio de Janeiro", "Brasília"]
  },
  "Argentina": {
    independence: "1816",
    government: "Federal presidential constitutional republic",
    topCities: ["Buenos Aires", "Córdoba", "Rosario"]
  },
  "Colombia": {
    independence: "1810",
    government: "Presidential republic",
    topCities: ["Bogotá", "Medellín", "Cali"]
  },
  "Chile": {
    independence: "1818",
    government: "Presidential republic",
    topCities: ["Santiago", "Valparaíso", "Concepción"]
  },
  "Peru": {
    independence: "1821",
    government: "Presidential republic",
    topCities: ["Lima", "Arequipa", "Trujillo"]
  },
  "Venezuela": {
    independence: "1811",
    government: "Federal presidential republic",
    topCities: ["Caracas", "Maracaibo", "Valencia"]
  },
  "Ecuador": {
    independence: "1822",
    government: "Presidential republic",
    topCities: ["Quito", "Guayaquil", "Cuenca"]
  },
  "Bolivia": {
    independence: "1825",
    government: "Presidential republic",
    topCities: ["La Paz", "Santa Cruz", "Cochabamba"]
  },
  "Panama": {
    independence: "1903",
    government: "Presidential republic",
    topCities: ["Panama City", "San Miguelito", "Colón"]
  },
  "Guatemala": {
    independence: "1821",
    government: "Presidential republic",
    topCities: ["Guatemala City", "Mixco", "Villa Nueva"]
  },
  "Costa Rica": {
    independence: "1821",
    government: "Presidential republic",
    topCities: ["San José", "Limón", "Alajuela"]
  },
  "El Salvador": {
    independence: "1821",
    government: "Presidential republic",
    topCities: ["San Salvador", "Santa Ana", "Soyapango"]
  },
  "Honduras": {
    independence: "1821",
    government: "Presidential republic",
    topCities: ["Tegucigalpa", "San Pedro Sula", "Choloma"]
  },
  "Nicaragua": {
    independence: "1821",
    government: "Presidential republic",
    topCities: ["Managua", "León", "Masaya"]
  }
};

// Fetch country info and display it
async function getCountryInfo(countryName) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await res.json();
    const country = data[0];

    document.getElementById("country-info").innerHTML = `
      <h2>${country.name.common}</h2>
      <img src="${country.flags.svg}" width="100" />
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
    `;

    const extra = extraCountryInfo[country.name.common];
    if (extra) {
      document.getElementById("country-info").innerHTML += `
        <p><strong>Independence:</strong> ${extra.independence}</p>
        <p><strong>Government:</strong> ${extra.government}</p>
        <p><strong>Top Cities:</strong><br>
          1. ${extra.topCities[0]}<br>
          2. ${extra.topCities[1]}<br>
          3. ${extra.topCities[2]}
        </p>
      `;
    }
  } catch (error) {
    document.getElementById("country-info").innerHTML = `<p>Country not found. Try typing the full name.</p>`;
    console.error(error);
  }
}

// Search box interaction
function searchCountry() {
  const input = document.getElementById("search-box").value;
  if (input.trim() !== "") {
    getCountryInfo(input.trim());
  }
}

// developed in part using chat gpt
