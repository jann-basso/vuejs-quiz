<template>
    <div>
        <h1>Easy  <span>Points: {{points.length}}/{{easyQuestions.length}} points</span></h1>
        <div id="allcards-container">
            <QuestionCard
                v-for="item in easyQuestions" :key="item.id"
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
            easyQuestions: [
                {id: 1, question:"Prince Harry is taller than Prince William", answer:"false", comment:"Prince William is 1.91m, Prince Harry is 1.86m"},
                {id: 2, question:"The star sign Aquarius is represented by a tiger", answer:"true"},
                {id: 3, question:"Meryl Streep has won two Academy Awards", answer:"false", comment:"She's won three! She won Best Actress for The Iron Lady in 2012, Best Actress for Sophie's Choice in 1983, Best Supporting Actress for Kramer vs. Kramer in 1980."},
                {id: 4, question:"Marrakesh is the capital of Morocco", answer:"false", comment:"It's Rabat"},
                {id: 5, question:"Idina Menzel sings 'let it go' 20 times in 'Let It Go' from Frozen", answer:"false", comment:"She sings it 21 times!"},
                {id: 6, question:"Waterloo has the greatest number of tube platforms in London", answer:"false"}, 
                {id: 7, question:"M&M stands for Mars and Moordale", answer:"false", comment:"M&M stands for Mars and Murrie"},
                {id: 8, question:"Gin is typically included in a Long Island Iced Tea", answer:"true", comment:"As is vodka, white rum, lemon juice, triple sec, sugar syrup and Coca-Cola"},
                {id: 9, question:"The unicorn is the national animal of Scotland", answer:"true"},
                {id: 10, question:"There are two parts of the body that can't heal themselves", answer:"false", comment:"There's only one: the teeth"}
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

<style>
    span {
        text-align: left;
        font-size: 18px;
        background-color: #2c7e87;
        padding: 10px;
        text-shadow: none;
        border-radius: 3px;
    }

    #allcards-container {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }
</style>

