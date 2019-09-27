
function PDF() {
    console.log("PDF");
    var pdf = new jsPDF();
    pdf.text(30, 30, 'Hello world!');
    pdf.save('hello_world.pdf');
}

