let row=document.querySelector(".row"),close=document.querySelector(".close"),test=$(".asa").innerWidth(),links=$("ul li"),nameInputTouched=!1,emailInputTouched=!1,phoneInputTouched=!1,ageInputTouched=!1,passwordInputTouched=!1,repasswordInputTouched=!1,left=0;function openClose(){if($(".aside").css("marginLeft")===`-${test}px`){$(".aside").animate({marginLeft:"0px"},500);for(let e=0;e<5;e++)$(links).eq(e).animate({top:0},(e+5)*100);close.innerHTML='<i class="fa-solid fa-xmark"></i>'}else $(".aside").animate({marginLeft:`-${test}px`},500),$(links).animate({top:300}),close.innerHTML='<i class="fa-solid fa-bars"></i>'}async function getidMeal(e){var t=await (await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`)).json()).meals;window.scrollY=0;let a=[];for(let n=1;n<=20;n++)t[0][`strMeasure${n}`]&&" "!=t[0][`strMeasure${n}`]&&a.push(t[0][`strMeasure${n}`]);let i=[];for(let s=1;s<=20;s++)t[0][`strIngredient${s}`]&&" "!=t[0][`strIngredient${s}`]&&i.push(t[0][`strIngredient${s}`]);$(".loading").css("display","flex"),$(".loading").hide(800),$(window).scrollTop(0),displayMeal(t,function e(){let t="";for(let n=0;n<a.length;n++)t+=`<span class="badge recipe p-2 m-2">${a[n]}${i[n]}</span>`;return t}());"0px"==$(".aside").css("marginLeft")&&($(".aside").animate({marginLeft:`-${test}px`},500),$(links).animate({top:300}),close.innerHTML='<i class="fa-solid fa-bars"></i>')}function displayMeal(e,t){var a="";a=`
    <div class="col-md-4">
                <img src="${e[0].strMealThumb}" alt="corba" class="w-100 rounded-3">
                <h1 class="text-white">${e[0].strMeal}</h1>
            </div>
            <div class="col-md-8 text-white">
                <h2>Instructions</h2>
                <p>
                ${e[0].strInstructions}
                </p>
                <h2>Area : <span>${e[0].strArea}</span></h2>
                <h2>Category : <span>${e[0].strCategory}</span></h2>
                <h2>Recipes : </h2>
                <div class="recipes d-flex flex-wrap">
                ${t}
                        </div>
                <h2 class="mt-3">Tags :</h2>
                <div class="tags mt-4">
                    <span class="badge tag p-2">${null!=e[0].strTags?e[0].strTags:""}</span>
                </div>
                <div class="buttons mt-4">
                    <a href="${e[0].strSource}" target="_blank"><div class="btn-success text-white btn-you btn">
                    Source
                    </div>
                    </a>
                    <a href="${e[0].strYoutube}" target="_blank"><div class="btn-danger text-white btn-src btn">
                    Youtube
                    </div>
                    </a>
                </div>
            </div>`,document.querySelector(".rowtwo")&&(document.querySelector(".rowtwo").innerHTML=""),row.innerHTML=a}function SearchFullName(){$(".fullName").on("keyup",function(){Name(document.querySelector(".fullName").value)})}function SearchFirstName(){$(".firstLetter").on("keyup",function(){let e=document.querySelector(".firstLetter").value;""!==e&&FName(e)})}async function Name(e){displaySDN(await (await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`)).json()).meals)}async function FName(e){displaySDN(await (await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e}`)).json()).meals)}function displaySDN(e){let t="";if(e&&null!==e)for(let a=0;a<e.length;a++)t+=`
            <div class="col-lg-4 col-md-6 col-xl-3 pointer" onclick ="getidMeal(${e[a].idMeal})">
                <div class="w-100 position-relative overflow-hidden item">
                    <img src="${e[a].strMealThumb}" alt="food" class="w-100 rounded-3">
                    <div
                        class="layer position-absolute h-100 w-100  rounded-3 d-flex align-items-center justify-content-center">
                        <p>${e[a].strMeal}</p>
                    </div>
                </div>
            </div>`;document.querySelector(".rowtwo").innerHTML=t}async function CategoriesAPI(){displayCat(await (await (await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")).json()).categories)}function displayCat(e){let t="";for(let a=0;a<e.length;a++)t+=`
        <div class="col-lg-4 col-md-6 col-xl-3 pointer" onclick =" displayCatgories('${e[a].strCategory}')">
                <div class="w-100 position-relative overflow-hidden item">
                    <img src="${e[a].strCategoryThumb}" alt="food" class="w-100 rounded-3">
                    <div
                        class="layer position-absolute h-100 w-100 p-1 rounded-3 d-flex align-items-center justify-content-center flex-column">
                        <h2 class="h1">${e[a].strCategory}</h2>
                        <p class="fs-6 text-center">${e[a].strCategoryDescription.slice(0,150)}</p>
                    </div>
                </div>
            </div>`;row.innerHTML=t}async function displayCatgories(e){var t=await (await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e}`)).json()).meals;let a="";for(let n=0;n<t.length;n++)a+=`<div class="col-lg-4 col-md-6 col-xl-3 pointer text-center" onclick ="getidMeal(${t[n].idMeal})">
            <div class="w-100 position-relative overflow-hidden item">
                <img src="${t[n].strMealThumb}" alt="food" class="w-100 rounded-3">
                <div
                    class="layer position-absolute h-100 w-100  rounded-3 d-flex align-items-center justify-content-center p-1">
                    <p>${t[n].strMeal}</p>
                </div>
            </div>
        </div>`;row.innerHTML=a}async function AreaAPI(){displayAre(await (await (await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")).json()).meals)}function displayAre(e){let t="";for(let a=0;a<e.length;a++)t+=`<div class="col-lg-4 col-md-6 col-xl-3 pointer text-center text-white" onclick="displayArea('${e[a].strArea}')">
                <div class="w-100 position-relative overflow-hidden item">
                    <i class="fa-solid fa-house-laptop i-size"></i>
                </div>
                <h2>${e[a].strArea}</h2>
            </div>`;row.innerHTML=t}async function displayArea(e){var t=await (await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e}`)).json()).meals;console.log(t);let a="";for(let n=0;n<t.length;n++)a+=`<div class="col-lg-4 col-md-6 col-xl-3 pointer text-center" onclick ="getidMeal(${t[n].idMeal})">
            <div class="w-100 position-relative overflow-hidden item">
                <img src="${t[n].strMealThumb}" alt="food" class="w-100 rounded-3">
                <div
                    class="layer position-absolute h-100 w-100  rounded-3 d-flex align-items-center justify-content-center p-1">
                    <p>${t[n].strMeal}</p>
                </div>
            </div>
        </div>`;row.innerHTML=a}async function IngredientsAPI(){displayIngredientsAPI(await (await (await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")).json()).meals)}function displayIngredientsAPI(e){let t="";for(let a=0;a<20;a++)t+=`<div class="col-lg-4 col-md-6 col-xl-3 pointer text-center text-white" onclick="displayIngredientsAPII('${e[a].strIngredient}')" >
                <div class="w-100 position-relative overflow-hidden item">
                    <i class="fa-solid fa-drumstick-bite i-size"></i>
                </div>
                <h2 class="h4">${e[a].strIngredient}</h2>
                <p>${e[a].strDescription.slice(0,150)}</p>
            </div>`;row.innerHTML=t}async function displayIngredientsAPII(e){var t=await (await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e}`)).json()).meals;console.log(t);let a="";for(let n=0;n<t.length;n++)a+=`<div class="col-lg-4 col-md-6 col-xl-3 pointer text-center" onclick ="getidMeal(${t[n].idMeal})">
            <div class="w-100 position-relative overflow-hidden item">
                <img src="${t[n].strMealThumb}" alt="food" class="w-100 rounded-3">
                <div
                    class="layer position-absolute h-100 w-100  rounded-3 d-flex align-items-center justify-content-center p-1">
                    <p>${t[n].strMeal}</p>
                </div>
            </div>
        </div>`;row.innerHTML=a}function showContacts(){row.innerHTML=`<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `,submitBtn=document.getElementById("submitBtn"),document.getElementById("nameInput").addEventListener("focus",()=>{nameInputTouched=!0}),document.getElementById("emailInput").addEventListener("focus",()=>{emailInputTouched=!0}),document.getElementById("phoneInput").addEventListener("focus",()=>{phoneInputTouched=!0}),document.getElementById("ageInput").addEventListener("focus",()=>{ageInputTouched=!0}),document.getElementById("passwordInput").addEventListener("focus",()=>{passwordInputTouched=!0}),document.getElementById("repasswordInput").addEventListener("focus",()=>{repasswordInputTouched=!0})}function inputsValidation(){nameInputTouched&&(nameValidation()?document.getElementById("nameAlert").classList.replace("d-block","d-none"):document.getElementById("nameAlert").classList.replace("d-none","d-block")),emailInputTouched&&(emailValidation()?document.getElementById("emailAlert").classList.replace("d-block","d-none"):document.getElementById("emailAlert").classList.replace("d-none","d-block")),phoneInputTouched&&(phoneValidation()?document.getElementById("phoneAlert").classList.replace("d-block","d-none"):document.getElementById("phoneAlert").classList.replace("d-none","d-block")),ageInputTouched&&(ageValidation()?document.getElementById("ageAlert").classList.replace("d-block","d-none"):document.getElementById("ageAlert").classList.replace("d-none","d-block")),passwordInputTouched&&(passwordValidation()?document.getElementById("passwordAlert").classList.replace("d-block","d-none"):document.getElementById("passwordAlert").classList.replace("d-none","d-block")),repasswordInputTouched&&(repasswordValidation()?document.getElementById("repasswordAlert").classList.replace("d-block","d-none"):document.getElementById("repasswordAlert").classList.replace("d-none","d-block")),nameValidation()&&emailValidation()&&phoneValidation()&&ageValidation()&&passwordValidation()&&repasswordValidation()?submitBtn.removeAttribute("disabled"):submitBtn.setAttribute("disabled",!0)}function nameValidation(){return/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value)}function emailValidation(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value)}function phoneValidation(){return/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value)}function ageValidation(){return/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value)}function passwordValidation(){return/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value)}function repasswordValidation(){return document.getElementById("repasswordInput").value==document.getElementById("passwordInput").value}$(function(){async function e(){(function e(t){let a="";for(let n=0;n<t.length;n++)a+=`<div class="col-lg-4 col-md-6 col-xl-3 pointer" onclick ="getidMeal(${t[n].idMeal})">
                <div class="w-100 position-relative overflow-hidden item">
                    <img src="${t[n].strMealThumb}" alt="food" class="w-100 rounded-3">
                    <div
                        class="layer position-absolute h-100 w-100  rounded-3 d-flex align-items-center justify-content-center">
                        <p>${t[n].strMeal}</p>
                    </div>
                </div>
            </div>`;row.innerHTML=a})(await (await (await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")).json()).meals)}$(".loading").hide(1e3),e(),$(".logo").on("click",function(){location.reload()})}),$(".close").on("click",function(){openClose()}),$("#Search").on("click",function(){$(".aside").css("marginLeft"),row.innerHTML="";let e=`<div class="col-md-6">
                <input type="text" name=""  placeholder="Search By Name" class="input-group p-1 rounded-2 px-3 bg-transparent border-1 border-white text-white fullName">
            </div>
            <div class="col-md-6">
                <input type="text" name=""  placeholder="Search By First Letter" class="input-group p-1 rounded-2 px-3 bg-transparent border-1 border-white text-white firstLetter" maxlength="1" >
            </div>
            `;openClose(),row.innerHTML=e,SearchFullName(),SearchFirstName()}),$("#Categories").on("click",function(){$(".aside").css("marginLeft"),row.innerHTML="",openClose(),CategoriesAPI()}),$("#Area").on("click",function(){$(".aside").css("marginLeft"),row.innerHTML="",openClose(),AreaAPI()}),$("#Ingredients").on("click",function(){$(".aside").css("marginLeft"),row.innerHTML="",openClose(),IngredientsAPI()}),$("#Contact").on("click",function(){$(".aside").css("marginLeft"),row.innerHTML="",openClose(),showContacts()});