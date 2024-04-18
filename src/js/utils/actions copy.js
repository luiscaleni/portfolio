$(document).ready(function() {
    let divFinder = document.createElement("div")
    let imgFinder = document.createElement("img")
    let buscar = document.createElement("span")

    $('#loader').show()
    $('#loader').fadeOut(1000, function (){
        $('#loader').hide()
    })

    divFinder.id="finder"
    imgFinder.src="/assets/iconsSystem/finder.png"
    buscar.textContent="Buscar"
    divFinder.append(imgFinder)
    divFinder.append(buscar)

    setTimeout(() => {
        $(".splide__pagination__page").hide()        
        $(".splide__pagination").append(divFinder)
    }, 1000)


    $(".splide__slide").mousedown(function(){
        $("#finder").hide()
        $(".splide__pagination__page").show()
    })
    $(".splide__slide").mouseup(function(){
        $("#finder").show()
        $(".splide__pagination__page").hide()
    })
    $(".splide__slide").mouseout(function(){
        $("#finder").show()
        $(".splide__pagination__page").hide()
    })
    if ($("#finder").is(":visible")) {
        $(".splide__pagination__page").hide()
    }else if($("#finder").is(":hidden")){
        $(".splide__pagination__page").show()
    }
})