class chronicleLogger {
    constructor(_apiurl, _apikey){
        const apiurl = _apiurl;
        const apikey = _apikey;    
    }   

    createLog(_system, _payload, _severity ) {
        const dateFull = new Date(Date.now());
        //  Create Log    
        const log = {
            logTime: dateFull.toISOString(),
            system: _system,
            severity: _severity,
            details: {
                payload: _payload
            }
        }
        return log;
    }

    publishLog(log) {
        const apiUrl = `${apiUrl}/q?=key=${apikey}`;    //  https://chronicleapi.horoku.com/q?=xxxxxxxxxxxx

        //  POST to server containing chronicle-api
        fetch({url: apiurl, body: log, headers: { method: "POST"}});
    }
}

module.exports = chronicleLogger;