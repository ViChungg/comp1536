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
        var info = $("<div id='info'></div>");
        div.html('');
        var id = e.target.id;
        var image = "";
        var number = "";
        var des = "";

        switch (id) {
            case "Geodude":
                image = "img/geodude.gif";
                number = "74";
                des = "The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always."
                break;
            case "Onix":
                image = "img/onix.gif";
                number = "95";
                des = "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother."
                break;
            case "Charmander":
                image = "img/charmander.gif";
                number = "4";
                des = "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
                break;
            case "Ponyta":
                image = "img/ponyta.gif";
                number = "77";
                des = "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent."
                break;
            case "Diglett":
                image = "img/diglett.gif";
                number = "50";
                des = "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables."
                break;
            case "Cubone":
                image = "img/cubone.gif";
                number = "104";
                des = "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds."
                break;
            case "Beedrill":
                image = "img/beedrill.gif";
                number = "15";
                des = "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm."
                break;
            case "Butterfree":
                image = "img/butterfree.gif";
                number = "12";
                des = "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest."
                break;
            case "Articuno":
                image = "img/articuno.gif";
                number = "144";
                des = "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall."
                break;
            case "Zapdos":
                image = "img/zapdos.gif";
                number = "145";
                des = "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts."
                break;
        }
        var pokemons = $("<div id='p-info'></div>");
        var img = $("<img></img>");
        var nums = $("#num-box");

        img.attr("src", image);
        pokemons.append(img);
        nums.html("#" + number);
        info.append(des);
        pokemons.append(info);
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
            data: { format: "json-list" },
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
                var info = $("<div id='info'></div>")
                var nums = $("#num-box");
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
                        nums.html("#" + data[x]['number']);
                        info.append(data[x]['des'])
                        pokemons.append(info);
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
