/* galerie.js */
$(document).ready(function() {
    // Po kliknutí na libovolný obrázek v galerii
    $('.gallery-item').on('click', function(udalost) {
        udalost.preventDefault(); // Zabráníme tomu, aby nás to přesměrovalo pryč ze stránky
        
        // Vezmeme odkaz na velký obrázek z atributu href
        var odkazNaVelkyObrazek = $(this).attr('href'); 
        
        // Nastavíme tento odkaz našemu skrytému obrázku v lightboxu
        $('#lightbox .lightbox-img').attr('src', odkazNaVelkyObrazek); 
        
        // Zobrazíme lightbox (černé pozadí + velká fotka)
        $('#lightbox').css('display', 'flex').hide().fadeIn(300); 
    });

    // Zavření galerie po kliknutí na křížek
    $('.close-lightbox').on('click', function() {
        $('#lightbox').fadeOut(300);
    });

    // Zavření galerie po kliknutí kamkoliv mimo fotku (do černého pozadí)
    $('#lightbox').on('click', function(udalost) {
        if (udalost.target.id === 'lightbox') {
            $(this).fadeOut(300);
        }
    });
});