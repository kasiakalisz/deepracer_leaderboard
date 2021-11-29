import FetchService from './FetchService';

/*-- Objects --*/
const fetchService = new FetchService();
/*-- /Objects --*/

async function submitForm(e, form) {
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('addleague');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);
    
    // 2.3 Build Headers
    const headers = buildHeaders();
    // 2.4 Request & Response
    const response = await fetchService.performPostHttpRequest(`https://h6ixi3zn9d.execute-api.eu-west-1.amazonaws.com/leagues`, headers, jsonFormData); // Uses JSON Placeholder
    console.log(response);
    // 2.5 Inform user of result
    if(response)
    alert(`league information saved.`)
    else
        alert(`An error occured.`);
}

async function submitTrack(e, form) {
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('addtrack');
    btnSubmit.disabled = true;
    
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);
    
    // 2.3 Build Headers
    const headers = buildHeaders();
    // 2.4 Request & Response
    const response = await fetchService.performPutHttpRequest(`https://h6ixi3zn9d.execute-api.eu-west-1.amazonaws.com/tracks`, headers, jsonFormData); // Uses JSON Placeholder
    console.log(response);
    // 2.5 Inform user of result
    if(response)
      alert(`track information saved.`)
    else
        alert(`An error occured.`);
}

async function submitParticipant(e, form) {
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('addparticipant');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);
    
    // 2.3 Build Headers
    const headers = buildHeaders();
    // 2.4 Request & Response
    const response = await fetchService.performPutHttpRequest(`https://h6ixi3zn9d.execute-api.eu-west-1.amazonaws.com/participants`, headers, jsonFormData); // Uses JSON Placeholder
    console.log(response);
    // 2.5 Inform user of result
    if(response)
      alert(`participant information saved.`)
    else
        alert(`An error occured.`);
}
async function submitlap(e, form) {
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('update_lap');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);
    
    // 2.3 Build Headers
    const headers = buildHeaders();
    // 2.4 Request & Response
    const response = await fetchService.performPostHttpRequest(`https://h6ixi3zn9d.execute-api.eu-west-1.amazonaws.com/participants/lap`, headers, jsonFormData); // Uses JSON Placeholder
    console.log(response);
    // 2.5 Inform user of result
    if(response)
      alert(`lap updated.`)
    else
        alert(`An error occured.`);
}

function buildHeaders(authorization = null) {
    const headers = {
        "Content-Type": "application/json",
        "Origin": "*", 
        "Access-Control-Allow-Origin":"*"
    };
    return headers;
}

function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
        jsonFormData[pair[0]] = pair[1];
    }
    return jsonFormData;
}
/*--/Functions--*/

/*--Event Listeners--*/
const sampleForm = document.querySelector("#sampleForm");
if(sampleForm) {
    sampleForm.addEventListener("submit", function(e) {
        submitForm(e, this);
    });
}
/*--Event Listeners--*/
const trackForm = document.querySelector("#trackForm");
if(trackForm) {
    trackForm.addEventListener("submit", function(e) {
        submitTrack(e, this);
    });
}
/*--Event Listeners--*/
const participantForm = document.querySelector("#participantForm");
if(participantForm) {
    participantForm.addEventListener("submit", function(e) {
        submitParticipant(e, this);
    });
}
/*--Event Listeners--*/
const lapForm = document.querySelector("#lapForm");
if(lapForm) {
    lapForm.addEventListener("submit", function(e) {
        submitlap(e, this);
    });
}


function getdata()
{
    var request = new XMLHttpRequest()
		
        request.open('GET', 'https://h6ixi3zn9d.execute-api.eu-west-1.amazonaws.com/leagues', true)
        var raw_response;
        request.onload = function () {
        // Begin accessing JSON data here
        raw_response = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {

            league_names_list = raw_response["Items"]
            var leaguelist = document.getElementById("league");

            for (var x = 0; x<league_names_list.length; x++)
            {
                var option = document.createElement("option");
                option.text = league_names_list[x]["leagueName"];
                option.value = x;
                leaguelist.options.add(option);
            }
            
        } else {
            console.log('error')
        }
        }
        request.send()
}



