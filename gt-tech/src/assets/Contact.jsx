import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .common-heading {
    font-size: 30px;
    color: #333;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    margin-top: 0rem;
    margin-bottom: 5rem;
  }

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #ADD8E6;
          border-radius: 5px;
          transition: border-color 0.3s ease-in-out;

          &:focus {
            outline: none;
            border-color: ${({ theme }) => theme.colors.btn};
          }
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          background-color: blue;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 1rem;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

function Contact() {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28639.97702467645!2d91.69619390000001!3d26.196771700000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5aea122132c3%3A0x44767bb468a831d1!2sIIT%20Guwahati%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1685967624205!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xayzgjld"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
