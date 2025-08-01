import React from 'react'
import styled from 'styled-components';

const Contact = () => {
    return (
        <>
            <Styled.Wrapper>
                <h2>Contact Me</h2>

                <p>
                    Thank you for visiting <strong>a2rp: mini-projects</strong>. <br />
                    Whether you're a developer, student, recruiter, or just someone who enjoys exploring small but meaningful web projects — I'm glad you're here!
                </p>

                <h3>📬 Let's Connect</h3>
                <p>
                    If you'd like to reach out for:
                </p>
                <ul>
                    <li>✨ Feedback or suggestions on existing projects</li>
                    <li>🤝 Collaboration on new React or frontend tools</li>
                    <li>🧠 Mentorship, code reviews, or learning resources</li>
                    <li>💼 Hiring, internships, or freelance opportunities</li>
                    <li>📢 Reporting issues, bugs, or sharing new project ideas</li>
                </ul>

                <p>
                    Feel free to contact me through any of the following channels:
                </p>

                <h3>📨 Email</h3>
                <p>
                    <strong>ash.ranjan09@gmail.com</strong><br />
                    I respond to emails personally and aim to reply within 24-48 hours.
                </p>

                <h3>🔗 Social Media</h3>
                <ul>
                    <li>
                        <strong>LinkedIn:</strong>{' '}
                        <a href="https://www.linkedin.com/in/aashishranjan/" target="_blank" rel="noreferrer">
                            linkedin.com/in/aashishranjan/
                        </a>
                    </li>
                    <li>
                        <strong>GitHub:</strong>{' '}
                        <a href="https://github.com/a2rp" target="_blank" rel="noreferrer">
                            github.com/a2rp
                        </a>
                    </li>
                    <li>
                        <strong>Twitter (X):</strong>{' '}
                        <a href="https://x.com/ashish_webdev" target="_blank" rel="noreferrer">
                            @ashish_webdev
                        </a>
                    </li>
                </ul>

                <h3>🌐 Portfolio</h3>
                <p>
                    You can also explore my main developer portfolio at: under construction
                </p>

                <h3>📝 Project Ideas or Issues?</h3>
                <p>
                    If you're a developer and have ideas for new mini-projects, or if you've found a bug in one of the existing ones, feel free to open an issue or pull request directly on the{' '}
                    <a href="https://github.com/a2rp/mini-projects" target="_blank" rel="noreferrer">
                        GitHub repo
                    </a>. Collaboration is always welcome!
                </p>

                <h3>🤗 Let's Build Together</h3>
                <p>
                    I'm passionate about helping others grow through practical code, open-source, and mentorship. If you're working on something exciting, learning React, or want to team up — reach out. Let's build meaningful tools and learn from each other.
                </p>

                <p><strong>Looking forward to hearing from you!</strong></p>


            </Styled.Wrapper>
        </>
    )
}

export default Contact

const Styled = {
    Wrapper: styled.div`
        max-width: 600px;
        margin: auto;
    
        h2 {
            margin-bottom: 15px;
        }
        h3 {
            margin-bottom: 5px;
        }
        p {
            margin-bottom: 30px;

            a {
                color: #fff;
            }
        }
        ul {
            margin-bottom: 30px;
            padding-left: 15px;

            a {
                color: #fff;
            }
        }
    `,
};