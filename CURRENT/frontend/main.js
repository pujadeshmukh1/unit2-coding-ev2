
//i want to save my data to masai database
//0. get the data
//1 array of object or signup data obj
//2 where to post 


  function Register(event){
    event.preventDefault()
    let signup_data=
    {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        username:document.getElementById("username").value,
        mobile:document.getElementById("moblie").value,
        description:document.getElementById("description").value,
    };
    //who needs data? -object foemat.
    //json format
    signup_data=JSON.stringify(signup_data) 
    
   // let signup_api_link='https://masai-api-mocker.herokuapp.com/auth/register';
    
    //fetch
    //custom setting object
    //GET or POST 
   fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
    method:'POST',
    body:signup_data,
    headers:
    {
    'Content-Type':'application/json'   //headers gives the backend
    },
    
    })

    .then((response)=>{
    return response.json();
    })
    .then((response)=>{
        console.log(response)
    })
    }
    
    
    
    
    // login function
  function Login(event){
    event.preventDefault()
        let formdata={
            username:document.getElementById('login-username').value,
            password:document.getElementById('login-password').value,
        };
        login_data=JSON.stringify(formdata);
      
      fetch("https://masai-api-mocker.herokuapp.com/auth/login",{  
        method:'POST',
        body:login_data,
        headers:{
        'Content-Type':'application/json'   //headers gives the backend
    },
    
    })
    // let data=await response.json()
    // console.log('data',data)
    .then((response)=>{
    return response.json();
    })
    .then((response)=>{
        console.log(response)
        getMyProfile(response, formdata)
    })
    .catch((error)=>{
        console.log(error)   
    })
    
    }
    

  function getMyProfile({token}, {username}){
 fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
    headers:{
    Authorization:`Bearer ${token}`,
    },

 })
 .then((res)=>{
 return res.json();
 })
 .then((res)=>{
    console.log(res);
 })
 .catch((err)=>{
    console.log(err.message)
 })
  }