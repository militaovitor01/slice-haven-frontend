import React from 'react';
import { Pizza, Award, Users, Leaf } from 'lucide-react';
import {
  Container,
  PageTitle,
  StorySection,
  StoryImage,
  StoryContent,
  ValuesGrid,
  ValueCard,
  TeamSection,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberInfo,
  MemberName,
  MemberRole,
  MemberBio
} from './styles';

const AboutPage: React.FC = () => {
  return (
    <Container>
      <PageTitle>Our Story</PageTitle>

      <StorySection>
        <StoryImage src="https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg" alt="Our Story" />
        <StoryContent>
          <h2>Crafting Perfect Pizzas Since 1995</h2>
          <p>
            Slice Haven began with a simple dream: to create the perfect pizza that brings people together. 
            Our journey started in a small kitchen in New York, where our founder Maria perfected her 
            grandmother's secret recipe.
          </p>
          <p>
            Today, we continue that tradition of excellence, using only the finest ingredients and 
            time-honored techniques to craft pizzas that delight our customers. Every pizza tells a story, 
            and we're proud to be part of yours.
          </p>
        </StoryContent>
      </StorySection>

      <ValuesGrid>
        <ValueCard>
          <Pizza size={32} />
          <h3>Quality Ingredients</h3>
          <p>We source the finest ingredients from local suppliers and Italian importers.</p>
        </ValueCard>
        
        <ValueCard>
          <Award size={32} />
          <h3>Craftsmanship</h3>
          <p>Our pizzas are handcrafted by expert pizzaiolos with decades of experience.</p>
        </ValueCard>
        
        <ValueCard>
          <Users size={32} />
          <h3>Community</h3>
          <p>We believe in bringing people together through great food and service.</p>
        </ValueCard>
        
        <ValueCard>
          <Leaf size={32} />
          <h3>Sustainability</h3>
          <p>Committed to eco-friendly practices and reducing our environmental impact.</p>
        </ValueCard>
      </ValuesGrid>

      <TeamSection>
        <h2>Meet Our Team</h2>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg" alt="Maria Romano" />
            <MemberInfo>
              <MemberName>Maria Romano</MemberName>
              <MemberRole>Founder & Head Chef</MemberRole>
              <MemberBio>
                With over 25 years of experience, Maria brings her grandmother's authentic 
                Italian recipes to life in every pizza we serve.
              </MemberBio>
            </MemberInfo>
          </TeamMember>

          <TeamMember>
            <MemberImage src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg" alt="Marco Silva" />
            <MemberInfo>
              <MemberName>Marco Silva</MemberName>
              <MemberRole>Master Pizzaiolo</MemberRole>
              <MemberBio>
                Marco's passion for pizza-making and attention to detail ensures 
                every pizza meets our high standards.
              </MemberBio>
            </MemberInfo>
          </TeamMember>

          <TeamMember>
            <MemberImage src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg" alt="Sofia Chen" />
            <MemberInfo>
              <MemberName>Sofia Chen</MemberName>
              <MemberRole>Customer Experience</MemberRole>
              <MemberBio>
                Sofia ensures every customer's experience is exceptional, from order 
                to delivery.
              </MemberBio>
            </MemberInfo>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </Container>
  );
};

export default AboutPage;