// Code your solution in this file!

const callbackName = function (el, i, drivers) {
  console.log(el.name);
};

function logDriverNames(drivers) {
  drivers.forEach(callbackName);
};

function logDriversByHometown(drivers, location) {
  for (const el of drivers) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  }
};

// function driversByRevenue(drivers) {
//   return drivers.slice().sort((a, b) => a - b);
// };

const compare = function (a, b) {
  return a.revenue - b.revenue;
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(compare);
};

const compareNames = function (a, b) {
  return (a.name).localeCompare(b.name);
};

function driversByName(drivers) {
  return drivers.slice().sort(compareNames);
};

const reduceRevenue = function (total, driver, i, drivers) {
  return total + driver.revenue;
};

function totalRevenue(drivers) {
  return drivers.reduce(reduceRevenue, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
