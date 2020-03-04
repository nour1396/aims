// when the form is submitted
function handleFormSubmission(event, formElm) {
    var event = event || window.event;
    event.preventDefault();
    // save to localStorage
    localStorage.setItem('PI_firstName', formElm.elements['PI_firstName'].value);
    formElm.submit();
}

document.getElementById('data-en-form').querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', function() {

        fetch('/data-en/draft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                field: input.parentNode.getAttribute('name') + '.' + input.getAttribute('name'),
                value: input.value
            })
        })
    })
})


/*
<fieldset name="personalInformation">
    <input name="PI_firstName" >
</fieldset>

to say personalInformation.PI_firstName
use this input.parentNode.getAttribute('name') + '.' + input.getAttribute('name'),
it just say,
select the input's parent (which is the fieldset) and get it's name(which is personalInformation) then
 + '.' + then get the name of the input which is PI_firstName
ok? تمام
*/



// 1. for every input in the form
// 2. on blur,  whcich is the opposite of focus, do
// 3. make an Http request to /data-en/draft with method POST, and content type is json (so i can pass json data)
// JSON.stringify is needed if you will send json data as the docs says
// 4. What will be sent to /data-en/draft is the field name and it's value