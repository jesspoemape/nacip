import React from 'react';
import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';
import image7 from '../../assets/7.png';
import image8 from '../../assets/8.png';
import image9 from '../../assets/9.png';
import image10 from '../../assets/10.png';
import image11 from '../../assets/11.png';
import image12 from '../../assets/12.png';
import image13 from '../../assets/13.png';
import image14 from '../../assets/14.png';
import GoogleMap from '../about/GoogleMap';

const Powwow = () => {
    return (
        <section id="powwow">
            <div id="parallaxContainer">
                <div className="hello">
                    <h3>Yá atééh!</h3>
                    <p>Hello in Navajo</p>
                </div>

                <div className="address">
                    <div className="timedate">
                        <p>July 24, 2019</p>
                        <p>12pm to 10pm</p>
                    </div>
                    <p>LIBERTY PARK</p>
                    <p>600 East 1100 South</p>
                    <p>Salt Lake City, Utah 84105</p>
                </div>

                <div className="tripleGroup">
                    <div className="scheduleAndTickets">
                        <div className="schedule">
                            <h4>Powwow Schedule</h4>
                            <p>
                                <strong>12:00 PM (Noon)</strong>
                                <br />1st Session Grand Entry
                            </p>
                            <p>
                                <strong>4:30 PM - 6:00 PM</strong>
                                <br />Break
                            </p>
                            <p>
                                <strong>6:00 PM</strong>
                                <br />2nd Session Grand Entry (dancers and drum groups roll-call)
                            </p>
                            <p>
                                <strong>10:00 PM</strong>
                                <br />Fireworks
                            </p>
                            <hr />
                            <p><strong>REGISTRATION CLOSES AT 3:00 PM!</strong></p>
                        </div>
                        <div className="tickets">
                            <h4>Powwow Admission</h4>
                            <p><strong>Adults</strong>$5</p>
                            <p><strong>Youth (K-12)</strong>$5</p>
                            <p><strong>Under 3 and over 65</strong>Free</p>
                            <hr />
                            <p>
                                Gates charged full price on July 24th all evening.
                            </p>
                        </div>
                    </div>
                    <div className="note">
                        <em>
                            <strong>Note:</strong> 100% of admission fees go toward the payment of all costs to host this event in Salt Lake City, Utah and to participating official powwow staff, dancers, and drum group. Organizers of this event are unpaid, professional volunteers.
                        </em>
                    </div>
                </div>

                <div className="events">
                    <h4>What To Expect</h4>
                    <ul>
                        <li>Intertribal Contest Powwow</li>
                        <li>Food, Arts and Crafts, and Commercial Booths</li>
                        <li>Entertainment</li>
                        <li>Children's Play Area</li>
                        <li>FIREWORKS</li>
                    </ul>
                </div>

                <div className="map">
                    <h4>Event Map</h4>
                </div>

                {/* <div className="hashtags">
                    <span>#nacip</span>
                    <span>#nativeamericancelebrationintheparkpowwow</span>
                    <span>#nacippowwowfestival</span>
                </div> */}


                <img className="plx" src={image1} alt="colored square on point" />
                <img className="plx" src={image2} alt="colored square on point" />
                <img className="plx" src={image3} alt="colored square on point" />
                <img className="plx" src={image4} alt="colored square on point" />
                <img className="plx" src={image5} alt="colored square on point" />
                <img className="plx" src={image6} alt="colored square on point" />
                <img className="plx" src={image7} alt="colored square on point" />
                <img className="plx" src={image8} alt="colored square on point" />
                <img className="plx" src={image9} alt="colored square on point" />
                <img className="plx" src={image10} alt="colored square on point" />
                <img className="plx" src={image11} alt="colored square on point" />
                <img className="plx" src={image12} alt="colored square on point" />
                <img className="plx" src={image13} alt="colored square on point" />
                <img className="plx" src={image14} alt="colored square on point" />

            </div>
            {/* <div className="googleMap">
                <GoogleMap />
            </div> */}
        </section>
    );
}

export default Powwow;
