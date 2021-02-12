function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        document.getElementById("result").innerHTML = num1 * 0.0252 * 1000;
        document.getElementById("result2").innerHTML = Math.round(num1 * 11.23);
        document.getElementById("result3").innerHTML = Number((num1 * 1.17E-05).toFixed(5));
        document.getElementById("result4").innerHTML = (num1 * 3427);
        document.getElementById("result5").innerHTML = Number((num1 * 0.00089).toFixed(5));
        document.getElementById("result6").innerHTML = Number((num1 * 0.0041).toFixed(5));

        document.getElementById("WaterConsumption").innerHTML = num1 * 0.0929*1000;
        document.getElementById("ClimateChange").innerHTML = num1 * 17.9;
        document.getElementById("OzoneDepletion").innerHTML =num1 * 0.0000137;
        document.getElementById("HumanToxicity").innerHTML = num1 * 3588.5;
        document.getElementById("Eutrophication").innerHTML = num1 * 0.00332;
        document.getElementById("Acidification").innerHTML = num1 * 0.0293;       
}


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
