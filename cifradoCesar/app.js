function cipher(){
  var input=prompt('Ingresa tu codigo en letras')
   if(input.length===0){ //verificamos que el input no esté vacío
    return "No puedes dejar el input vacío!!"
  }
  for(var k=0;k<input.length;k++){ //recorremos el input para ver si hay algún número
    if(typeof(input.charAt(k))!=='string'){
      return 'No puedes ingresar números!'
    }
  }

 var array=[]; //un array para contener el nuevo conjunto de letras
  for(var i=0;i<input.length;i++){
    var stringAscii=input.charCodeAt(i); //una variable para almacenar el codigo ascii de la letra
    var letterCesar=(stringAscii-65+33)%26+65; //aplicamos el cifrado cesar
    var newLetter=String.fromCharCode(letterCesar); //nueva letra con cifrado cesar
    array.push(newLetter); //se almacena en el array
  }

  return array.join(''); //retornamos el array como un string
}







function decipher(){
  var secInput=prompt('Ingresa tu codigo en letras')
   if(secInput.length===0){ //verificamos que el input no esté vacío
    return "No puedes dejar el input vacío!!"
  }
  for(var k=0;k<secInput.length;k++){ //recorremos el input para ver si hay algún número
    if(typeof(secInput.charAt(k))!=='string'){
      return 'No puedes ingresar números!'
    }
  }
  var secArray=[];//un array para contener el nuevo conjunto de letras
  for(var i=0;i<secInput.length;i++){
    var codAscii=secInput.charCodeAt(i);//una variable para almacenar el codigo ascii de la letra
    var decifCesar=(codAscii-33)%26; //aplicamos el código para deshacer el cifrado cesar
    var newString=String.fromCharCode(decifCesar); //nueva sin el letra con cifrado cesar
    secArray.push(newString); //se almacena en el array
  }

  return secArray.join(''); //retornamos el array como un string

}
