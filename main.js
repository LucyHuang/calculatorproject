$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	$("input[type='radio']").on("click", function (e) {
		var radio = $(this);

		if (radio.val() === "yes") {
			radio.closest("p").next(".meds").addClass("active");
		} else {
			radio.closest("p").next(".meds").removeClass("active");
		}
	});

	$("input[type='checkbox']").on("click", function (e) {
			var total = 0;
			$("table").find("tbody").html("");

			$("input[type='checkbox']:checked").each(function () {
					var drug = $(this);
					var drugName = drug.val();
					var duaneReade = drug.data("duane-reade");
					var astra = drug.data("astra");
					var costco = drug.data("costco");
					var html = "<tr><td>" + drugName + "</td><td>" + astra + "</td><td>" + duaneReade + "</td><td>" + costco + "</td></tr>";

					$("table").find("tbody").append(html);

					$(".button").on("click", "reset");
				);
			});
	});


});
