var spreadsheet = SpreadsheetApp.getActive();
var sheet = spreadsheet.getSheetByName('History');
var celda = sheet.getRange("A1").getValue();

function saveData(data){
    var row = sheet.getLastRow() + 1;
    
    var date = sheet.getRange("B"+row);
    date.setValue(data.date);
    date.setNumberFormat("dd/mm/yyyy");
    date.setBorder(true,true,true,true,null,null,null,null);
    date.setHorizontalAlignment("center");

    var name = sheet.getRange("C"+row);
    name.setValue(data.fullName);
    name.setBorder(true,true,true,true,null,null,null,null);
    name.setHorizontalAlignment("center");


    var gender = sheet.getRange("D"+row);
    gender.setValue(data.gender);
    gender.setBorder(true,true,true,true,null,null);
    gender.setHorizontalAlignment("center");
    
    
    var dob = sheet.getRange("E"+row);
    dob.setValue(data.DOBpatient);
    dob.setNumberFormat("dd/mm/yyyy");
    dob.setBorder(true,true,true,true,null,null,null,null);
    dob.setHorizontalAlignment("center");
    
    
    var address = sheet.getRange("F"+row);
    address.setValue(data.address);
    address.setBorder(true,true,true,true,null,null,null,null);
    address.setHorizontalAlignment("center");
    
    
    var medicalProvider = sheet.getRange("G"+row);
    medicalProvider.setValue(data.medicalProvider);
    medicalProvider.setBorder(true,true,true,true,null,null,null,null);
    medicalProvider.setHorizontalAlignment("center");
    
    
    var completeData = sheet.getRange("H"+row+":V"+row).merge();
    completeData.setValue(data);
    completeData.setBorder(true,true,true,true,null,null,null,null);
}
