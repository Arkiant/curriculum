<template>
    <article>
        <h3>{{ work.category }}</h3>
        <i class="business">{{ work.business }}</i>
        <div>
            <span>{{ initialDateFormatted }}</span> - <span>{{ finalDateFormatted }}</span> <i> ( {{ timeLapseFormatted }} )</i>
        </div>
        <div v-html="work.functions" class="text"></div>
        <hr>
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
    article {
        padding: 1%;
        
        h3 {
            color: #333;
        }

        i.business {
            color: #555;
        }

        hr {
            width: 10%;
            border: 2px double #333;
        }
    }
</style>