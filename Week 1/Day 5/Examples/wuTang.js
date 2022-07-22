const wuTangMembers = prompt("Who is your favorit member of Wu im going to say where is he/she from!");
let loc = " ";
switch (wuTangMembers){
    case "Rza":
    loc = "Staten Island, New York";
    break;
    case "Inspectah Deck":
    loc = "Brooklyn, New York";
    break;
    case "Method Man":
    loc = "Hempstead, New York";
    break;
    case  "Cappadonna":
    loc = "Staten Island, New York";
    break;
    case "U-God":
    loc = "New York, New York";
    break;
    case "GZA":
    loc = "New York, New York";
    break;
    case "Ghostface Killah":
    loc = "Staten Island, New York"
    break;
    case "Masta Killa":
    loc = "Brooklyn, New York";
    break;
    case "Raekwon":
    loc = "Staten Island, New York";
    break;
    case "Ol' Dirty Bastard":
    loc = "is dead;"
    break;
    default:
    loc = "I don't know";
    break;
}
console.log(loc);