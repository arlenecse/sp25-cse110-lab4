// Write a for loop
for(let car in statistics) {
  if(car.startsWith('r') || statistics[car] %2 == 1) {
    console.log(statistics[car]);
  }
}
