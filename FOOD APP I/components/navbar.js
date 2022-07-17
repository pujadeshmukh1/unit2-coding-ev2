let navbar = ()=>{
    return `
   
    <img src="https://www.bing.com/th?id=OIP.bdj6w6Sfi_gS6xfMEwCK3QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"/ class="logo">
    <img src="https://c.tenor.com/StwFLN2BQ94AAAAj/yellow-cab-yellow-cab-pizza.gif"/ class="logo1">
    <input type="text" placeholder="search" id="query" oninput="debouncing(main, 1000)">
   
 <h3>
    <a href="home.html">Home</a>
</h3>
<h3>
    <a href="ReceipesoftheDay.html">Receipes of the Day</a>
</h3>
<h3>
    <a href="random.html">Random Receipes</a>
</h3>
<h3>
    <a href="signup.html">Signup</a>
</h3>
<h3>
    <a href="">LogIn</a>
</h3>


`;

}

export default navbar;  //default export - only export one componens and rename it
