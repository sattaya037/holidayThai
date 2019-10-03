
function PDF() {

    var doc = new jsPDF();
    doc.setTextColor(0, 0, 128)
    doc.setFontStyle('italic')
    doc.setFontType('bolditalic')
    doc.text(80, 60, 'Leave Request Form');

    doc.setTextColor(0, 0, 0)
    doc.setFont('Calibri')
    doc.setFontType('bolditalic')
    doc.setFontSize(10)
    doc.text(148, 73, 'Date');
    doc.text(26, 86, 'Employee Name:');
    doc.text(132, 86, 'Team:');

    var head = [["Type of Request Leave", "First Date", "Final Date", "Total Leave","Remark"]];
    var body = [
        [1, "Denmark", 7.526, "Copenhagen"],
        [2, "Switzerland", 	7.509, "Bern"],
        [3, "Iceland", 7.501, "Reykjavík"]
    ];
    doc.autoTable({head: head, body: body,startY: 96});
    // doc.table(26, 96, head, body)
    // Simple html example
    // Output as Data URI
    var string = doc.output('datauri');
    document.getElementById("image").src=string+"#toolbar=0"; 
}

