
function PDF() {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');
    
    // Output as Data URI
    var string = doc.output('datauri');

    var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
    
    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();
}

