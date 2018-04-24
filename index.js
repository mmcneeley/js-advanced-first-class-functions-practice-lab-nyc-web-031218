// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function (drivers, town) {
  drivers.forEach(function (driver) {
    if (driver.hometown === town) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (drivers) {
  const copy = [...drivers]
  return sorted = copy.sort(function (a, b) {
    return a.revenue - b.revenue})
}

const driversByName = function (drivers) {
  const copy = [...drivers]
  return copy.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function (drivers) {
  totalPrice = 0
  drivers.forEach(function (driver) {
    totalPrice += driver.revenue
  })
  return totalPrice
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length
}
