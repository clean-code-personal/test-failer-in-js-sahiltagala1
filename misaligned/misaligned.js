function print_color(i, j, majorColors, minorColors){
    console.log(`${i * 5 + j} | majorColors | minorColors`);
}

function print_color_map() {
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      print_color(i, j, majorColors[i], minorColors[j]);
    }
  }
  return majorColors.length * minorColors.length;
}

module.exports = new func_print();
function func_print(){
    return{
        print_color_map:print_color_map
    }
}
