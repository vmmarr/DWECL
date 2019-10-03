var f = new Date();

var h = f.getHours();

if (h >= 6 && h < 12) {
    alert('Buenos Dias');
} else if (h >= 12 && h < 20) {
    alert('Buenas Tardes');
} else {
    alert('Buenas Noches');
}
