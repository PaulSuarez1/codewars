function isNice(arr) {
    var nice = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {

            nice = true;
        } else if (arr.length === 0) {
            return false;
        } else {
            return false;
        }
    }
    return nice;
}