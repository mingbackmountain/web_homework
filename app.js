const work = [45, 46, 78, 87, 39, 93, 56];
const love = [32, 24, 62, 36, 63, 69, 96];
const wealth = [28, 82, 45, 54, 65, 56, 78];
const merchan = [44, 22, 41, 16, 61, 26, 42];
const tech = [98, 89, 99, 59, 95, 91, 19];
const edu = [15, 51, 14, 41, 55, 39, 23];
let randnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const output = document.getElementById("output").value;
const startnum = document.getElementById("inputGroup1").value;
const category = document.getElementById("inputGroup2").value;
const notnum = document.getElementById("inputGroup3").value;

function generateNumber(startnum, category, notnum) {
  let result = startnum;
  for (let i = 0; i < randnum.length; i++) {
    if (randnum[i] == notnum) {
      randnum.pop(randnum[i]);
    }
  }
  if (category == "Work") {
  } else if (category == "Love") {
  } else if (category == "Wealth") {
  } else if (category == "Merchandising") {
  } else if (category == "Technology") {
  } else if (category == "Education/Wiseness") {
  }
}
