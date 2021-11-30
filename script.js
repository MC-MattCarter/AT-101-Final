
//Function for calculating the three different mileage zones for running.
function CalculateZones(){
    var MileageVal = document.getElementById("WklyMlg").value;

   //to be completely honest im not 100% sure what all the appendChild, firstChild, removeChild means but it works.

    var Zone1 = document.getElementById("Zone1");
    while(Zone1.firstChild)Zone1.removeChild(Zone1.firstChild)
    var Result1=document.createTextNode(MileageVal*.75);
    Zone1.appendChild(Result1);

    var Zone2 = document.getElementById("Zone2");
    while(Zone2.firstChild)Zone2.removeChild(Zone2.firstChild)
    var Result2=document.createTextNode(MileageVal*.08);
    Zone2.appendChild(Result2);

    var Zone3 = document.getElementById("Zone3");
    while(Zone3.firstChild)Zone3.removeChild(Zone3.firstChild)
    var Result3=document.createTextNode(MileageVal*.17);
    Zone3.appendChild(Result3);
}

//Function for making the pace calculator work.

function  CalculatePace(){
    //all my input field variables
    var Dst = document.getElementById("Dst").value;
    var Hrs = document.getElementById("Hrs").value;
    var Mnt = document.getElementById("Mnt").value;
    var Scd = document.getElementById("Scd").value;

    //Idea: Because running pace is measured in minutes/mile, get all the hours, minutes, seconds into a sum of minutes, then divide minutes by the distance in miles.
    var Hrs1 = Hrs*60;
    var Mnt1 = Mnt*1;
    var Scd1 = Scd/60;
    var tTot = Hrs1 + Mnt1 + Scd1;

    var Pace1 = tTot/Dst;
    //for some reason the Mnt1 variable was essential in holding this together otherwise the answer would always be off by some factor of 10 or 100, Im not sure why though it just multiplied a variable by 1 so it I wouldnt think it would do anything but I guess it does. It probably took me like 70 minutes of wondering why the math wasnt working before trying that. 
    //Now the pace is in the correct units of minutes/mile, but there is still the issue of decimals, nobody wants to read that you have to run 7.5 minutes per mile, they want to read 7:30 per mile so now I have to come up with something fancy to solve that.

    //Idea: use decimal number-math.floor(decimal number), to isolate the decimal, then multiply by -1 to make it positive, then multiply by 60, then somehow attach that back onto the original number so it looks good. I might have to go back through the code and alter stuff so it gets in the proper form of [mm] : [ss] and simply use different text boxes for each of them and place them close together so it looks like they are a singluar box.
    
    //Rounded down number (no decimal)
    var Pace2 = Math.floor(Pace1)
    //The decimal that goes with it
    var Pace3 = Pace1 - Math.floor(Pace1)
    var Pace4 = Pace3*60
    


    //Pace whole integer value
    var finalPace = document.getElementById("finalPace");
    while(finalPace.firstChild)finalPace.removeChild(finalPace.firstChild)

    var paceResult = document.createTextNode(Pace2);
    finalPace.appendChild(paceResult);

    //Pace decimal value (now in seconds)
    var paceDecimal = document.getElementById("paceDecimal");
    while(paceDecimal.firstChild)paceDecimal.removeChild(paceDecimal.firstChild)

    var paceResultD = document.createTextNode(Pace4);
    paceDecimal.appendChild(paceResultD);

}
