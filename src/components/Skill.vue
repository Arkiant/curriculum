<template>
    <div class="skill">
        <h3>{{ skill.category }}</h3>
        <ul>
            <li v-for="(data, key) in skill.data" :key="key">
                <span>{{ data.name }}</span> <progress max="10" :value="data.score"></progress>
            </li>
        </ul>
    </div>
</template>


<script>

export default {
    props: ["skill"]
}
</script>

<style lang="scss">

    @import '../scss/mixins';

    div.skill {
        width: 70%;
        h3 {
            margin-top: 0px;
            color: #03cfb0;
            @include text-border-shadow(black);
        }

        ul {
            margin-left: 0px;
            padding-left: 0px;
            li {
                list-style: none;
                text-align: left;
                color: white;
                margin-bottom: 2%;
                span {
                    width: 15%;
                    display: inline-block;
                }

                progress[value] {
                    width: 70%;
                    -webkit-appearance: none;
                    appearance: none;
                    &::-webkit-progress-bar {
                        background-color: #eee;
                        border-radius: 25px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
                    }
                    &::-webkit-progress-value {
                        background-image:

                        -webkit-linear-gradient(top, 
                                                rgba(255, 255, 255, .25), 
                                                rgba(0, 0, 0, .25)),
                        -webkit-linear-gradient(left, #03CFB0, #2b4f49);

                        border-radius: 25px; 
                        background-size: 35px 20px, 100% 100%, 100% 100%;
                    }
                }
            }
        }
    }
</style>