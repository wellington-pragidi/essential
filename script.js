$(document).ready(function() {

	$("#essential").attr("contenteditable", "true")
	$("#essential").prepend("<p><br></p>")

    // alto height para contenteditable e textarea
	function autorise(textarea) {
	    $(textarea).height(0)
	    $(textarea).height($(textarea).prop("scrollHeight"))
	}
	$(document).on('input', "#essential, #output_essential", function() {
	    autorise(this);
	})
	$("#essential, #output_essential").each(function () {
	    autorise(this);
	})

	// envia conteudo de contenteditable para textarea
	$("#essential").bind('change keyup input', function() {
	    var text_markup = $(this).html()
	    $("#output_essential").html(text_markup)
	})

	// inserir tags
	$("#toolbar_essential button").each(function() {
		var cmd = $(this).attr("id")
		$("#"+cmd).on('click', function() {
			document.execCommand(cmd)
		})
	})

	// dropdown h2-h6
	$("#toolbar_essential #formats button").each(function() {
		var format = $(this).attr("id")
		$("#"+format).on('click', function() {
			document.execCommand('heading', false, format)
		})
	})

	// Link
	$("#insert_link").on('click', function() {
	    document.execCommand('createLink', false, $("#set_link").val())
	})

	// Image
	$("#set_image").on('change', function() {
	    var reader = new FileReader()
	    reader.onload = function(e) {
	    	document.execCommand('insertImage', false, e.target.result)
	    }
	    reader.readAsDataURL($(this)[0].files[0])
	})
	
    // dropdown toggle
	$(".select").each(function() {
	    $(this).on("click", function() {
	        $(this).toggleClass("expanded")
	        $(this).next().slideToggle(100)
	    })
	})

	/** modal popup
	* @link https://frontwork.webship.com.br/components/modal-popup/ */
	$(".mp_open").click(function() {
	    var data_mp = $(this).attr("data-mp");
	    data_mp = $("#" + data_mp)
	    data_mp.css("display", "block")
	    $("body").css("overflow-y", "hidden")
	})
	$(".mp_header").each(function() {
	    $(this).prepend('<em class="mp_close close"></em>')
	})
	//$('<div class="mp_over"></div>').appendTo(".modal_popup")
	$(".mp_close, .mp_over").click(function() {
	    $(".modal_popup").css("display", "none")
	    $("body").css({"overflow-y": "auto"})
	})

})