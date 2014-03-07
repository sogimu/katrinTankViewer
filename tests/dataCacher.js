(function(namespace) {
    var DataCacher = {};

    function splitTime(window, addTime, Milliseconds, Multiplier)
    {
        if(Multiplier === 1)
        {
            var Time = (new Date(window)).toISOString().replace('Z', Milliseconds);
        }
        else
        {
            var Time = (new Date(window * Multiplier)).toISOString().replace('Z', Milliseconds);
        }
        var Seconds = Time.substr(13);
        var TimeHours = (parseFloat(Time.substr(11,2)) + addTime) + Seconds;
        Time = Time.substring(0,11) + TimeHours;
        return Time;
    };

    DataCacher.getData = function(db_server, db_name, db_group, db_mask, window, onEndCallBack) {
        var url = "../data/katrinTemperature.csv"; //formURL(db_server,db_name,db_group,db_mask, window);
        var csv = RGraph.CSV(url, function(csv)
        {
            var numrows = csv.numrows;            
            var numcols = csv.numcols;
            var labels = new Array(numcols);
            labels = csv.getRow(0);   
            var allData = new Array(numcols);

            for (i = 0; i < numcols; i++) 
            {
                allData[i] = new Array(numrows -1);
                var row = csv.getCol(i,1);

                for (j = 0; j < numrows - 1; j++) 
                {           
                    if (i === 0) 
                    {      
                        var Milliseconds = row[j].substr(22);
                        allData[i][j] = splitTime(row[j], 1, Milliseconds, 1);
                    }
                    else
                    {
                        allData[i][j] = parseFloat(row[j]);
                    }

                }
            }

            for(i = 1; i < allData.length; i++)
            {
                var Obj = {data: allData[i], dateTime: allData[0], label: labels[i]};
                onEndCallBack(Obj);
            }
        });
                               
    };
    
    namespace.DataCacher = DataCacher;

})(window);

// function formURL(db_server, db_name, db_group, db_mask, window)
// {
//     var url = 'http://suren.me/adei/services/getdata.php?db_server=' + db_server 
//             + '&db_name=' + db_name
//             + '&db_group=' + db_group 
//             + '&db_mask=' + db_mask 
//             + '&window=' + window 
//             + '&format=csv';
//     return url; 
// }

        