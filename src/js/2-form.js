const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {};

const onFormFieldChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    console.log(`${fieldName} ${fieldValue}`)
    
    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-data', JSON.stringify(formData));
}

feedbackFormEl.addEventListener('input', onFormFieldChange);