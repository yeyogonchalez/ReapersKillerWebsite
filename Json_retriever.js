$(function () {


    $.getJSON('CV.json', function (data) {
        //document.getElementByID(idelement) permet de selectionner l'élément HTML qui possède l'id=idelement
        //.innerHTML permet de selectionner l'intérieur de l'élément HTML et permet ainsi d'en remplacer son contenu
        document.getElementById("intro").innerHTML = data.intro;

        document.getElementById("imgInfo").src = data.imgInfo;
        document.getElementById("infoTitre").innerHTML = data.infoTitre;
        document.getElementById("nom").innerHTML = data.nom;
        document.getElementById("age").innerHTML = data.age;
        document.getElementById("ne").innerHTML = data.ne;
        document.getElementById("residence").innerHTML = data.residence;

        document.getElementById("imgForm").src = data.imgForm;
        document.getElementById("titreForm").innerHTML = data.titreForm;
        document.getElementById("lycee").innerHTML = data.lycee;
        document.getElementById("univ").innerHTML = data.univ;
        document.getElementById("cuisine").innerHTML = data.cuisine;
        document.getElementById("anger").innerHTML = data.anger;

        document.getElementById("imgExp").src = data.imgExp;
        document.getElementById("titreExp").innerHTML = data.titreExp;
        document.getElementById("avant").innerHTML = data.avant;
        document.getElementById("esclave").innerHTML = data.esclave;
        document.getElementById("maintenant").innerHTML = data.maintenant;

        document.getElementById("passionTexte").innerHTML = data.passionTexte;
        document.getElementById("reviewTitle").innerHTML = data.reviewTitle;

        document.getElementById("imgBilly").src = data.imgBilly;
        document.getElementById("texteBilly").innerHTML = data.texteBilly;
        document.getElementById("nomBilly").innerHTML = data.nomBilly;

        document.getElementById("imgMandy").src = data.imgMandy;
        document.getElementById("texteMandy").innerHTML = data.texteMandy;
        document.getElementById("nomMandy").innerHTML = data.nomMandy;

        document.getElementById("imgBoogey").src = data.imgBoogey;
        document.getElementById("texteBoogey").innerHTML = data.texteBoogey;
        document.getElementById("nomBoogey").innerHTML = data.nomBoogey;

        document.getElementById("imgLady").src = data.imgLady;
        document.getElementById("texteLady").innerHTML = data.texteLady;
        document.getElementById("nomLady").innerHTML = data.nomLady;

        document.getElementById("titreNavbar").innerHTML = data.titreNavbar;
        document.getElementById("logo").src = data.logo;
        document.getElementById("homeLink").href = data.homeLink;

        document.getElementById("link1").innerHTML = data.link1;
        document.getElementById("link1").href = data.link1href;

        document.getElementById("link2").innerHTML = data.link2;
        document.getElementById("link2").href = data.link2href;

        document.getElementById("link3").innerHTML = data.link3;
        document.getElementById("link3").href = data.link3href;

        document.getElementById("logo2").src = data.logo;
        document.getElementById("facebook").href = data.facebook;
        document.getElementById("instagram").href = data.instagram;
        document.getElementById("cartoonNetwork").href = data.cartoonNetwork;

        document.getElementById("f_img").src = data.f_img;
        document.getElementById("i_img").src = data.i_img;
        document.getElementById("cn_img").src = data.cn_img;

        document.getElementById("logo").alt = data.logo_alt;
        document.getElementById("logo2").alt = data.logo_alt;
        document.getElementById("f_img").alt = data.f_alt;
        document.getElementById("i_img").alt = data.i_alt;
        document.getElementById("cn_img").alt = data.cn_alt;
    });

});
