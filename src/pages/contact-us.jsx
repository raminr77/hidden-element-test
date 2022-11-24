import { useState } from 'react';
import { Input } from 'components/input';
import { StaticPageLayout } from 'layouts/static-page';

const INIT_DATA = { email: '', message: '', fullName: '' };

function ContactUsPage() {
  const [errorMessages, setErrorMessages] = useState([]);
  const [formInputData, setFormInputData] = useState(INIT_DATA);

  const validator = () => {
    const messages = [];
    if (formInputData.email.length < 8) {
      messages.push('The email should be have more than 8 characters.');
    }
    if (formInputData.fullName.length < 3) {
      messages.push('The full name should be have more than 4 characters.');
    }
    if (formInputData.message.length < 10) {
      messages.push('The message should be have more than 10 characters.');
    }
    setErrorMessages(messages);

    return !!messages.length > 0;
  };

  const changeInput = (event) => {
    setFormInputData({ ...formInputData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-useless-return
    if (validator()) return;
    // eslint-disable-next-line no-alert
    window.alert('Thank You :)');
    setFormInputData(INIT_DATA);
    document.getElementById('message-input').value = '';
  };

  return (
    <StaticPageLayout title="Contact Us">
      <form onSubmit={onSubmit} className="w-full flex flex-col items-start">
        <Input
          required
          name="fullName"
          label="Full Name"
          onChange={changeInput}
          value={formInputData.fullName}
          placeholder="Enter Your Full Name"
        />
        <Input
          required
          name="email"
          type="email"
          label="Email"
          onChange={changeInput}
          value={formInputData.email}
          placeholder="Enter Your Email"
        />
        <Input
          required
          isTextArea
          name="message"
          label="Message"
          id="message-input"
          onChange={changeInput}
          value={formInputData.message}
          placeholder="Enter Your Message ..."
        />

        {/* Errors */}
        <ul>
          {errorMessages.map((errorMessage) => (
            <li key={errorMessage} className="text-primaryHover text-md leading-8">
              {errorMessage}
            </li>
          ))}
        </ul>

        <button
          type="submit"
          className="bg-primaryHover hover:bg-primary text-light px-10 py-3 rounded mt-3"
        >
          Submit
        </button>
      </form>
    </StaticPageLayout>
  );
}

export { ContactUsPage };
