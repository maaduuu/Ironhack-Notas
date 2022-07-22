const wuTangMembers = prompt("Who is your favorit member of Wu im going to say where is he/she from!");
let loc = " ";
switch (wuTangMembers.toLowerCase()){
    case "rza":
    loc = "Staten Island, New York";
    break;
    case "inspectah deck":
    loc = "Brooklyn, New York";
    break;
    case "method man":
    loc = "Hempstead, New York";
    break;
    case  "cappadonna":
    loc = "Staten Island, New York";
    break;
    case "u-god":
    loc = "New York, New York";
    break;
    case "gza":
    loc = "New York, New York";
    break;
    case "ghostface killah":
    loc = "Staten Island, New York"
    break;
    case "masta killa":
    loc = "Brooklyn, New York";
    break;
    case "raekwon":
    loc = "Staten Island, New York";
    break;
    case "ol' dirty bastard":
    loc = "is dead;"
    break;
    default:
    loc = "I don't know";
    break;
}
console.log(loc);