/*function handleSubmit(event) {
    event.preventDefault()
    const baseurl = 'https://api.meaningcloud.com/sentiment-2.1'
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //checkForName(formText)
    const apiurl = '/api';
    const getapikey = async(apiurl)=>{
        const res = await fetch(apiurl)
        try{
            const data = await res.json();
            console.log(data);
            return data;

        }
        catch(error){
            console.log("error",error)
        }
    }
    console.log("::: Form Submitted :::", getapikey)
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}
*/
export { handleSubmit }
