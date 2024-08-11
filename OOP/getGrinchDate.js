const originalGetDate = Date.prototype.getDate;

Date.prototype.getDate = function getGrinchDate() {
  if (originalGetDate.call(this) == "25" && this.getMonth() == "11") {
    return 26;
  }
  return originalGetDate.call(this);
};
