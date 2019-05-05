# Cat clicker

The simplest image clicker possible. Also includes a visual counter on top of the image.

#### To count how many times the image has been clicked
```
html:
<img id="img-elem" src="#">
```
```
js:
const elem = document.getElementById('img-elem');
let clickCount = 0;
elem.addEventListener('click', function(){
            clickCount += 1;
            console.log(clickCount);
        }, false);
```

#### To display on the document how many times the image has been clicked
```
html:
const DOMCounter = document.getElementById("counter");
```
```
js:
        const DOMCounter = document.getElementById("counter");
        elem.addEventListener('click', function(){
            clickCount += 1;
            DOMCounter.textContent = `clicks: ${clickCount}`; // This was added to the function to display number of clicks
            console.log(clickCount);
        }, false);
```