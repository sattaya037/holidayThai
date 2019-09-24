var ts = new Date();
var year = ts.getFullYear();
fetch('https://apigw1.bot.or.th/bot/public/financial-institutions-holidays/?year='+year, {
  headers: new Headers({
    accept: 'application/json',
    'x-ibm-client-id': '94b9f30c-e28b-48d4-b798-de3ef4528c43'
  })
})
.then(response => response.json())
.then(data => {
  var holiday =data.result.data
  drawTable(holiday);


})
.catch(error => console.error(error))

function drawTable(holiday) {
  var x;
  var no =0
  for (x of holiday) {
    var row = $("<tr />")
    no = no+1
    $("#personDataTable").append(row); 
    row.append($("<td class='cell100 column1'>" + no + "</td>"));
    row.append($("<td class='cell100 column2'>" + x.HolidayWeekDayThai + "</td>"));
    row.append($("<td class='cell100 column3'>" + x.DateThai + "</td>"));
    row.append($("<td class='cell100 column4'>" + x.HolidayDescriptionThai + "</td>"));
  }

}

