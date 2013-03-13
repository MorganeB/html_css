	
	$(document).ready(function() {
			var fichierCss = $.cookie("cookieCss");
			if(fichierCss) {
				$('#linkCss').attr('href', fichierCss);
			}
		
			$('a.changeCss').click(
				function() {
					var nomFichier = $(this).attr('id');
					$('#linkCss').attr('href', nomFichier);
					//Cookie
					$.cookie("cookieCss",nomFichier, {expires: 300, path: '/'});
				}
			);
		});