function index(i, j){
  return (i*5+j+1).toString().padEnd(2);
}

function print_color_map() {
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      console.log(`${index(i,j)} | ${majorColors[i].padEnd(6)} | ${minorColors[j]}`);
    }
  }
  return majorColors.length * minorColors.length;
}

module.exports = {print_color_map, index};
