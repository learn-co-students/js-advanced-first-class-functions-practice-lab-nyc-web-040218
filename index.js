
function nameLogger(objs) {
  objs.forEach( function (obj) {console.log(obj.name)} )
}

function logDriverNames(drivers) {
  nameLogger(drivers);
}

function logDriversByHometown(drivers, location) {
  filtered = drivers.filter( function(driver) {return location === driver.hometown ? true : false} );

  nameLogger(filtered);
}

function driversByRevenue(drivers) {
  let arr = [...drivers]
  arr.sort(function (a, b) { return a.revenue - b.revenue });
  return arr;
}

function driversByName(drivers) {
  let arr = [...drivers]
  arr.sort(function (a, b) { return a.name.localeCompare(b.name) });
  return arr;
}

function reduceByRevenue(drivers) {
  return drivers.reduce( function (agg, driver) { return agg.revenue ? agg.revenue + driver.revenue : agg + driver.revenue } );
}

function totalRevenue(drivers) {
  return reduceByRevenue(drivers);
}

function averageRevenue(drivers) {
  let total = reduceByRevenue(drivers);

  return total/drivers.length;
}
