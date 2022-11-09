const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "jsonlogs",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    pageTitle:"Cucmber-Cypress-Multiple Cucumber HTML-Report",
    reportName:"Cucmber-Cypress-HTML-Report",
    displayDuration:true,
    displayReportTime:true,
    openReportInBrowser:true,
    metadata: {
        browser: {
            name: "chrome",
            version: "107",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: 'Cucmber-Cypress HTML - Report',
        data: [
            {label: 'Project', value: 'Test Project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: (new Date).getTime()},
            {label: 'Execution End Time', value: (new Date).getTime()}
        ]
    }

});