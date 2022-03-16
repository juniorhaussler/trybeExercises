const mapCities = () => {
  return cities.reduce((citiesWithRegion, currentCity) => {

      if (!citiesWithRegion[currentCity.region]) {
          citiesWithRegion[currentCity.region] = [];
      }

      const newState = states.find((state) => state.short === currentCity.state);

      const newObject = {
          city: currentCity.name,
          state: newState.name,
      }

      citiesWithRegion[currentCity.region].push(newObject);

      return citiesWithRegion;
  }, {});
}

console.log(mapCities());