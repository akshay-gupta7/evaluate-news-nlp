import { checkForName } from './js/nameChecker'
//import { handleSubmit } from './js/formHandler'

//console.log(checkForName);
document.getElementById('generate').addEventListener('click', handleSubmit);



function handleSubmit(event) {
    event.preventDefault()
    const baseurl = 'https://api.meaningcloud.com/sentiment-2.1';
    const linktoarticle = document.getElementById('artlink').value;
    console.log("URL entered is", linktoarticle);
    const apiurl = '/api';
    const getapikey = async(url='',data={})=>{
        //const res = await fetch(apiurl)
        console.log("Reached here", url);
        const res = await fetch(url);
        try{
            const data = await res.json();
            console.log(data);
            
            let formdata = {};
            formdata["key"] = data.key;
            formdata["url"] = linktoarticle;
            formdata["lang"] = "en";

            const requestOptions = {
            method : 'POST',
            body: formdata,
            redirect: 'follow'
            };

            console.log("Formdata is",formdata);
            return data;
        }
        catch(error){
            console.log("error",error)
        }
    }
    const key=getapikey(apiurl,{});
    console.log("::: Form Submitted :::", key)
    /*fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/
    
}

alert("I EXIST")
console.log("CHANGE!!");
