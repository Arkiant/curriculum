<template>
    <aside>
        <h2 class="about">About me</h2>
        <div class="foto">
            <img src="@/assets/foto.jpg" />
        </div>
        <p class="name">Samuel Porras</p>
        <p class="profession"><i>Full Stack Developer</i></p>
        <p class="age">{{ age }}</p>
    </aside>
</template>

<script>
import { calculateAge } from "@/libs/time.js";


export default {
    computed: {
        profile: function() { 
            return this.$store.getters.profile; 
        },
        age: function(){
            return calculateAge(this.$store.getters.profile.birthday,"es");
        },
    },
    created() {
        this.$store.dispatch('initProfile');
    }
}
</script>


<style lang="scss">

    @import '../scss/mixins';

    $color: #03CFB0;
    $color-light: white;
    $color-dark: #1A1A21;

    aside {
        width: 20%;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;

        div.foto {
            margin-top: 5%;
            img {
                border-radius: 50%;
                border: 10px double black;
                @include block-shadow(black);
            }
        }

        h2 {
            &.about {
                @include title-format();
            }
        }

        p {
            color: $color-light;
            font-size: 1.5em;
            margin: 0;
            @include text-border-shadow(black);

            &.name {
                font-size: 2em;
                text-align: center;
                width: 75%;
                margin-top: 10%;
            }

            &.profession {
                font-size: 1em;
            }

            &.age {
                font-size: 1em;
                margin-top: 2%;
                color: $color-light;
            }
        }
    }
</style>
