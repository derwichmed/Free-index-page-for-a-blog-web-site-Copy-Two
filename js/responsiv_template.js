$(function (){
    isNavGaucheHiden = true;
    isNavDroiteHiden = true;
    $('.nav_gauche_icon').click(function (){
        if(isNavGaucheHiden){
            isNavGaucheHiden = false;
            $('.blog_nav_gauche').css('display','block');
        }
        else{
            isNavGaucheHiden = true;
            $('.blog_nav_gauche').css('display','none');
        }
    });
    
    $('.nav_droite_icon').click(function (){
        if(isNavDroiteHiden){
            isNavDroiteHiden = false;
            $('.blog_nav_gauche').css('display','block');
        }
        else{
            isNavDroiteHiden = true;
            $('.blog_nav_gauche').css('display','none');
        }
    });
});