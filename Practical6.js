function getData(){
    let pname = document.querySelector("#petName").value;
    let age = document.querySelector("#petAge").value;
    let weight = document.querySelector("#petWeight").value;
    let type = document.querySelector("#Type").value;
    let like = document.querySelector("#like").value;
    
    
    function pet(pName,pAge,pWeight,pType,pLikes){
        return{
            Name : pName,
            Age : pAge,
            Weight : pWeight,
            Type : pType,
            Like : pLikes
        }
    }

    const obj = pet(pname,age,weight,type,like);
    console.log(obj)

    let str = JSON.stringify(obj);

    console.log("+------------------------------------------+");
    console.log("Converting Object into json....")
    console.log("+------------------------------------------+");

    console.log("JSON : " + str)
}