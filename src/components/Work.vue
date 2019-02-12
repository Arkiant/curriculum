<template>
    <article>
        <h3>{{ category }}</h3>
        <i class="business">{{ business }}</i>
        <div>
            <span>{{ initialDateFormatted }}</span> - <span>{{ finalDateFormatted }}</span> <i> ( {{ timeLapseFormatted }} )</i>
        </div>
        <div v-html="functions" class="text"></div>
        <hr>
    </article>
</template>


<script>
const moment = require('moment');

function formatDateTime(date) {
    return moment(date, ["DD-MM-YYYY"], "es").format("MMMM-YYYY");
}

function timeLapse(datefrom, dateto) {
    let dateFrom = moment(datefrom, ["DD-MM-YYYY"], "es");
    let dateTo = moment(dateto, ["DD-MM-YYYY"], "es");
    
    return dateTo.from(dateFrom, true)
}

// @ is an alias to /src

export default {
    props: [
        "business",
        "initialDate",
        "finalDate",
        "category", 
        "functions"
        ],
        computed: {
            initialDateFormatted: function() { return formatDateTime(this.initialDate) },
            finalDateFormatted: function() { return formatDateTime(this.finalDate) },
            timeLapseFormatted: function() { return timeLapse(this.initialDate, this.finalDate) },
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