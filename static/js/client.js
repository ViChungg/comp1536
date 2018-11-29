$(document).ready(function() {

    // CLEAR THE DATE
    /*$('#grass').click(function(e) {
        // don't allow the anchor to visit the link
        e.preventDefault();
        $("#pokemon-list").html("Date to go here.");
    });*/

    // CONTACT THE SERVER AND GET THE DATE FROM THE SERVER
    $('#mainMenu #getDate').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET",
            dataType: "json",
            type: "GET",
            success: function(data) {
                $("#p1").text(data['msg']);
                console.log("SUCCESS:", data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // INTENTIONALLY GET A 404 FROM THE SERVER
    $('#mainMenu #getBadURL').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-SOMETHING-THAT-DOESNT-EXIST",
            dataType: "json",
            type: "GET",
            success: function(data) {
                $("#p1").text(data['msg']);
                console.log("SUCCESS:", data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            },
            // handle a 404 (i.e., page not found)
            statusCode: {
                404: function() {
                    $("#p1").text("Page doesn't exist.");
                }
            }
        });
    });

    // GET A LIST OF ROCK POKEMON FROM THE SERVER AS HTML DATA
    $('#button-container #rock').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list", pokType: "rock"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#pokemon-list").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#pokemon-list").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // GET A LIST OF FIRE POKEMON FROM THE SERVER AS HTML DATA
    $('#button-container #fire').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list", pokType: "fire"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#pokemon-list").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#pokemon-list").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // GET A LIST OF GROUND POKEMON FROM THE SERVER AS HTML DATA
    $('#button-container #ground').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list", pokType: "ground"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#pokemon-list").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#pokemon-list").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // GET A LIST OF BUG POKEMON FROM THE SERVER AS HTML DATA
    $('#button-container #bug').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list", pokType: "bug"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#pokemon-list").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#pokemon-list").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // GET A LIST OF FLYING POKEMON FROM THE SERVER AS HTML DATA
    $('#button-container #flying').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list", pokType: "flying"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#pokemon-list").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#pokemon-list").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });


    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#button-container #grass').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list", pokType: "grass"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#pokemon-list");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#button-container #ghost').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list", pokType: "ghost"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#pokemon-list");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#button-container #electric').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list", pokType: "electric"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#pokemon-list");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#button-container #psychic').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list", pokType: "psychic"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#pokemon-list");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#button-container #water').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list", pokType: "water"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#pokemon-list");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });


    // PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
    $('#submit').click(function(e) {
        let formData = { firstName: $("#firstName").val(),
                         lastName: $("#lastName").val(),
                         email: $("#email").val()
                       };
        console.log("Form data to send:", formData);
        $.ajax({
            url: "/post-form",
            dataType: "json",
            type: "POST",
            data: formData,
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                // how do we know what we are getting?
                $("#p2").html(data[0] + " " + data[1]['firstName']
                              + " " + data[1]['lastName']
                              + " " + data[1]['email']
                             );

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

});
