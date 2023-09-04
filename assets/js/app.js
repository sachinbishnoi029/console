for (let y = 1; y <= 10; y++) {
    console.log((5 * y));
    let numbers = 5 * y;
    let p = document.createElement("p");
    let list = document.createTextNode(numbers);
    p.appendChild(list);
    document.body.appendChild(p);
}