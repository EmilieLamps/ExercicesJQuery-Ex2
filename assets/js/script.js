// utiliser la méthode "hide"
$('#text').hide() // Je cache le texte
// Ma fonction ne s'appliquera qu'une fois le document complètement chargé
$(document).ready(function(){
  $('#submit').click(function(){ //J'applique mon événement au bouton
    $('#text').show(); // J'applique ma fonction à l'id "text"
  });
});
