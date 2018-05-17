function logDriverNames(drivers) {
    for (const driver of drivers){
        console.log(driver.name);
    }
}

function logDriversByHometown(drivers, location) {
    for (const driver of drivers){
        if (driver.hometown === location){
            console.log(driver.name);
        }
    }
}

function driversByRevenue(drivers) {
    let newArray = drivers;
    newArray.sort(function (a,b){
        return a["revenue"] - b["revenue"];
    });
    return newArray;
}

function totalRevenue(drivers) {
    
}