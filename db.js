module.exports = {
    reports: [
        { id: 104, name: "consumption", customname: null, utcsaved: new Date("2017-10-29")},
        { id: 154, name: "dailyactivity", customname: "Activité Journalière", utcsaved: new Date("2017-10-29")},
        { id: 1017, name: "historiesdetails", customname: "Historiques Semaine", utcsaved: new Date("2017-10-29")},
    ],
    columns: [
        {id: 100, name: "date", customname: null, customcolor: null, report_id: 104},
        {id: 110, name: "total_consumption", customname: "Litres", customcolor: "blue", report_id: 104},
        {id: 120, name: "consumption_per_hour", customname: null, customcolor: null, report_id: 104},
        
        {id: 130, name: "date", customname: null, customcolor: null, report_id: 154},
        {id: 140, name: "distance", customname: "Distance km", customcolor: "green", report_id: 154},
        {id: 150, name: "avg_speed", customname: "Vitesse moy.", customcolor: "yellow", report_id: 154},
        
        {id: 160, name: "Date", customname: null, customcolor: null, report_id: 1017},
        {id: 170, name: "nb_events", customname: "Evts conduite", customcolor: null, report_id: 1017},
        {id: 180, name: "duration", customname: null, customcolor: null, report_id: 1017}
    ]
}