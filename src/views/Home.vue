<template>
    <div>
        <h1>True or False Quiz</h1>
        <div id="chooselevel">
            <p>How dificult can you get to ?</p>
            <nav>
                <div class='levelcontainer'><router-link class='level' :to="{name:'easy-quiz'}">Easy</router-link></div>
                <div class='levelcontainer'><router-link class='level' :to="{name:'medium-quiz'}">Medium</router-link></div> 
                <div class='levelcontainer'><router-link class='level' :to="{name:'hard-quiz'}">Hard</router-link></div>
            </nav>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        text-shadow: 2px 3px 5px #cc7a00;
        text-align: center;
        font-family: "Copperplate";
        font-size: 40px;
        margin: 30px 0 0;
    }

    #chooselevel {
        background-color: #2c7e87;
        width: 60%;
        margin: 0 auto;
        padding: 20px;
    }

    p {
        color: white;
        text-align: center;
        font-size: 18px;
    }

    nav {
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .levelcontainer {
        background-color: #cc7a00;
        width: 120px;
        margin: 5px;
        height: 50px;
        border-radius: 2px;   
    }

    .levelcontainer:hover {
        background-color: #ffcc80;
    }

    .level {
        text-decoration: none;
        color: white; 
        line-height: 50px;
    }


</style>