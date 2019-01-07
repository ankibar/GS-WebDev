var introv = 0;
var extrov = 0;
var ambi = 0;
var flag = 0;
var introverted = ["q2","q3","q4","q5","q6","q7"];
var extroverted = ["q1","q8","q9","q10"];
var index = 0;
for(index = 0;index<introverted.length;index++){
	if(document.getElementById(introverted[index].value = "Always")
		introv++;
	else if(document.getElementById(introverted[index]).value = "Sometimes")
		ambi++;
	else
		extrov++;
}
for(index = 0;index<extroverted.length;index++){
	if(document.getElementById(introverted[index]).value = "Always")
		extrov++;
	else if(document.getElementById(introverted[index]).value = "Sometimes")
		ambi++;
	else
		introv++;
}

if(introv>extrov && introv>ambi)
	flag = 0
else if(ambi>intov && ambi>extrov)
	flag = 1;
else
	flag = 2;

document.getElementById("myForm").submit(); 

if(flag == 0)	
	document.getElementById("Submit").addEventListener("click", function(){ alert("You are introverted"); }); 
if(flag == 1)
	document.getElementById("Submit").addEventListener("click", function(){ alert("You are ambiverted"); });
if(flag == 0)
	document.getElementById("Submit").addEventListener("click", function(){ alert("You are extroverted"); });

/*
if (document.getElementById('r1').checked) {
  //rate_value = document.getElementById('r1').value;
  introv++;
}
if (document.getElementById('r2').checked) {
  //rate_value = document.getElementById('r1').value;
  extrov++;
}
*/