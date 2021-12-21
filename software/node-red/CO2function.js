var co = flow.get("CO2");
var lat = flow.get("latitude");
var lon = flow.get("longitude");
var data = {
    "Country": "Belgium",
    "Function": "1-3-----",
    "LOCODE": "BEBRU",
    "Name": "Bruxelles",
    "NameWoDiac": "Bruxelles",
    "Status": "Bruxelles",
    "outflows": JSON.stringify(co),
    "lat": JSON.stringify(lat),
    "long":  JSON.stringify(lon)
    }
var newpay = msg.payload.substring(0, msg.payload.length - 1);
msg.payload = newpay + "," +JSON.stringify(data)+"]";
return msg;
