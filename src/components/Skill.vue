<template>
    <div class="skill">
        <ul>
            <li v-for="(data, key) in skill.data" :key="key">
                <div class="info">
                    <div class="name">{{ data.name }}</div>
                    <div class="percentage">{{ calculatePercentage(data.score) }}%</div>
                </div>
                <progress :max="maxValue" :value="data.score"></progress>
            </li>
        </ul>
    </div>
</template>


<script>

export default {
    props: ["skill"],
    data() {
        return {
            maxValue: 10
        }
    },
    methods: {
        calculatePercentage(score) {
            return score / this.maxValue * 100;
        }
    }
}
</script>

<style lang="scss">

    @import '../scss/mixins';

    div.skill {
        width: 70%;
        max-width: 705px;
        h3 {
            margin-top: 0px;
            color: #03cfb0;
        }

        ul {
            margin-left: 0px;
            padding-left: 0px;
            li {
                list-style: none;
                text-align: left;
                margin-bottom: 2%;
                border: 1px solid black;
                padding: 1%;
                border-radius: 10px;
                background-color: #1F1E24;
                -webkit-box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
                box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
                span {
                    width: 15%;
                    display: inline-block;
                }

                div.info {
                    position: relative;
                    div.percentage {
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }

                progress[value] {
                    width: 100%;
                    -webkit-appearance: none;
                    appearance: none;
                    border: 2px solid black;
                    border-radius: 25px;
                    &::-webkit-progress-bar {
                        background-color: #CECECE;
                        border-radius: 25px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
                    }
                    &::-webkit-progress-value {
                        background-color: #03CFB0;
                        border-radius: 25px; 
                        background-size: 35px 20px, 100% 100%, 100% 100%;
                    }
                }
            }
        }
    }
</style>