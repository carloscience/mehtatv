$(document).ready(function() {

		var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;

		$('.fancybox-media').fancybox({
			helpers : {
				media : {},
				title:  null,
				overlay : {
					opacity: 0.8,
					css: {'background-color': '28252b'} 
				}
			}
		});

		function scrollToAnchor(aid) {
    			var aTag = $("a[name='"+ aid +"']");
    			$('html,body').animate({scrollTop: aTag.offset().top},'slow');
		}
		
		$.getJSON('http://vimeo.com/api/v2/album/2883071/videos.json?page=1', function(data) {
			for (row in data) {
				var index1 = data[row].title.indexOf("\"");
				var index2 = data[row].title.lastIndexOf("\"") + 10;
				var firstspan = data[row].title.substring(0, index1) + '<br/><span>' + data[row].title.substring(index1 + 1);
				var spot_name = firstspan.substring(0, index2) + '</span>' + firstspan.substring(index2 + 1);
				
				if (row<6) {
					$('#thumbnails1').append('<div class="cell"><div class="spot_title">' + spot_name + '</div><a class="fancybox-media" rel="group" id="' + data[row].id + '" href="http://vimeo.com/' + data[row].id + '"><img src="' + data[row].thumbnail_large + '" /></a></div>');
				}
				else {
					$('#thumbnails2').append('<div class="cell"><div class="spot_title">' + spot_name + '</div><a class="fancybox-media" rel="group" id="' + data[row].id + '" href="http://vimeo.com/' + data[row].id + '"><img src="' + data[row].thumbnail_large + '" /></a></div>');
				}
			}
			if (!jQuery.browser.mobile && !IS_IPAD) {
			// image opacity hover state
			$('.cell').on('mouseenter', function() {
				$(this).find('img').fadeTo('slow', 1);
				$(this).find('.spot_title').fadeOut('slow');
			}).on('mouseleave', function() {
				$(this).find('img').fadeTo('slow', 0.45);
				$(this).find('.spot_title').fadeIn('slow');
			});
		}

		});

		$.getJSON('http://vimeo.com/api/v2/album/2883071/videos.json?page=2', function(data) {
			for (row in data) {
				var index1 = data[row].title.indexOf("\"");
				var index2 = data[row].title.lastIndexOf("\"") + 10;
				var firstspan = data[row].title.substring(0, index1) + '<br/><span>' + data[row].title.substring(index1 + 1);
				var spot_name = firstspan.substring(0, index2) + '</span>' + firstspan.substring(index2 + 1);
				
				$('#thumbnails3').append('<div class="cell"><div class="spot_title">' + spot_name + '</div><a class="fancybox-media" rel="group" id="' + data[row].id + '" href="http://vimeo.com/' + data[row].id + '"><img src="' + data[row].thumbnail_large + '" /></a></div>');
			}
			if (!jQuery.browser.mobile && !IS_IPAD) {
			// image opacity hover state
			$('.cell').on('mouseenter', function() {
				$(this).find('img').fadeTo('slow', 1);
				$(this).find('.spot_title').fadeOut('slow');
			}).on('mouseleave', function() {
				$(this).find('img').fadeTo('slow', 0.45);
				$(this).find('.spot_title').fadeIn('slow');
			});
		}
		});

		$.getJSON('http://vimeo.com/api/v2/album/2883071/videos.json?page=3', function(data) {
			for (row in data) {
				var index1 = data[row].title.indexOf("\"");
				var index2 = data[row].title.lastIndexOf("\"") + 10;
				var firstspan = data[row].title.substring(0, index1) + '<br/><span>' + data[row].title.substring(index1 + 1);
				var spot_name = firstspan.substring(0, index2) + '</span>' + firstspan.substring(index2 + 1);
				
				$('#thumbnails4').append('<div class="cell"><div class="spot_title">' + spot_name + '</div><a class="fancybox-media" rel="group" id="' + data[row].id + '" href="http://vimeo.com/' + data[row].id + '"><img src="' + data[row].thumbnail_large + '" /></a></div>');
			}
			if (!jQuery.browser.mobile && !IS_IPAD) {
			// image opacity hover state
			$('.cell').on('mouseenter', function() {
				$(this).find('img').fadeTo('slow', 1);
				$(this).find('.spot_title').fadeOut('slow');
			}).on('mouseleave', function() {
				$(this).find('img').fadeTo('slow', 0.45);
				$(this).find('.spot_title').fadeIn('slow');
			});
		}
		});

		$('#page1').waypoint(function(direction) {
			$('#page1 #home .strikethrough').show();
		}, { offset: -100 });

		$('.more_work2 a').on('click', function(e) {
			e.preventDefault();
			$('.more_work2').hide();
			//$('#thumbnails1, .more_work2').hide();
			$('#thumbnails2, #thumbnails3, .previous_work2').show();
		});

		$('.previous_work2').on('click', function(e) {
			e.preventDefault();
			$('#thumbnails2, #thumbnails3, #thumbnails4, .more_work3, .more_work4, .previous_work2').hide();
			//$('#thumbnails2, .more_work3, .previous_work2').hide();
			$('#thumbnails1, .more_work2').show();
		});

		$('.more_work3 a').on('click', function(e) {
			e.preventDefault();
			$('.more_work3').hide();
			//$('#thumbnails2, .more_work3').hide();
			$('#thumbnails3, .more_work4').show();
		});

		$('.more_work4 a').on('click', function(e) {
			e.preventDefault();
			$('.more_work4').hide();
			//$('#thumbnails3, .more_work4').hide();
			$('#thumbnails4').show();
		});

		//scroll to work page
		$("#work, .previous_work2").on('click', function(e) {
			e.preventDefault();
   			scrollToAnchor('id2');
		});

		//scroll to about page
		$('#about').on('click', function(e) {
			e.preventDefault();
			scrollToAnchor('id3');
		});

		//scroll to contact page
		$('#contact').on('click', function(e) {
			e.preventDefault();
			scrollToAnchor('id4');
		});

		if (!jQuery.browser.mobile && !IS_IPAD) {
		$('#page1 a').on('mouseenter', function() {
				$(this).find('.strikethrough').show();
			}).on('mouseleave', function() {
				$(this).find('.strikethrough').hide();
		});
		$('#page1 a#work, #page1 a#about, #page1 a#contact').on('mouseenter', function() {
			$('#page1 a#home').find('.strikethrough').hide();
		});
		}	

	});