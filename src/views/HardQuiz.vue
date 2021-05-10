<template>
    <div>
        <h1>Hard <span>Points: {{points.length}}/{{hardQuestions.length}} points</span></h1>
        <div id="allcards-container">    
            <QuestionCard
                v-for="item in hardQuestions" :key="item.id"
                :question="item.question"
                :answer="item.answer"
                :comment="item.comment"
                @update-points="updatePoints"
            />
        </div>
    </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard.vue'
export default ({
    components: {
        QuestionCard
    },
    data() {
        return {
            hardQuestions: [
                {id: 21, question:"A cara cara navel is a type of orange", answer:"true"},
                {id: 22, question:"There are five different blood groups", answer:"false", comment:"There are four: A, B, AB, and O"},
                {id: 23, question:"Cinderella was the first Disney princess", answer:"false", comment:"Snow White and the Seven Dwarfs was released first in December 1937"},
                {id: 24, question:"ASOS stands for As Seen On Screen", answer:"true"},
                {id: 25, question:"The Battle Of Hastings took place in 1066", answer:"true"},
                {id: 26, question:"H&M stands for Hennes & Mauritz", answer:"true"},
                {id: 27, question:"Canis lupur is the scientific name for a wolf", answer:"false", comment:"It's Canis lupus"},
                {id: 28, question:"K is worth four points in Scrabble", answer:"false", comment:" It's worth five"},
                {id: 29, question:"Alaska is the biggest American state in square miles", answer:"true", comment:"It spans a total area of 665,384 square miles. Texas comes in next with a total area of 268,596 square miles."},
                {id: 30, question:"Australia is wider than the moon", answer:"true", comment:"The moon sits at 3400km in diameter, while Australia's diameter from east to west is almost 4000km"}
            ],
            points: []
        }
    },
    methods: {
        updatePoints() {
           this.points.push(1)
        }
    }
})
</script>

