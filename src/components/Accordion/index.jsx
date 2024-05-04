import React, { useState } from 'react';
import data from './data'
import './styles.css'
{/* always explain the apporach that you will take. so first of all since the accordian will be the first app on the page, we will creat the function her as a component and put in in the app.js to be rendered  */ }


export default function Accordion() {
    // Single selection for accordion
    // First, we create a state instance
    // we started the use state with null because we are not selecting anything yet
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelections] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)


    }
    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId)

        if (findIndexofCurrentId === -1) {
            // If the item is not in the array, add it
            copyMultiple.push(getCurrentId);
        } else {
            // If the item is already in the array, remove it
            copyMultiple.splice(findIndexofCurrentId, 1);
        }

        // Update the state with the new array
        setMultiple(copyMultiple);

        console.log(findIndexofCurrentId);
    }
    console.log(selected, multiple)
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelections(!enableMultiSelection)}>Enable Multi-Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">
                                <div onClick={enableMultiSelection
                                    ? () => handleMultiSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                                }
                                    className='title'>
                                    <h3>{dataItem.question} </h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                        <div className="content">{dataItem.answer}</div> : null
                                }
                            </div>
                        ))
                    ) : (<div>no data found !</div>
                    )}

            </div>
        </div>
    );
}




{/* USE .MAP() TO CREATE NEW ELEMENT STEP 1

This code is a React component that renders an accordion UI based on the provided `data` array. Let's break it down step by step:

1. `<div className="wrapper">...</div>`: This is a wrapper `<div>` with the class name "wrapper". It wraps the entire accordion component.

2. `<div className="accordion">...</div>`: Inside the wrapper, there's another `<div>` with the class name "accordion". This div contains all the accordion items.

3. `{ data && data.length > 0 ? ... : ... }`: This is a ternary conditional operator. It checks if `data` exists and has a length greater than 0. If this condition is true, the expression before the `:` is executed; otherwise, the expression after the `:` is executed.

4. `data && data.length > 0`: This part checks if `data` exists and if its length is greater than 0. It's a guard clause to prevent accessing the `data` array if it's `null` or empty.

5. `data.map((dataItem) => ... )`: If the condition is true (i.e., `data` exists and has items), the `map()` function is called on the `data` array. This iterates over each item in the `data` array and returns a new array of React elements.

6. `<div className="item">...</div>`: For each item in the `data` array, a `<div>` element with the class name "item" is created. This represents each accordion item in the UI.

7. `<div className='title'>...</div>`: Inside each `item` div, there's another `<div>` with the class name "title", containing an `<h3>` element displaying the question from the `dataItem`.

8. `<span>+</span>`: Inside each `title` div, there's a `<span>` element with the text "+". This is typically used to indicate whether an accordion item is expanded or collapsed.

9. `: <div>no data found !</div>`: If the condition (`data && data.length > 0`) is false (i.e., `data` is `null` or empty), a `<div>` element with the text "no data found !" is rendered.

Overall, this component conditionally renders accordion items based on the existence and length of the `data` array. If `data` exists and has items, it maps over each item to create accordion items with a title and an expand/collapse indicator; otherwise, it displays a message indicating that no data is found. */}

{/* STEP 2

CREATE AN EVENT HANDLER  "HANDLESINGLESELECTION"  THEN CREATE AN EVENT LISTLNER TO TARGET THE ID
CHAT GPT "The reason for having a function inside the event listener is to handle the event properly and pass additional data, in this case, the `dataItem.id`, to the function `handleSingleSelection`.

Let's break down the specific part of the code you're asking about:

```jsx
<div onClick={() => handleSingleSelection(dataItem.id)} className='title'>
```

Here, we have an `onClick` event listener attached to the `<div>` element. When this `<div>` is clicked, the function `handleSingleSelection` is called. 

The reason for using an arrow function `() => ...` here is to create a new function instance for each `onClick` event. This is important because it allows us to pass arguments (`dataItem.id` in this case) to the `handleSingleSelection` function.

If we directly call `handleSingleSelection(dataItem.id)` without the arrow function, it would be called immediately when the component renders, not when the `<div>` is clicked, and it wouldn't have access to the `dataItem.id`.

So, the function inside the event listener is necessary to ensure that `handleSingleSelection` receives the correct `dataItem.id` when the `<div>` is clicked."
*/}

{/* STEP 3 you setSelected(getCurrentId) the go to then create another div in a conditional and render {dataItem.answer}
that will render the answer if you click on the item, but will not close

to close the answer you use this code  setSelected(getCurrentId === selected ? null : getCurrentId)
*/}

{/* when we create the button for multiple selection, we then go to css and add flex direction colum to take the button up */ }

{/* so we are creating two states, one is to select multiple ids and the other is to store the multiple ids.

firstly we will enable the multiple selection(onClick={()=> handlemult...})

then we create the event handler function that will also get the current id.*/}