const baseurl = "https://api.apiopen.top"
const appkey = "00d91e8e0cca2b76f515926a36db68f5"

function get(url){
    return fetch(url,{
        method:"GET"
    }).then(response => {
        return handleResponse(url,response);
    }).catch(err =>{
        console.error('Request failed.');
        return {error:{message:"Request failed."}};
    })
}
function post(url, data) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(response => {
      return handleResponse(url, response);
    }).catch(err => {
      console.error(`Request failed. Url = ${url} . Message = ${err}`);
      return {error: {message: "Request failed."}};
    })
  }
  
function handleResponse(url, response) {
    if(response.status < 500){
      return response.json();
    }else{
      console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
      return {error: {message: "Request failed due to server error "}};
    }
  }

  
export {get,post}
export {baseurl,appkey}