
/**
 *  Sort the elements chronologically first the date closest to the current one.
 */
function sortByDate(a, b) {
    let a_final_date = moment(a.final_date, ["DD-MM-YYY"]);
    let b_final_date = moment(b.final_date, ["DD-MM-YYY"]);
  
    if(a_final_date.isAfter(b_final_date)) {
      return -1;
    } 
    
    if ( a_final_date.isBefore(b_final_date)) {
      return 1;
    }
  
    return 0;
  }

/**
 * Format a given datetime from 21-05-1985 to May-1985
 */
function formatDateTime(date) {
    return moment(date, ["DD-MM-YYYY"], "es").format("MMMM-YYYY");
}

/**
 * Calculate time between 2 dates.
 */
function timeLapse(datefrom, dateto) {
    let dateFrom = moment(datefrom, ["DD-MM-YYYY"], "es");
    let dateTo = moment(dateto, ["DD-MM-YYYY"], "es");
    
    return dateTo.from(dateFrom, true)
}

export {
  sortByDate,
  formatDateTime,
  timeLapse
}
