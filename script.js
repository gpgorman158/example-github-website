const rob = document.createElement('img');
const gerald = document.createElement('img');
rob.src = 'https://mpng.subpng.com/20180212/vve/kisspng-parachuting-stock-illustration-illustration-vector-yellow-parachute-cartoon-boy-pattern-5a815b8a9f58b6.1382610015184270186527.jpg';
gerald.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbCTlu-huOLxVkpw8PswPsSP8_HsJCtqoJQ&usqp=CAU';
rob.id = "rob";
gerald.id = "gerald";
rob.style.height = '50px';
rob.style.width = '100px';
gerald.style.height = '50px';
gerald.style.width = '100px';
rob.style.position = 'absolute';
gerald.style.position = 'absolute';
rob.style.left = '866px';
rob.style.top = '100px';
gerald.style.left = '333px';
gerald.style.top = '100px';



document.addEventListener("keydown", function (e){
    if (e.key === "Enter") {
        addSkydivers();
    }
});

function addSkydivers() {
    //add two images at specific spots in the background
    document.body.append(rob);
    document.body.append(gerald);
    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = "Press UP to dock! <br>Press DOWN to separate!";
    document.body.append(h1);
}



document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      dock();
    }
});

function dock() {
    const rightNumbers = gerald.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    const leftNumbers = rob.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 650) {
      rob.style.left = `${left - 1}px`;
    }
    if (right < 550) {
      gerald.style.left = `${right + 1}px`;
    }
  }

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      separate();
    }
});

function separate() {
    const rightNumbers = gerald.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    const leftNumbers = rob.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 866) {
      rob.style.left = `${left + 1}px`;
    }
    if (right > 333) {
      gerald.style.left = `${right - 1}px`;
    }
  }