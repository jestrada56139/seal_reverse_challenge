function reverseString() {
    var originalString = document.getElementById("reverse").value;
    var reversed = [];
    for (var i = originalString.length - 1; i >= 0; i--) {
        reversed += originalString[i];
    }
    console.log(reversed);
}