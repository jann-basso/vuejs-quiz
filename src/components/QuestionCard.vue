<template>
    <div>
        <h4>{{question}}</h4>
        <button @click="selectedAnswer('true')" v-bind:disabled="clicked" >True</button>
        <button @click="selectedAnswer('false')" v-bind:disabled="clicked">False</button>
        <p class="message">{{message}}</p>
        <p class="note">{{messageNote}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            question: String,
            answer: Boolean,
            comment: String,
        },
        data() {
            return {
                clicked: false,
                userAnswer: "",
                message: "",
                messageNote: "",
            }   
        },
        methods: {
            ifThereIsAComment() {
                if(this.comment) {
                    this.messageNote = this.comment
                }
            },
            selectedAnswer(userAnswer) {
                this.clicked = true
                this.userAnswer = userAnswer

                if(this.userAnswer == this.answer) {
                    this.message = "CONGRATS! It is indeed " + this.answer
                    this.ifThereIsAComment() 
                    this.$emit("update-points")
                } else {
                    this.message = "YOU KNOW NOTHING :) It is " + this.answer
                    this.ifThereIsAComment()
                }
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: #ffcc80;
        padding: 10px;
        color: #636361;
        text-align: center;
    }

    button {
        background-color: #2c7e87;
        color: white;
        border: none;
        border-radius: 2px;
        padding: 7px;
        margin: 3px;
        font-weight: bold;
    }

    .message {
        color: #2c7e87;
        font-weight: bold;
    }

    .note {

    }

</style>