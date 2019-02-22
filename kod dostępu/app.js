TruePassword = "synestezja";
var password = prompt("Wpisz hasło dostępu");
if (password === TruePassword){
    alert("Udzielono dostępu");
}
else 
{
   alert("Dostęp zabroniony");
   location.href='http://google.pl';
}
