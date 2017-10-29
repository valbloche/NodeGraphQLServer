const db = require('./db');
module.exports= {
    Query: {
        Reports: () => db.reports,
        Report: (_, { id }) => db.reports.find(report => report.id == id),
    },
    Mutation: {
        createReport: (_, {name}) => {
            let report = { id: (Math.random() * (3000 - 1018) + 1018).toFixed(0), name: name, customname: null, utcsaved: new Date() };
            db.reports.push(report);
            return report;
        },
        deleteReport: (_, {id}) => {
            let reportToDelete = db.reports.find(report => report.id == id);
            db.reports.splice(db.reports.indexOf(reportToDelete), 1)
            return reportToDelete
        }
    },
    Report: {
        columns: report => db.columns.filter( (column) => column.report_id == report.id )
    },
    Column: {
        id: column => column.id,
        name: column => column.name,
        customname: column => column.customname
    }
}