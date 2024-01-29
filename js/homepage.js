$(".menu > ul > li").click(function (e) {
    //Remove o click quando aperta em outra class
    $(this).siblings().removeClass("active")
    //Quando outra opção for clickada ela adiciona o "active"
    $(this).toggleClass("active");
    //Abrir o submenu
    $(this).find("ul").slideToggle();
    //Fecha o submenu se houver outro aberto
    $(this).siblings().find("ul").slideUp();
    //Remove o "active" do submenu
    $(this).siblings().find("ul").find("li").removeClass("active");
});