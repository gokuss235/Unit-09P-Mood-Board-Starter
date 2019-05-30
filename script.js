var superImages = [
    "https://gematsu.com/wp-content/uploads/2019/04/SSG-Vegetea-Xenoverse_04-17-19.jpg", 
    "https://static.comicvine.com/uploads/scale_small/13/132327/6507037-28872490_1638064799604695_1250122498385004714_n.jpg",
    "https://vignette.wikia.nocookie.net/dragonuniverse/images/9/96/Super_Saiyan_Blue_Goku_%28Broly%29.jpeg/revision/latest?cb=20181126041421"
];
var africanImages = ["https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/99/Black_Panther_AIW_Profile.jpg/revision/latest?cb=20180518212436",
    "https://lumiere-a.akamaihd.net/v1/images/r_thelionking2019_payoff_ddt-17464_a7c9d80b.jpeg?region=0,0,2048,879",
    "https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-recipe_.jpg"];
var athleticImages = ["https://image.syracuse.com/home/syr-media/width600/img/orangebasketball_impact/photo/2018-11-28-dn-subasket33jpg-91d578f9ed41b16c.jpg",
    "https://nationalfootballpost.com/wp-content/uploads/2019/03/11999289-1.jpg",
    "https://image.cnbcfm.com/api/v1/image/105279616-Romelu_Lukaku_plays_for_Manchester_United.jpg?v=1532563622&w=1400&h=950"];
var gamingImages = ["https://fortniteintel.com/wp-content/uploads/2019/02/Fortnite-FN-Party-Assist-challenges-challenge-season-8-eight-s8-information-what-is-how-to.jpg",
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2019%2F03%2Fhttps___blogs-images.forbes.com_insertcoin_files_2019_03_apex-legends1.jpg",
    "https://cdn.images.dailystar.co.uk/dynamic/184/photos/170000/620x/Black-Ops-4-Xbox-One-Update-Call-of-Duty-Spectre-Specialist-Blackout-map-changes-coming-777183.jpg?r=5cd165b88c6ad" ];
$("button").click(function(){
  var mood =  $("input").val();
if(mood==="super"){
    Supers();
}
else if(mood==="african"){
    African();
    }
else if(mood==="athletic"){
    Athletic();
}
else if(mood==="gaming"){
    Gaming();
}
else {
    $(".alert").text("Not A Mood!!!");
}
    function Supers(){
    changeBackgroundColor("yellow");
    changeText("super!");
    fontcolor("black");
    changeImage(superImages);
}
function African(){
    changeBackgroundColor("black");
    changeText("African!");
    fontcolor("white");
    changeImage(africanImages);

}
function Athletic(){
    changeBackgroundColor("green");
    changeText("Athletic!");
    fontcolor("black");
    changeImage(athleticImages);
}
function Gaming(){
    changeBackgroundColor("blue");
    changeText("like a Gamer!");
    fontcolor("white");
    changeImage(gamingImages);
    
}
});
function changeBackgroundColor(color){
    $("body").css("background-color",color);
}
function changeText(input){
    $("p").text("Feeling" + " "+ input);
}
function changeImage(image){
   image.forEach(function(pic){
    $(".images").append("<img src="+pic+">");
    });
}
function fontcolor(fcolor){
        $("body").css("color",fcolor);
    }