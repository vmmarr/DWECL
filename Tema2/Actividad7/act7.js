var num = 0;
do {
    num = prompt('numero');
} while (num >= 1000 || num <= 0);
 
for (i = 0; i < num.length; i++) {
    alert(`El numero ${num} esta compuesto por ${num[i]}`);
}