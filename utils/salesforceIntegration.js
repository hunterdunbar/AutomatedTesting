let jsforce = require('jsforce');
let conf = require('../config/default.js')
let conn = new jsforce.Connection({loginUrl : 'https://test.salesforce.com'});

function tearDownSalesforceShapeData(){

    conn.login(conf.SFDC_USERNAME, conf.SFDC_PASSWORD, function(err, res) {
        if (err) { 
            return console.error(err); 
        }
        let idarray=[];
        conn.query('SELECT Id, Name FROM geopointe__Shape__c WHERE Name LIKE \'St. Louis%\'', function(err, result) {
            if (err) { return console.error(err); }
            console.log("total : " + result.totalSize);
            console.log("fetched : " + result.records.length);
            //console.log(result.records);
            
            result.records.forEach((item,index)=>{
                console.log(item);
                idarray.push(item.Id);
            });

            console.log(idarray);
    
            conn.sobject("geopointe__Shape__c").del(idarray, 
                function(err, rets) {
                if (err) { return console.error(err); }
                for (var i=0; i < rets.length; i++) {
                    if (rets[i].success) {
                    console.log("Deleted Successfully : " + rets[i].id);
                    }
                }
            });
        });
    });

}

module.exports = {
    tearDownSalesforceShapeData
}
