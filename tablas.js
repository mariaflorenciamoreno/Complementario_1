let Valor 
Valor = prompt("ingrese un numero HASTA 100 para saber su tabla o ESC para salir")
if (Valor == "ESC")
   alert("Saludos, hasta prontos!")
   else  if (Valor >= 0 && Valor <= 100)
        for(let i=1;i<=10;i++)
        console.log("EL VALOR DE "+ Valor + "x" + i + " ES = " + Valor*i)
    else if (Valor <= 0 || Valor > 100)
        alert("fuaa la re vivis")
        else
       alert("sabes lo que es un numero??")