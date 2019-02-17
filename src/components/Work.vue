<template>
    <article>
        <h3>{{ work.category }}</h3>
        <i class="business">{{ work.business }}</i>
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
        margin-bottom: 1%;
        padding: 2%;
        
        h3 {
            margin-top: 0px;
            color: #03cfb0;
            @include text-border-shadow(black);
        }

        i.business {
            color: white;
            font-weight: bold;
        }

        div.date {
            color: white;
        }

        div.text {
            color: white;
        }
    }
</style>