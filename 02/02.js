const app = document.getElementById('app');

/* ------------------------------------------------ //
//                   INPUT BAR                      //
// ------------------------------------------------ */

// to make tag for icon
const iconTag = (name) => {
    let icon = document.createElement('i');
    icon.setAttribute('class', name);
    return icon;
}

// to create a input
const inputField = document.createElement('input');
inputField.placeholder = 'Enter Here';
inputField.title = 'Click Here To Enter The Content';
inputField.addEventListener('keydown', (capturedEvent) => {
    if (capturedEvent.key === 'Enter' && inputField.value != '') {
        dataTag();
    }
});


// to create a button
const buttonToSubmitInput = document.createElement('button');
buttonToSubmitInput.append(iconTag('fa fa-paper-plane'));
buttonToSubmitInput.addEventListener('click', () => {
    if (inputField.value != '') {
        dataTag();
    }
});

// to add combine shadow effect
const shadowDiv = document.createElement('div');
shadowDiv.setAttribute('class', 'shadow-div');
shadowDiv.append(
    inputField,
    buttonToSubmitInput
);

// to hold button and input together
const inputDiv = document.createElement('div');
inputDiv.setAttribute('class', 'input-bar');
inputDiv.append(
    shadowDiv
);


/* ------------------------------------------------ //
//                   DATA  BAR                      //
// ------------------------------------------------ */

let count = 1;

// to hold data in together
const dataDiv = document.createElement('div');
dataDiv.setAttribute('class', 'data-area');

// to create tag for input data
const dataTag = () => {
    // to prevent UI from breaking
    if (inputField.value.length > 35) {
        alert("Character Limit Exceeds...");
        inputField.value = inputField.value.slice(0, 35);
    } else {

        if (count > 9) {
            alert("Right Now No More Capacity Left, Soon It Will Be Fixed...");
        } else {
            // the data row
            dataRow = document.createElement('div');
            dataRow.setAttribute("class", "data-row");

            // the data count
            let dataListCount = document.createElement('p');
            dataListCount.innerHTML = count;
            dataListCount.setAttribute("class", "data-count")
            count++;

            // the data itself
            let element = document.createElement('p');
            element.innerHTML = inputField.value;
            element.setAttribute("class", "data-itself")

            // to push data inside data row
            dataRow.append(dataListCount, element);

            // to clear the field after entry
            inputField.value = '';

            // to push data inside data area
            dataDiv.append(dataRow)
        }
    }
}

// to add created elements to div with id 'app'
app.append(
    inputDiv,
    dataDiv
);