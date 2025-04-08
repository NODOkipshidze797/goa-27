for (let i = 0; i < 10; i++) {
    let div = document.createElement("div"); 
    let p = document.createElement("p"); 
    p.textContent = "ეს არის p თეგი #" + (i + 1); 
    div.appendChild(p); 
    document.body.appendChild(div); 
}
document.querySelectorAll("div p").forEach(p => {
    p.style.fontSize = "3px"; 
});
