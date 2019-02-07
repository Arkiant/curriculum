<template>
    <div>
        <h3>{{ category }}</h3>
        <i>{{ business }}</i>
        <div>
            <span>{{ initialDateFormatted }}</span> - <span>{{ finalDateFormatted }}</span> · <i> {{ timeLapseFormatted }} </i>
        </div>
        <div v-html="functions"></div>
    </div>
</template>


<script>
const moment = require('moment');

function formatDateTime(date) {
    let result = moment(date, ["DD-MM-YYYY"], "es").format("MMMM-YYYY");
    return result;    
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
            initialDateFormatted: function() {
                return formatDateTime(this.initialDate);
            },
            finalDateFormatted: function() {
                return formatDateTime(this.finalDate)
            },
            timeLapseFormatted: function() {
                return timeLapse(this.initialDate, this.finalDate);
            }
        }
}
</script>

<style lang="scss">

</style>