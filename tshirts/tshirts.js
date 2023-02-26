function size(cms) {
    if (cms < 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }
}

module.exports = new export_file_tshirt();
function export_file_tshirt(){
    return{
        size:size
    }
}
