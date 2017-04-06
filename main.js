$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

			$("input" [class = "yes"
				type = 'radio']: checked).each(function (e) {
				e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)

				var yes = $(this), // capture the circle that was clicked on into a variable
					text = yes_selected.data(".meds"), //looks for the data-text attribute and stores its value
					/*
						Traverse DOM to the closest .photo-container ancestor and then
						find a descendant of that ancestor with the selector .info_slides. This
						allows us to only trigger and manipulate the pop up for the clicked circle's
						photo container
					*/
					/*		popUp = yes_selected.closest('.meds').find(".info_slides"),
							popUp_text = popUp.find(".info_popIn");*/



					$("input" [type = 'checkbox']: checked).each(function () {;
						total = total + $(this).val();


					});
			});
