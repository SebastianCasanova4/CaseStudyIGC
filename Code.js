function doGet() {
    return HtmlService.createHtmlOutputFromFile('home');
}

function newPage(page) {
    return HtmlService.createHtmlOutputFromFile(page).getContent()
}