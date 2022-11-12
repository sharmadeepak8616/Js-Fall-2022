class Class1 {


    showSeason(monthName) {
        let seasonName = ''
        switch(monthName.toLowerCase()) {
            case 'jan':
            case 'feb':
            case 'dec':    
                seasonName = 'Winter'
                break;
            case 'mar':
            case 'apr':
            case 'may':
                seasonName = 'Spring'
                break;
            case 'jun':
            case 'jul':
            case 'aug':
                seasonName = 'Summer'
                break;        
            case 'sep':
            case 'oct':
            case 'nov':
                seasonName = 'Fall'
                break;
            default:
                throw 'Invalid month name'
        }
        if (seasonName.length > 0) {
            console.log(`Season is ${seasonName}`);
        }
    }


}
module.exports = Class1;