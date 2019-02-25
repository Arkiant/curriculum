<template>
    <aside>
        <h2 class="about">About me</h2>
        <div class="foto">
            <img src="@/assets/foto.jpg" />
        </div>
        <p class="name">Samuel Porras</p>
        <p class="profession"><i>Full Stack Developer</i></p>
        <p class="age">{{ age }}</p>

        <nav>
            <router-link to="#experience" @click.native="scrollFix('#experience')">Experiencia</router-link>
            <router-link to="#skills" @click.native="scrollFix('#skills')">Conocimientos técnicos</router-link>
        </nav>
    </aside>
</template>

<script>
import { calculateAge } from "@/libs/time.js";
import { mapActions, mapGetters } from 'vuex';


export default {
    computed: {
        profile: function() { 
            return this.getProfile(); 
        },
        age: function(){
            return calculateAge(this.profile.birthday,"es");
        },
    },
    created() {
        this.initProfile();
    },
    methods: {
        ...mapActions([
            'initProfile'
        ]),
        ...mapGetters([
            'getProfile'
        ]),
        scrollFix: function(hashbang) { /* Fix scroll functionality */
            location.href = hashbang;
        }
    }
}
</script>


<style lang="scss">

    @import '../scss/mixins';

    $color: #03CFB0;
    $color-light: white;

    aside {
        width: 20%;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        max-height: 100%;
        background-color: #1f1e24;
        -webkit-box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
        box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
        border-right: 3px solid black;

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

        nav {
            margin-top: 5%;

            a {
                display: block;
                margin-top: 10%;
                text-decoration: none;
                color: black;
                font-weight: bold;
                border: 1px solid white;
                border-radius: 25px;
                padding: 10%;
                width: 100%;
                background-color: #cdcdcd;

                -webkit-box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
                box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
                border: 3px solid black;

                &.router-link-active {
                    background-color: #03cfb0;
                }
            }
        }
    }
</style>
