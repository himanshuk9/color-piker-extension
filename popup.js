
const btn = document.querySelector('.changebtn');
const colorgrid = document.querySelector('.colorgrid');
const colorvalue = document.querySelector('.colorvalue');

btn.addEventListener('click', async () => {
    try {
        // Create an EyeDropper instance and open it ...api hh
        const eyeDropper = new EyeDropper();
        const result = await eyeDropper.open(); // This will open the color picker

        // Display the selected color
        colorgrid.style.backgroundColor = result.sRGBHex; // Apply the color to the grid
        colorvalue.textContent = result.sRGBHex; // Display the color value
    } catch (err) {
        console.error('Error picking color:', err);
    }
});


