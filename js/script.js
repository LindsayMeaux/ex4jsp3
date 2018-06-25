function notPassword(){
  var pw1 = document.getElementById('password').value;
var pw2 = document.getElementById('confirmPassword').value;
if( pw1 !== pw2 ){
  document.getElementById('password').style.border = '3px red solid';
  document.getElementById('confirmPassword').style.border = '3px red solid';}

else  {
  document.getElementById('password').style.border = '3px green solid';
 document.getElementById('confirmPassword').style.border = '3px green solid';}
}
