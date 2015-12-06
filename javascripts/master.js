$(document).ready(function() {
	var queryhash = window.location.hash
	switch (queryhash) {
		case "#about":
			document.title = "Peter Hellberg - About";
			initialShowAbout();
			break;
		case "#contact":
			document.title = "Peter Hellberg - Contact";
			initialShowContact();
			break;
		case "#networks":
			document.title = "Peter Hellberg - Networks";
			initialShowNetworks();
			break;
		default:
			initialShowAbout();
			break;
	}

	$("h2").hide();

	$("#nav-about a").click(showAbout);
	$("#nav-contact a").click(showContact);
	$("#nav-networks a").click(showNetworks);
});

function initialShowNetworks() {
	$("#content").hide();
	$("#peterhellberg").removeClass();
	$("#peterhellberg").addClass("networks");
	$(".node").hide();
	$("#networks").show();
	setTimeout("$('#content').slideDown('slow');", 950);
}

function initialShowAbout() {
	$("#content").hide();
	$("#peterhellberg").removeClass();
	$("#peterhellberg").addClass("about");
	$(".node").hide();
	$("#about").show();
	setTimeout("$('#content').slideDown('slow');", 950);
}

function initialShowContact() {
	$("#content").hide();
	$("#peterhellberg").removeClass();
	$("#peterhellberg").addClass("contact");
	$(".node").hide();
	$("#contact").show();
	setTimeout("$('#content').slideDown('slow');", 950);
}

function showAbout() {
	if ($("#peterhellberg").hasClass("about")){ }
	else {
		document.title = "Peter Hellberg - About";
		$("#content").slideUp(500);
		$(".node").fadeOut(400);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#about').show();", 500);
		$("#content").slideDown(550);
		$("#peterhellberg").removeClass();
		$("#peterhellberg").addClass("about");
	}
}

function showNetworks() {
	document.title = "Peter Hellberg - Networks";
	if ($("#peterhellberg").hasClass("networks")){ }
	else {
		$("#content").slideUp(500);
		$(".node").fadeOut(400);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#networks').show();", 500);
		$("#content").slideDown(550);
		$("#peterhellberg").removeClass();
		$("#peterhellberg").addClass("networks");
	}
}

function showContact() {
	if ($("#peterhellberg").hasClass("contact")){ }
	else {
		document.title = "Peter Hellberg - Contact";
		$("#content").slideUp(500);
		$(".node").fadeOut(400);
		setTimeout("$('.node').hide();", 500);
		setTimeout("$('#contact').show();", 500);
		$("#content").slideDown(550);
		$("#peterhellberg").removeClass();
		$("#peterhellberg").addClass("contact");
	}
}
