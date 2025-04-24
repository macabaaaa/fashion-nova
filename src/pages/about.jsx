import React from 'react';
import '../index.css';
import { Typography } from 'antd';

const { Paragraph} = Typography;

const About = () => {
  return (
    <>
    <div  style={{marginLeft:-90,marginTop:75}}>
    <h1>About Us</h1>
      <Paragraph >
      <b>Style That Speaks for You.</b><br></br><br></br>

      
    <p><strong>Fashion Nova</strong> is the world’s leading quick-to-market apparel and lifestyle brand. We're known for delivering the hottest trends at lightning speed and at affordable prices. Founded in the heart of Los Angeles, Fashion Nova has become more than just a fashion company—we’re a cultural phenomenon.</p>

    <p>We are unapologetically sexy, empowered, and inclusive. Our mission is simple: to make fashion accessible for everyone. From our iconic curve-loving jeans to statement pieces worn by celebrities and influencers, we bring runway style to your real life, fast.</p>

    <p>With a community of over 25 million followers across our social platforms, we’ve built a brand that celebrates body positivity, confidence, and self-expression. Our styles are designed for the bold, the fearless, and the trendsetters who aren’t afraid to turn heads.</p>

    <p>We drop hundreds of new styles every week so you can stay ahead of the game and on top of your look. Whether you're dressing for a night out, a casual brunch, or your next big moment, Fashion Nova has you covered.</p>

    <p>Welcome to the Nova Nation. Let’s slay together.</p>

    <div class="hashtags">#NovaBabe | #FashionNova</div>
      </Paragraph>

    </div>
      
    </>
  );
};

export default About;