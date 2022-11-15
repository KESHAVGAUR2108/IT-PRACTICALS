var btn = document.getElementById('btn')
btn.addEventListener('click',getData);

function getData(){
    var xhr = new XMLHttpRequest()
    xhr.open('GET','Pets_Data.json',true)
    xhr.send()

    xhr.onload = function(){
        if(xhr.status === 200){
            ev = JSON.parse(xhr.responseText);

            var content = '';
            for(var i=0;i<ev.data.length;i++)
            {
                content = ''
                content += `<table>
                <h2>Pet`+(i+1)+`</h2>`+`
                <tr><td>Name : `+ev.data[i].Name+`</td></tr>`+`
                <tr><td>Age : `+ev.data[i].Age+`</td></tr>`+`
                <tr><td>Weight : `+ev.data[i].Weight+` kg</td></tr>`+`
                <tr><td>Type : `+ev.data[i].Type+`</td></tr>`+`
                <tr><td>Like : `+ev.data[i].Like+`</td></tr>`+`
                <table><br><hr>
                `
                var box = document.createElement('div')
                box.setAttribute('class','container');
                box.innerHTML = content
                body.append(box)
            }
        }
        else{
            document.write("ERROR 404! Server Not Found")
        }   
        btn.remove();
    }
}