$(document).ready(function() {

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

    $(document).on('click', '#pokemon-list .html', function(e){
        e.preventDefault();
        console.log(e.target.id);
        var div = $("#img-display");
        div.html('');
        var id = e.target.id;
        var image = "";
        var number = "";

        
        switch (id) {
            case "Geodude":
                image = "img/geodude.png";
                number = "74";
                break;
            case "Onix":
                image = "img/onix.png";
                number = "95";
                break;
            case "Charmander":
                image = "img/charmander.png";
                number = "4";
                break;
            case "Ponyta":
                image = "img/ponyta.png";
                number = "77";
                break;
            case "Diglett":
                image = "img/diglett.png";
                number = "50";
                break;
            case "Cubone":
                image = "img/cubone.png";
                number = "104";
                break;
            case "Beedrill":
                image = "img/beedrill.png";
                number = "15";
                break;
            case "Butterfree":
                image = "img/butterfree.png";
                number = "12";
                break;
            case "Articuno":
                image = "img/articuno.png";
                number = "144";
                break;
            case "Zapdos":
                image = "img/zapdos.png";
                number = "145";
                break;
        }
        var pokemons = $("<div id='p-info'></div>");
        var img = $("<img></img>");
        img.attr("src", image);
        pokemons.append(img);
        pokemons.append(number);
        
        div.append(pokemons);
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#button-container #grass, #ghost, #water, #electric, #psychic').click(function(e) {
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#pokemon-list");
                div.html('');
                var id = e.target.id;
                var pokemons = $("<ul></ul>");   
                for (x in data) {
                    if (data[x]['type'] == id) {
                        var pokList = $("<li></li>");
                        var pok = $("<button type='button' class='json'>" + x + "</button>");
                        pok.attr("id", x);
                        pokList.append(pok);
                        pokemons.append(pokList);
                    }
                }
                
                div.append(pokemons);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $(document).on('click', '#pokemon-list .json', function(e){ 
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#img-display");
                div.html('');
                var id = e.target.id;
                var pokemons = $("<div id='p-info'></div>");   
                for (x in data) {
                    console.log(x + " " + id);
                    if (x == id) {
                        console.log(data[x]['img']);
                        var img = $("<img></img>");
                        img.attr("src", data[x]['img']);
                        pokemons.append(img);
                        pokemons.append(data[x]['number']);
                    }
                }
                
                div.append(pokemons);

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
