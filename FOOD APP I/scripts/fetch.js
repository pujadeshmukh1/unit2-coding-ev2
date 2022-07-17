let getData = async (url) =>{
    let res = await fetch(url);
    let data= await res.json();
    return data.meals;   
}

let append = (data,cont)=>{
    data.forEach(({strMealThumb,strMeal,idMeal})=>{
    let img=document.createElement("img");
    img.src=strMealThumb;
   
    let t=document.createElement("h2");
    t.innerText=`strMeal : ${strMeal}`;
   
    let p=document.createElement("p");
    p.innerText=`idMeal :${idMeal}`;
   
    let div=document.createElement("div");
    div.append(img,t,p);
    cont.append(div)
    })  
    }
    export {getData,append}; 