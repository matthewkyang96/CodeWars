function incrementer(nums) {
  return nums.map((num, i) =>
    num + i + 1 > 9 ? Number((num + i + 1).toString().slice(-1)) : num + i + 1
  );
}
