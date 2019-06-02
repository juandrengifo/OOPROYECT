const createCustomElement = (element, attributes, children) => {
    let customElement = document.createElement(element);
    if(children !== undefined) children.forEach(e => {
        if(e.nodeType){
            if(e.nodeType == 1 || e.nodeType == 11) customElement.appendChild(e);
        }
        else{
            customElement.innerHTML += e;
        }
    });
    addAttributes(customElement, attributes);
    return customElement;
};

const addAttributes = (element, attrObj) => {
    for(let attr in attrObj){
        if(attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
    }
};

const printModal = content => {
    const modalContentElement = createCustomElement('div', {
        id: 'ed-modal-content',
        class: 'ed-modal-content'
    }, [content]);
    const modalContainerElement = createCustomElement('div', {
        id: 'ed-modal-container',
        class: 'ed-modal-container'
    }, [modalContentElement]);
    document.body.appendChild(modalContainerElement);
    const removeModal = () => document.body.removeChild(modalContainerElement);
    modalContainerElement.addEventListener('click', e => {
        if(e.target == modalContainerElement) removeModal();
    });
};

//Appearance time
const labelAppearanceTime = `<label>Appearance time</label>`;
const inputAppearanceTime  = createCustomElement('input', {
    type: 'text',
    name: 'appearanceTime',
    placeholder: 'Appearance time'
}, []);

//Landing time earlier
const labelLandingTimeEarlier = `<label>Landing time earlier</label>`;
const inputLandingTimeEarlier  = createCustomElement('input', {
    type: 'text',
    name: 'landingTimeEarlier',
    placeholder: 'Landing time earlier'
}, []);

//Optimum landing time
const labelOptimumLandingTime = `<label>Optimum landing time</label>`;
const inputOptimumLandingTime  = createCustomElement('input', {
    type: 'text',
    name: 'optimumLandingTime',
    placeholder: 'Optimum landing time'
}, []);

//Later landing time
const labelLaterLandingTime = `<label>Later landing time</label>`;
const inputLaterLandingTime = createCustomElement('input', {
    type: 'text',
    name: 'laterLandingTime',
    placeholder: 'Later landing time'
}, []);

//Cost per unit of time to land before the optimal time
const labelCostToLandBeforeOptimalTime = `<label>Cost per unit of time to land before the optimal time</label>`;
const inputCostToLandBeforeOptimalTime = createCustomElement('input', {
    type: 'text',
    name: 'costToLandBeforeOptimalTime',
}, []);

//Cost per unit of time to land after the optimal time
const labelCostToLandAfterOptimalTime = `<label>Cost per unit of time to land after the optimal time</label>`;
const inputCostToLandAfterOptimalTime = createCustomElement('input', {
    type: 'text',
    name: 'costToLandAfterOptimalTime',
}, []);

//Submit
const inputSubmit = createCustomElement('input', {
    type: 'submit',
    value: 'Add'
}, []);

const form = createCustomElement('form', {
    action: '#',
    class: 'formAddAirplane'
}, [labelAppearanceTime, inputAppearanceTime, labelLandingTimeEarlier, inputLandingTimeEarlier, labelOptimumLandingTime, inputOptimumLandingTime, labelLaterLandingTime, inputLaterLandingTime, labelCostToLandBeforeOptimalTime, inputCostToLandBeforeOptimalTime, labelCostToLandAfterOptimalTime, inputCostToLandAfterOptimalTime, inputSubmit])


document.getElementById('addAirplane').addEventListener('click', () => {
    printModal(form);
});