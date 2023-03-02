var sellHover = document.getElementById("top_navber");
sellHover.addEventListener('mouseover',function(){
    var a= document.getElementById("top_navber_sell_hover");
    console.log(a.style.display);
    // if(a.style.display!="none")
    // {
    //     a.style.display="none";
    // }
    // else{
    //     a.style.display="block";
    // }
})
function showAllCategories()
{
    const a = document.getElementById("show_All_Categories");
    if(a.style.display!="block")
    {
        a.style.display="block";
    }else{
        a.style.display="none";
    }
}
