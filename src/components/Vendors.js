import React, { useState } from 'react';
import VendorApplication from './VendorApplication';
import { applicationCosts } from './../utils/applicationCosts';

const Vendors = () => {
    const [showApplication, setShowApplication] = useState(false);
    return (
        <section id="vendors">
            <h3>Booth Costs</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Vendor Type</th>
                        <th>Before June 1st</th>
                        <th>June 1st - 16th</th>
                        <th>June 17th - 24th</th>
                    </tr>
                    <tr>
                        <td>Food</td>
                        <td>${applicationCosts.food.early / 100}</td>
                        <td>${applicationCosts.food.regular / 100}</td>
                        <td>${applicationCosts.food.late / 100}</td>
                    </tr>
                    <tr>
                        <td>Arts and Crafts</td>
                        <td>${applicationCosts.artsAndCrafts.early / 100}</td>
                        <td>${applicationCosts.artsAndCrafts.regular / 100}</td>
                        <td>${applicationCosts.artsAndCrafts.late / 100}</td>
                    </tr>
                    <tr>
                        <td>Non Profit</td>
                        <td>${applicationCosts.nonProfit.early / 100}</td>
                        <td>${applicationCosts.nonProfit.regular / 100}</td>
                        <td>${applicationCosts.nonProfit.late / 100}</td>
                    </tr>
                    <tr>
                        <td>Commercial</td>
                        <td>${applicationCosts.other.early / 100}</td>
                        <td>${applicationCosts.other.regular / 100}</td>
                        <td>${applicationCosts.other.late / 100}</td>
                    </tr>
                </tbody>
            </table>
            {showApplication ? (
                <VendorApplication />
                ) : (
                <button className="becomeAVendor" onClick={() => setShowApplication(true)}>Become a Vendor</button>
            )}
        </section>
    );
}

export default Vendors;
