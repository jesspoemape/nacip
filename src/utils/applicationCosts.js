import moment from 'moment';

const applicationCosts = {
    food: {
        early: 60000,
        regular: 73000,
        late: 78900,
    },
    nonProfit: {
        early: 38500,
        regular: 48500,
        late: 55900,
    },
    artsAndCrafts: {
        early: 38500,
        regular: 48500,
        late: 55900,
    },
    other: {
        early: 56500,
        regular: 68500,
        late: 78500,
    },
};

const applicationDates = {
    early: {
        start: moment(),
        end: moment('2019-05-31', 'YYYY-MM-DD'),
    }, 
    regular: {
        start: moment('2019-06-01', 'YYYY-MM-DD'),
        end: moment('2019-06-16', 'YYYY-MM-DD'),
    },
    late: {
        start: moment('2019-06-17', 'YYYY-MM-DD'),
        end: moment('2019-06-24', 'YYYY-MM-DD'),
    },
};

export { applicationCosts, applicationDates };
