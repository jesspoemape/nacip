import React, { Fragment } from 'react';
import moment from 'moment';
import { applicationCosts, applicationDates } from './../utils/applicationCosts';

const VendorCostsTable = () => {
    let activeBracket = 'none';
    const now = moment();
    if (now.isBefore(applicationDates.early.end, 'days')) {
        activeBracket = 'early';
    } else if (now.isBetween(applicationDates.regular.start, applicationDates.regular.end)) {
        activeBracket = 'regular';
    } else if (now.isBetween(applicationDates.late.start, applicationDates.late.end)) {
        activeBracket = 'late';
    }

    return (
        <Fragment>
            <h3>Booth Costs</h3>
            <table>
                <tbody>
                    <tr>
                        <th className="vendorType">Vendor Type</th>
                        <th className={`early ${activeBracket === 'early' ? 'active' : ''}`}>Before June 1st</th>
                        <th className={`regular ${activeBracket === 'regular' ? 'active' : ''}`}>June 1st - 16th</th>
                        <th className={`late ${activeBracket === 'late' ? 'active' : ''}`}>June 17th - 24th</th>
                    </tr>
                    <tr>
                        <td className="vendorType">Food</td>
                        <td className={`early ${activeBracket === 'early' ? 'active' : ''}`}>${applicationCosts.food.early / 100}</td>
                        <td className={`regular ${activeBracket === 'regular' ? 'active' : ''}`}>${applicationCosts.food.regular / 100}</td>
                        <td className={`late ${activeBracket === 'late' ? 'active' : ''}`}>${applicationCosts.food.late / 100}</td>
                    </tr>
                    <tr>
                        <td className="vendorType">Arts and Crafts</td>
                        <td className={`early ${activeBracket === 'early' ? 'active' : ''}`}>${applicationCosts.artsAndCrafts.early / 100}</td>
                        <td className={`regular ${activeBracket === 'regular' ? 'active' : ''}`}>${applicationCosts.artsAndCrafts.regular / 100}</td>
                        <td className={`late ${activeBracket === 'late' ? 'active' : ''}`}>${applicationCosts.artsAndCrafts.late / 100}</td>
                    </tr>
                    <tr>
                        <td className="vendorType">Non Profit</td>
                        <td className={`early ${activeBracket === 'early' ? 'active' : ''}`}>${applicationCosts.nonProfit.early / 100}</td>
                        <td className={`regular ${activeBracket === 'regular' ? 'active' : ''}`}>${applicationCosts.nonProfit.regular / 100}</td>
                        <td className={`late ${activeBracket === 'late' ? 'active' : ''}`}>${applicationCosts.nonProfit.late / 100}</td>
                    </tr>
                    <tr>
                        <td className="vendorType">Commercial</td>
                        <td className={`early ${activeBracket === 'early' ? 'active' : ''}`}>${applicationCosts.other.early / 100}</td>
                        <td className={`regular ${activeBracket === 'regular' ? 'active' : ''}`}>${applicationCosts.other.regular / 100}</td>
                        <td className={`late ${activeBracket === 'late' ? 'active' : ''}`}>${applicationCosts.other.late / 100}</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default VendorCostsTable;