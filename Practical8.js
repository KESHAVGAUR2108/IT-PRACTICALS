$('.btn').click(function(){

    $('*').css({"margin":"0"})

    $('h1').css({"color":"white",
                "text-align":"center",
                "background-color":"black",
                "position":"sticky",
                "top":"0",
                "padding":"10px",
                "letter-spacing":"5px",
                "font-size":"50px",
                "font-family":"Times New Roman"});
    
    $('h2').css({"margin-top":"20px",
    "font-family":"Times New Roman",
    "text-align":"center",
    "font-size":"40px",
    "padding":"10px",
    "letter-spacing":"2px",
    "position":"sticky",
    "top":"80px",
    "background-color":"lightgray",  
    })
    
    $('#cdetails1').replaceWith("<li id = 'cdetails1'>"+$('#cdetails1').text()+"</li>")
    $('#cdetails2').replaceWith("<li id = 'cdetails2'>"+$('#cdetails2').text()+"</li>")
    $('#cdetails3').replaceWith("<li id = 'cdetails3'>"+$('#cdetails3').text()+"</li>")
    $('#cdetails4').replaceWith("<li id = 'cdetails4'>"+$('#cdetails4').text()+"</li>")
    
    $('li').css({"padding":"10px",
                "margin-top":"5px",
                "font-size":"18px",
                "list-style-type":"square"})
    
    $('h3').css({"margin-top":"20px",
    "font-family":"Times New Roman",
    "text-align":"center",
    "font-size":"40px",
    "padding":"10px",
    "letter-spacing":"2px",
    "position":"sticky",
    "top":"80px",
    "background-color":"lightgray",  
    })
    
    $('table,td,tr').css({"border":"2px solid black",
                        "border-collapse":"collapse",
                        "padding":"10px",
                        "margin":"auto",
                        "margin-top":"40px",
                        "text-align":"center"
                        })
                        
    $('thead').css({"font-weight":"bold",
    "font-size":"18px",
    "background-color":"gray",
    "padding":"100px"})
    
    $(".Ccourse").css("background-color","lightblue")
    $(".Ge").css("background-color","lightgreen")
    $(".SEC").css("background-color","orange")
    $(".AECC").css("background-color","tomato")
    $(".DSE").css("background-color","yellow")
    
    $('.btn').css({
        "position": 'relative',
        "left": "92%",
        "background-color":"rgb(19, 19, 184)",
        "border-radius": "7px",
        "font-size":"20px",
        "color":"white",
        "letter-spacing": "2px",
        "padding": "4px",
        "position":"sticky",
        "top":"40px",
    })

    $('.btn').hover(function(){
        $(this).css({"background-color": "rgba(9, 79, 139, 0.938)",
        "transform" : "scale(0.98)"});},
        function(){
            $(this).css("background-color","rgb(19, 19, 184)")
        }
    )
})

