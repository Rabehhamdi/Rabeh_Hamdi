$(document).ready(function () {
var value1=-1;
$("#nbp").click(function(){
        $( "#chaises" ).empty();
        var value = $('#nbp').find(":selected").val();
		    var image = "<img src='images/chaise.jpg'/>";

		for (var i = 0 ; i < value ; i++) {
			$("#chaises").append(image);
		}
    value1 = value;
		
});

var d;       
$('#date').Zebra_DatePicker({format: 'd/m/Y',onSelect: function() { 
        var	dt =$(this).context.value;
        d=dt;
      }});



$("#b1").click(function(){
      if (value1 === -1) {
      alert('Veuillez sélectionner le nombre de places')}else{
	    var h;
      if ($('input[name="civilite"]').is(':checked'))
      {
        var x = $("input[name=civilite]:checked").each(
		    function() {
			  var v = $(this).val();
			  if (v==="mme") { v="Madamme";
			  }else if (v==="mlle"){ v="Mademoiselle";
			  }else if (v==="m"){ v="Monsieur";
			  }
			  h=v;
	      });
        
        
        var nom = $('#nom').val();
        var n = nom.length;
        if(n<10 || isNaN(nom)===false){
         alert('nom et prenom trop courts !');
         
        }else{

          var validetel = /\d{8}$/;
          // = new RegExp();
          var tel = $('#tel').val();
          if(validetel.test(tel) === false){
          alert('N* de tel invalide !!');
          }else{
               $( "#div_resume" ).empty();
               var large = '<div> bonjour '+h+'<strong> '+nom+'</strong> </br> Votre commande du '+d+ ' a ete bien validée les plats commandés sont :</div></br>';	
               $("#div_resume").append(large);
               var prix = 0;
               var man;
               var x = $("input[name=cmd]:checked").each(
               function() {
                           var p = $(this).data('prix');
                           prix=prix+parseFloat(p);
                           px=prix;
                           var dt =$(this).context.value;
                           man=dt;
                           var large1 = '<ul> <li>'+man+'</li> </ul>';
        
                            $("#div_resume").append(large1);
        
                          });
                var large2= 'le montant total de la commande est de '+px+' dt';
                 $("#div_resume").append(large2);

        
        

        }}}else alert('La civilite est obligatoire !');
        }
                
});

});