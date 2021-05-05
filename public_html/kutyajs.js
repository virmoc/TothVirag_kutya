var kutyak = [
    {
     nev:"Molly",
     kor:5,
     fajta:"Német juhász"
    },{
     nev:"Roki",
     kor:4,
     fajta:"Német juhász"
    },
    {
     nev:"Liza",
     kor:5,
     fajta:"Husky"
    }
];
var irany = true;
$(function(){
    tablazatKiir();


}); 
function rendezes(){
    if(irany){
    kutyak.sort(function(a,b){
        return Number(a.nev > b.nev )-0.5;
        irany = false;
    });
}else{
        kutyak.sort(function(a,b){
        return Number(a.nev < b.nev )-0.5;
        irany = true;
});
}
irany = !irany;

    tablazatKiir();

};
function  tablazatKiir(){
    $("article").empty();
    $("article").append("<table>");
   $("article table").append("<tr><th>Név</th><th>kor</th><th>fajta</th></tr>");
   console.log(kutyak.length);
    for (var i = 0; i < kutyak.length; i++) {
        console.log(kutyak);
        $("article table").append("<tr><td>"+ kutyak[i].nev + "</td><td>" + kutyak[i].kor + "</td><td>"+ kutyak[i].fajta +"</td></tr>");
    }
  $("article th").click(rendezes);
}