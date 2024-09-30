function solve() {
    let points = 0;
    let currSection = 0;
    let question = document.querySelectorAll('section');
    let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"]; 
   
    Array.from(document.querySelectorAll('.answer-text'))                                                
        .map((x) => x.addEventListener('click', (answer) => {
             if (correctAnswers.includes(x.textContent)) {                                               
                points++;
            };
            question[currSection].style.display = 'none';
            currSection++;
   
            currSection !== 3
                ? question[currSection].style.display = 'block'
                : printResult(points);
        }));

    function printResult(points) {
        document.querySelector("#results").style.display = 'block';
        let text = '';

        points === 3
            ? text = 'You are recognized as top JavaScript fan!'
            : text = `You have ${points} right answers`;

        document.querySelector("#results > li > h1").textContent = text;
    };
  };
