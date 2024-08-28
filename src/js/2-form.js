const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {};

const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null) {
    return;
    }

    formData = formDataFromLS;

    for (const key in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(key)) {
            feedbackFormEl.elements[key].value = formDataFromLS[key];
        }
    }
};

fillFormFields();

const onFormFieldChange = event => {
    const fieldName = event.target.name.trim();
    const fieldValue = event.target.value.trim();
    
    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    if (feedbackFormEl.elements.email.value === '' || feedbackFormEl.elements.message.value === '') {
        alert('Заповніть всі поля');
        return;
    }   

    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    formData = {};
    };

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);