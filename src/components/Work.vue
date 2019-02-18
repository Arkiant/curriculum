<template>
    <article>
        <h3>{{ work.category }} (<i class="business">{{ work.business }}</i>)</h3>
        
        <div class="date">
            <span>{{ initialDateFormatted }}</span> - <span>{{ finalDateFormatted }}</span> <i> ( {{ timeLapseFormatted }} )</i>
        </div>
        <div v-html="work.functions" class="text"></div>
    </article>
</template>


<script>
import { formatDateTime, timeLapse } from "@/libs/time.js";

export default {
    props: ["work"],
    computed: {
        initialDateFormatted: function() { return formatDateTime(this.work.initial_date, "es") },
        finalDateFormatted: function() { return formatDateTime(this.work.final_date, "es") },
        timeLapseFormatted: function() { return timeLapse(this.work.initial_date, this.work.final_date, "es") },
    }
}
</script>

<style lang="scss">

    @import '../scss/mixins';

    article {
        width: 70%;
        max-width: 705px;
        margin-bottom: 1%;
        padding: 2%;
        background-color: #1F1E24;
        webkit-box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);
        box-shadow: -7px 0px 25px 0px rgba(0,0,0,0.75);

        h3 {
            margin-top: 0px;

            i.business {
                color: #03cfb0;
                font-weight: bold;
            }
        }

        
    }
</style>