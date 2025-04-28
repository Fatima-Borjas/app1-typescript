// Importamos React para poder usar JSX
import React from 'react';

// Definimos un tipo para las unidades de temperatura permitidas
type TemperatureUnit = 'Celsius' | 'Fahrenheit' | 'Kelvin';

// Declaramos un valor inicial de temperatura y su unidad
const initialTemperature = 25; // Puedes cambiar este valor a otro número si deseas
const initialUnit: TemperatureUnit = 'Celsius'; // Puedes cambiar la unidad a 'Fahrenheit' o 'Kelvin'

// Esta función recibe un valor y una unidad, y devuelve un arreglo con las tres conversiones
const convertTemperature = (value: number, unit: TemperatureUnit) => {
  // Declaramos variables para cada unidad
  let celsius: number;
  let fahrenheit: number;
  let kelvin: number;

  // Dependiendo de la unidad inicial, hacemos los cálculos usando las fórmulas correspondientes
  if (unit === 'Celsius') {
    celsius = value;
    fahrenheit = (value * 9) / 5 + 32; // Celsius a Fahrenheit
    kelvin = value + 273.15; // Celsius a Kelvin
  } else if (unit === 'Fahrenheit') {
    celsius = ((value - 32) * 5) / 9; // Fahrenheit a Celsius
    fahrenheit = value;
    kelvin = ((value - 32) * 5) / 9 + 273.15; // Fahrenheit a Kelvin
  } else {
    celsius = value - 273.15; // Kelvin a Celsius
    fahrenheit = ((value - 273.15) * 9) / 5 + 32; // Kelvin a Fahrenheit
    kelvin = value;
  }

  // Retornamos los resultados como un arreglo de objetos con etiquetas y valores
  return [
    { label: 'Celsius', value: celsius.toFixed(2) }, // Redondeamos a dos decimales
    { label: 'Fahrenheit', value: fahrenheit.toFixed(2) },
    { label: 'Kelvin', value: kelvin.toFixed(2) },
  ];
};

// Componente principal de la aplicación
const App: React.FC = () => {
  // Usamos la función para hacer las conversiones con los valores iniciales
  const conversions = convertTemperature(initialTemperature, initialUnit);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Conversor de Temperaturas</h1>

      {/* Mostramos el valor inicial y la unidad */}
      <p>Valor inicial: {initialTemperature}° {initialUnit}</p>

      <h2>Resultados:</h2>

      {/* Mostramos los resultados en una lista ordenada */}
      <ul>
        {conversions.map((conversion, index) => (
          <li key={index}>
            {conversion.label}: {conversion.value}°
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
