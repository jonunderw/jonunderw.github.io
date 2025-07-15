import React from 'react';

const jobExperiences = [
    {
        company: 'Tech Solutions Inc.',
        role: 'Frontend Developer',
        period: '2021 - Present',
        description: 'Developing and maintaining web applications using React and TypeScript.',
    },
    {
        company: 'Web Innovations',
        role: 'UI/UX Designer',
        period: '2019 - 2021',
        description: 'Designed user interfaces and improved user experience for various clients.',
    },
];

const hobbies = ['Photography', 'Hiking', 'Reading', 'Traveling'];
const interests = ['Web Development', 'Open Source', 'AI', 'Music'];

const AboutPage: React.FC = () => (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <h1>About Me</h1>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
            <img
                src="/images/profile.jpg"
                alt="Your Name"
                style={{ width: 150, height: 150, borderRadius: '50%', marginRight: '2rem', objectFit: 'cover' }}
            />
            <p>
                Hi! I&apos;m [Your Name], a passionate developer with a love for building engaging web experiences.
                I enjoy learning new technologies and collaborating with others to create impactful solutions.
            </p>
        </div>

        <section>
            <h2>Job Experiences</h2>
            <ul>
                {jobExperiences.map((job, idx) => (
                    <li key={idx} style={{ marginBottom: '1rem' }}>
                        <strong>{job.role}</strong> at <em>{job.company}</em> ({job.period})
                        <br />
                        <span>{job.description}</span>
                    </li>
                ))}
            </ul>
        </section>

        <section>
            <h2>Hobbies</h2>
            <ul>
                {hobbies.map((hobby, idx) => (
                    <li key={idx}>{hobby}</li>
                ))}
            </ul>
        </section>

        <section>
            <h2>Interests</h2>
            <ul>
                {interests.map((interest, idx) => (
                    <li key={idx}>{interest}</li>
                ))}
            </ul>
        </section>
    </div>
);

export default AboutPage;