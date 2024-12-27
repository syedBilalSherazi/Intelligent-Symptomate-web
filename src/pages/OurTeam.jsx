import React from 'react';
import './OurTeam.css'; // Ensure the CSS file is linked

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Ali Naqi",
            role: "Founder & CEO",
            bio: "Ali Naqi has over 15 years of experience in the healthcare industry and leads the team with passion and expertise.",
            image: "/assets/ALinaqi.jpg" // Correct path if image is in public/assets folder
        },
        {
            name: "Uzair Rajun pori",
            role: "CTO",
            bio: "Uzair is a tech enthusiast who ensures our AI solutions are cutting-edge and impactful for healthcare.",
            image: "/assets/ALinaqi.jpg" // Correct path if image is in public/assets folder
        }
    ];

    return (
        <div className="our-team-container">
            <header className="our-team-header">
                <h1>Meet Our Team</h1>
                <p>We are a passionate group of professionals dedicated to revolutionizing healthcare with AI.</p>
            </header>

            <section className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <div className="team-image-container">
                            <img src={member.image} alt={member.name} className="team-member-img" />
                        </div>
                        <h3 className="team-member-name">{member.name}</h3>
                        <p className="team-member-role">{member.role}</p>
                        <p className="team-member-bio">{member.bio}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default OurTeam;
