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
import GoogleMap from './GoogleMap';

const About = () => {
    return (
        <section id="about">
            <div id="parallaxContainer">
                <div className="origins">
                    <h4>About Us</h4>
                    <p>
                        Utah is filled with many vibrant Native American tribal nations and is home to 8 Native American tribes-the Navajo/Dine, Ute Indian Tribe if the Uintah and Ouray, Ute Mountain Ute, White Mesa Community, Skull Valley Band of Goshute, Northwestern Band of Shoshone Nation, Paiute, and the San Juan Southern Paiute. Every July 24th, the Native American Celebration in the Park (NACIP) is the destination for many on Utah’s official holiday. Two cultures merge in recognition.
                    </p>
                    <p>
                        NACIP was established by a few Navajo community members. People were seeking a place where Native cultures can honor their Native heritage through food and song. We began in a little park on the westside of Salt Lake City with a few hundred people. We enjoyed a meal of mutton and fry bread.
                    </p>
                    <p>
                        NACIP grew bigger than we could have imagined forcing us to move to a new location. Liberty Park is home to NACIP. It was selected as a beautiful backdrop where Native families can dance, sing, and showcase beautiful jewelry and crafts. Among the fragrant pine trees, playground for kids, a cool swimming pool, tennis courts, and aviary and boating opportunities. Guests can enjoy a special experience while witnessing authentic Native American cultures. Audience members can join Native American dancers in the powwow arena as this is signifying friendship and unity.
                    </p>
                    <p>
                        Our goal is to share our culture particularly with those who may have not known that Native American people are still here. The Native American population is approximately 70,000 and continues to grow. We have the perfect experience waiting for you and your family.
                    </p>
                </div>

                <div className="mission">
                    <h4>Our Mission</h4>
                    <p>
                        The mission of the Native American Celebration is to educate and share the proud heritage of the Native American and the Ethnic community to the world through music and dance, cultural displays, entertainment and the arts, both traditional and contemporary.
                    </p>
                    <p>
                        To foster self-sufficiency and self-reliance for all Native Americans and Ethnic communities through entrepreneurship, sound financial practices and integrity. Lift Native Americans and all ethnic communities to a higher level of self-worth so that they will achieve their individual and community potential.
                    </p>
                </div>

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

export default About;
