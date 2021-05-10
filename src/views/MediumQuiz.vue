<template>
    <div>
        <h1>Medium <span>Points: {{points.length}}/{{mediumQuestions.length}}</span></h1>
        <div id="allcards-container">
            <QuestionCard
                v-for="item in mediumQuestions" :key="item.id"
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
            mediumQuestions: [
                {id: 11, question:"Howard Donald is the oldest member of Take That", answer:"true", comment:"He was born in 1968, while Jason Orange was born in 1970, Gary Barlow was born in 1971, Mark Owen in 1972 and Robbie Williams in 1974"},
                {id: 12, question:"The Great Wall of China is longer than the distance between London and Beijing", answer:"true", comment:"London to Beijing is only 8,136 km, The Great Wall of China is 21,196.18 km"},
                {id: 13, question:"There are 219 episodes of Friends", answer:"false", comment:"There are 236"},
                {id: 14, question:"'A' is the most common letter used in the English language", answer:"false", comment:"'E' is the most common letter and appears in 11 percent of all english words, according to Oxford Dictionaries"},
                {id: 15, question:"A lion's roar can be heard up to eight kilometres away", answer:"true"},
                {id: 16, question:"In Harry Potter, Draco Malfoy has no siblings", answer:"false", comment:"Skylar Malfoy is his younger sister"},
                {id: 17, question:"Louis Walsh is older than Simon Cowell", answer:"true", comment:"At the time of writing, Louis Walsh is 67 while Simon Cowell is 60"},
                {id: 18, question:"Monaco is the smallest country in the world", answer:"false", comment:"Vatican City is, with only 0.44 sq.km."},
                {id: 19, question:"'What Do You Mean' was Justin Bieber's first UK number one single", answer:"true"},
                {id: 20, question:"The river Seine in Paris is longer than the river Thames in London", answer:"true", comment:"The Seine is 777km, while the Thames is 346km"}
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