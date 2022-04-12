//import { checkForName } from './js/nameChecker'
//import { handleSubmit } from './js/formHandler'

//console.log(checkForName);
document.getElementById('generate').addEventListener('click', handleSubmit);



function handleSubmit(event) {
    event.preventDefault();
    
    //console.log("URL entered is", linktoarticle);
    const apiurl = '/api';
    const getapikey = async(url='',data={})=>{
        //const res = await fetch(apiurl)
        console.log("Reached here", url);
        const res = await fetch(url);
        try{
            const data = await res.json();
            console.log(data);
            /*
            
            */
            return data;
        }
        catch(error){
            console.log("error",error)
        }
    }
    const key=getapikey(apiurl,{});
    const form=key.then((values)=>{
        //console.log("balue is", values);
        const linktoarticle = document.getElementById('artlink').value;
        let formdata = {};
        formdata["key"] = values.key;
        formdata["url"] = linktoarticle;
        formdata["lang"] = "en";
        console.log("Formdata is",formdata);
        return formdata;
    });
    const resfromapi=form.then((formvalues)=>{
        const baseurl = 'https://api.meaningcloud.com/sentiment-2.1?';
        const finalurl= baseurl + "key=" + formvalues.key + "&url=" + formvalues.url + "&lang=en";
        console.log("Final url is ", finalurl);
        const resfrommeaningcloud = async(url='', data={})=>{
            //console.log("reaching here",data);
            const res = await fetch(url)
            try{
                const data= await res.json();
                console.log("data is", data);
                const sentiment={
                    agreement: data.agreement,
                    confidence: data.confidence,
                    subjectivity: data.subjectivity,
                    irony: data.irony
                    
                }
                console.log("sentiment is ", sentiment);
                document.getElementById("results").innerHTML="Agreement:" + sentiment.agreement + " Confidence: " + sentiment.confidence + " Subjectivity: " + sentiment.subjectivity; 
                return sentiment;
            }
            catch(error){
                console.log("error", error);
            }
        };
        const sentiment = resfrommeaningcloud(finalurl);
        
        return sentiment;
            
        });
}
    /*fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/
    


alert("I EXIST")
console.log("CHANGE!!");
