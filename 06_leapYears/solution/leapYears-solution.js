const leapYears = function (year) {
  return year % 4 && (year % 100 !== 0 || year % 400 === 0);
};

module.exports = leapYears;
