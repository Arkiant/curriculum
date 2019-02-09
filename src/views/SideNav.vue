<template>
    <div class="sidenav">
        <div class="foto">
            <img src="../assets/foto.jpg" />
        </div>
        <p class="name">Samuel Porras</p>
        <p class="profession"><i>Full Stack Developer</i></p>
        <p class="age">{{ age }}</p>
    </div>
</template>

<script>

const moment = require('moment');


export default {   
    computed: {
        age: () => {
            let result = moment("21-05-1985", ["DD-MM-YYYY"], "es").toNow(true);
            return result;
        }
    }
}
</script>


<style lang="scss" scoped>
    div.sidenav {
        width: 20%;
        background-color: #333;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        div.foto {
            margin-top: 5%;
            img {
                border-radius: 50%;
                border: 2px solid white;
            }
        }

        p {
            color: white;
            font-size: 1.5em;
            margin: 0;
            
            &.name {
                text-align: center;
                padding: 2%;
                width: 75%;
                border: 1px solid rgb(151, 150, 150);;
                margin-top: 10%;
            }

            &.profession {
                margin-top: 5%;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                color: rgb(151, 150, 150);
            }

            &.age {
                margin-top: 5%;
                color: rgb(151, 150, 150);
            }
        }
    }
</style>
