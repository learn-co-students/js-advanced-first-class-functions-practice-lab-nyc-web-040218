// Code your solution in this file!


function logDriverNames(collection) {
  collection.forEach(callback)
}

function callback(driver) {
    console.log(driver.name);
  }

function logDriversByHometown(collection, hometown) {
  collection.forEach(function(driver){
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  });
}

function driversByRevenue(collection){
  const newSort = [...collection];
  newSort.sort(function(driver, driver2){
    return driver.revenue - driver2.revenue
  });
  return newSort;
}

function driversByName(collection){
  const newSort = [...collection];
  newSort.sort(function(driver, driver2){
    return driver.name > driver2.name;
  });
  return newSort;
}

function totalRevenue(collection){
  return collection.reduce((accumulator, driver) => {
    return accumulator + driver.revenue;
  } ,0);
}

function averageRevenue(collection){
  return totalRevenue(collection) / collection.length;
}
