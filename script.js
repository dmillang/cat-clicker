    const elem1 = document.getElementById('cat-1__img');
    const elem2 = document.getElementById('cat-2__img');

    const catName1 = document.getElementById("cat-1__name").textContent = `Kitty Cat`;
    const catName2 = document.getElementById("cat-2__name").textContent = `Shy Cat`;

    let clickCount1 = 0;
    let clickCount2 = 0;

    const DOMCounter1 = document.getElementById("cat-1__counter");
    const DOMCounter2 = document.getElementById("cat-2__counter");

    elem1.addEventListener('click', function(){
        clickCount1 += 1;
        DOMCounter1.textContent = `Clicks: ${clickCount1}`;
        console.log(clickCount1);
    }, false);

    elem2.addEventListener('click', function(){
        clickCount2 += 1;
        DOMCounter2.textContent = `Clicks: ${clickCount2}`;
        console.log(clickCount2);
    }, false);