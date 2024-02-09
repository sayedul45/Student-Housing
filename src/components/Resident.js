import "./ResidentStyle.css";
import React from 'react'
import ResidentData from "./ResidentData";
import House1 from "../Images/House1.png";
import House2 from "../Images/House2.png";
import House3 from "../Images/House3.png";
 function Resident() {
  return (
    <>
       <div className="resident">
        <h1>Popular Non Residential House</h1>
        <p>You can choose one of them</p>
        <div className="resident-card">
         <ResidentData
         image={House1}
         heading="House of Wisedom"
         show="Welcome to the House of Wisdom, your perfect student accommodation! This fully-equipped house is tailored to meet all your needs and create a comfortable, enjoyable living experience."
         //text="  Located in a vibrant neighborhood close to your university, the House of Wisdom offers an ideal environment for your academic journey.The House of Wisdom features a total of 4 spacious and well-furnished rooms, providing ample space for you and oceries and snacks. Each room at the House of Wisdom is furnished with a personal mini-fridge, and the kitchen has a large refrigerator with ample space to keep your food fresh and accessible.Take a break from your studies and enjoy the stunning views. "
         />
         <ResidentData
         image={House2}
         heading="White House"
         show="Welcome to the White House, your premier student accommodation! Our residence provides a unique living experience, combining modern comfort with a rich historical ambiance."
         //text="  Conveniently located in the heart of Cumilla, our White House offers an exceptional environment for your academic journey.White House features a variety of well-appointed rooms, catering to different preferences and needs. With a range of room types, you can find the perfect space to study, relax, and call home. Each room is thoughtfully designed to ensure maximum comfort and privacy.At the White House, we prioritize your well-being and understand the importance of a nourishing environment."
         />
         <ResidentData
         image={House3}
         heading="Grey House"
         show="Welcome to the Grey House, your ideal student accommodation! Situated in a prime location in Cumilla,our Grey House offers a modern and comfortable living space designed to meet all your needs while"
         //text=" fostering a sense of community and academic excellence.Grey House features a variety of tastefully designed rooms, ensuring a perfect fit for your lifestyle. Each room is thoughtfully furnished to provide a cozy and private retreat for studying and relaxation.We understand the importance of a balanced and nurturing environment while pursuing your studies. The Grey House offers a convenient mealing system with a fully equipped shared kitchen. Prepare and enjoy delicious meals with your fellow housemates."
        />
        </div> 
       </div>
    </>
  );
}

export default Resident;