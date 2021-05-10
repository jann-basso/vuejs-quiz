<template>
    <div>
        <h1>So, what is this?</h1>
        <div id="about-container">
            <p>Project made by <a class='linkabout' href="https://github.com/jann-basso">Jann Basso</a> to practice Vue.js. Other technologies used:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>VSCode</li>
            </ul>
            <a class='linkabout' href="https://www.cosmopolitan.com/uk/worklife/a32612392/best-true-false-quiz-questions/">All questions/answers were taken from here :)</a>
        </div>
    </div>
</template>

<style>
    h1 {
        text-shadow: 2px 3px 5px #cc7a00;
        text-align: center;
        font-family: "Copperplate";
        font-size: 40px;
        margin: 30px 0 0;
    }

    #about-container {
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        color: #636361; 
        background-color: #ffcc80;
    }

    .linkabout {
        text-decoration: none;
        color: #636361;
        font-weight: bold;
    }

    .linkabout:hover {
       background-color: #2c7e87;
       padding: 2px;
       color: white;
    }

</style>