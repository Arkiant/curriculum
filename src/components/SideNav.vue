<template>
    <aside>
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


<style lang="scss" scoped>
    $color: rgb(214, 212, 212);
    $color-light: lighten($color, 50%);
    $color-dark: darken($color, 70%);

    aside {
        width: 20%;
        background-color: $color-dark;
        display: flex;
        flex-direction: column;
        align-items: center;

        div.foto {
            margin-top: 5%;
            img {
                border-radius: 50%;
                border: 2px solid $color-light;
            }
        }

        p {
            color: $color-light;
            font-size: 1.5em;
            margin: 0;
            
            &.name {
                text-align: center;
                padding: 2%;
                width: 75%;
                border: 1px solid $color;
                margin-top: 10%;
            }

            &.profession {
                margin-top: 5%;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                color: $color;
                border-bottom: 1px solid $color;
            }

            &.age {
                margin-top: 5%;
                color: $color;
            }
        }
    }
</style>
