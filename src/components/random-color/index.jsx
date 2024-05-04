import React, { useEffect, useState } from 'react';

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtiliy(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor(color) {
        // since the color will be like #458595 we will use random numbers in an array from 0-9 and alfabets
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtiliy(hex.length)];
        }
        //console.log(hexColor);  to check that the code is correct

        setColor(hexColor)
    }

    function handleCreateRandomRgbColor(color) {

        const r = randomColorUtiliy(256)
        const g = randomColorUtiliy(256)
        const b = randomColorUtiliy(256)

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

        useEffect (() => {
            if(typeOfColor === 'rgb'){ handleCreateRandomRgbColor ()}
            else { handleCreateRandomHexColor()}
        }, [typeOfColor])

    return (

        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: color,
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')} >Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor}>Generate random Color</button>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '20px',
                    marginTop: '50px',
                    flexDirection: 'column',
                    gap: '20px',

                }}>
                    <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
                    <h1>{color}</h1>
                </div>
        </div>
    );
}



{/* 

Sure, let's break down the `RandomColor` component step by step:

1. **State Initialization:**
   - We use the `useState` hook to define two state variables: `typeOfColor` and `color`.
   - `typeOfColor` is initialized to `'hex'`, indicating that the initial color type is hexadecimal.
   - `color` is initialized to `'#000000'`, representing the initial color as black in hexadecimal format.

2. **Utility Function for Random Number Generation:**
   - The `randomColorUtility` function generates a random number within a specified range. It's used later to generate random RGB color values and to pick random characters for hexadecimal colors.

3. **Handler Functions for Generating Colors:**
   - `handleCreateRandomHexColor`: This function generates a random hexadecimal color. It iterates six times to pick random characters from the hexadecimal array and constructs a hexadecimal color string.
   - `handleCreateRandomRgbColor`: This function generates a random RGB color. It generates random values for red, green, and blue components within the range [0, 255] and constructs an RGB color string.

4. **Effect for Color Generation:**
   - We use the `useEffect` hook to trigger color generation whenever the `typeOfColor` state changes.
   - If `typeOfColor` is `'rgb'`, it calls `handleCreateRandomRgbColor`. Otherwise, it calls `handleCreateRandomHexColor`.

5. **Button Click Handlers:**
   - Two buttons are provided to switch between generating hexadecimal and RGB colors. Clicking on each button sets the `typeOfColor` state accordingly.
   - Another button is provided to generate a random color based on the selected color type. It checks the current value of `typeOfColor` and calls the appropriate handler function.

6. **Visual Representation:**
   - The background color of the component is set to the generated color.
   - Text elements display the type of color (HEX or RGB) and the generated color value.

7. **Styling:**
   - Styling is applied to center the content vertically and horizontally within the component.
   - The content is displayed in a column layout with a gap of 20px between elements.

Overall, this component provides a simple interface for generating random colors and displays the generated color along with its type. It's a straightforward implementation using React hooks for state management and effects.

*/}


{/*  
random color
 function handleCreateRandomHexColor(color) {
        // since the color will be like #458595 we will use random numbers in an array from 0-9 and alfabets
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        //console.log(hexColor);  to check that the code is correct

        setColor(hexColor)
    }
*/}