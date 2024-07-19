function ipToInt32(ip) {
  return ip.split(".").reduce((int, v) => {
    console.log(int);
    return int * 256 + +v;
  });
}
