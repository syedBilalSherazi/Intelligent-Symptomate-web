// src/pages/HealthArticlePage.jsx
import React from "react";
import "./HealthArticlePage.css"; // Import the updated styles

const HealthArticlePage = () => {
  return (
    <div className="health-articles">
      <header className="health-articles-header">
        <h1>Health Articles</h1>
        <p>Explore the latest health articles to keep you informed about your wellbeing.</p>
      </header>

      {/* Article 1 */}
      <section className="article">
        <h2>The Importance of Regular Exercise for Mental Health</h2>
        <p>
          Regular exercise is not just good for your physical health—it also has profound
          effects on mental health. Research shows that physical activity can help reduce
          symptoms of depression, anxiety, and stress. Exercise increases the release of
          endorphins, the body's natural mood enhancers. It also helps regulate sleep patterns,
          reduces fatigue, and promotes relaxation.
        </p>
        <p>
          A 30-minute walk or jog several times a week can make a significant difference in
          improving your overall mood. The mental health benefits of exercise are so powerful
          that many health professionals recommend it as a complementary treatment for various
          mental health conditions, including depression and anxiety.
        </p>
        <p>
          In addition to improving mood, exercise has a positive impact on cognitive function.
          It helps improve memory, attention, and decision-making skills. Studies show that
          physical activity can even boost creativity and problem-solving abilities. Regular
          exercise also increases blood flow to the brain, which enhances brain plasticity and
          cognitive performance.
        </p>
      </section>

      {/* Article 2 */}
      <section className="article">
        <h2>Understanding Nutrition: The Key to a Healthier Life</h2>
        <p>
          Proper nutrition is essential for maintaining a healthy body and mind. The food we
          eat provides the nutrients our body needs to function at its best. A well-balanced
          diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats can
          reduce the risk of chronic diseases, improve energy levels, and support brain health.
        </p>
        <p>
          Many people struggle with understanding the principles of good nutrition. One of
          the most important aspects of healthy eating is portion control. It's crucial to
          eat the right amounts of each food group to maintain a healthy weight and avoid
          overeating. Cutting back on processed foods, sugary drinks, and excessive fats can
          improve overall health and reduce the risk of obesity, diabetes, and heart disease.
        </p>
        <p>
          Another key aspect of nutrition is staying hydrated. Drinking enough water is
          essential for maintaining the balance of bodily fluids and regulating body
          temperature. Hydration also supports digestion, joint lubrication, and nutrient
          transport. Aim to drink at least 8 glasses of water per day, and more if you're
          engaging in physical activity or are in a hot climate.
        </p>
      </section>

      {/* Article 3 */}
      <section className="article">
        <h2>Sleep: The Forgotten Pillar of Health</h2>
        <p>
          Sleep is one of the most vital, yet often overlooked, aspects of health. Adequate
          sleep is crucial for physical health, mental wellbeing, and cognitive function. The
          recommended amount of sleep for adults is 7-9 hours per night, but many people fail
          to prioritize sleep, leading to negative consequences such as fatigue, poor concentration,
          and increased risk of chronic conditions like hypertension, diabetes, and heart disease.
        </p>
        <p>
          During sleep, the body undergoes essential processes such as tissue repair, muscle
          growth, and immune system strengthening. Sleep also allows the brain to process
          memories, consolidate learning, and clear toxins that build up throughout the day.
          Chronic sleep deprivation can impair cognitive function, decrease productivity, and
          affect mood regulation, often leading to irritability, anxiety, and depression.
        </p>
        <p>
          To improve sleep quality, it's important to establish a consistent sleep schedule,
          create a relaxing bedtime routine, and optimize your sleep environment. Avoid
          stimulants like caffeine and electronic screens before bed, and ensure that your
          bedroom is dark, quiet, and cool. Regular physical activity can also help promote
          better sleep, but avoid exercising too close to bedtime as it may disrupt sleep.
        </p>
      </section>
    </div>
  );
};

export default HealthArticlePage;
