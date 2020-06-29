var Hct = +prompt("HCT")
var RBC = +prompt("RBC")
var HB = +prompt("HB")
var MCV = (Hct*10)/RBC
var MCH = (HB*10)/RBC
var MCHC = (HB*100)/Hct
document.write("HCT :"+" "+Hct+"<br>"+"<br>")
document.write("RBC :"+" "+RBC+"<br>"+"<br>")
document.write("HB :"+" "+HB+"<br>"+"<br>")
document.write("MCV :"+" "+MCV+"<br>"+"<br>")
document.write("MCH :"+" "+MCH+"<br>"+"<br>")
document.write("MCHC :"+" "+MCHC+"<br>"+"<br>")