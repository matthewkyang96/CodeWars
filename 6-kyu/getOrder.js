function getOrder(input) {
  const menuItems = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
  ];
  const itemCounts = [];
  let arr;

  for (let menuItem of menuItems) {
    arr = input.split(menuItem);
    itemCounts.push(arr.length - 1);
    arr = arr.filter((ele) => ele);
  }

  return menuItems
    .reduce((accum, curr, i) => {
      return (accum += (curr[0].toUpperCase() + curr.slice(1) + " ").repeat(
        itemCounts[i]
      ));
    }, "")
    .trim();
}
