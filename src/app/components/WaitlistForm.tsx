import { useState } from 'react';
import { IconArrowRight, IconCheck, IconX } from '@tabler/icons-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState(''); // 'success' or 'error'

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleJoinWaitlist = async () => {
    if (!validateEmail(email)) {
      setToastType('error');
      setToastMessage('Please enter a valid email address.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      return;
    }

    try {
      const response = await fetch('https://tabafit.up.railway.app/waitlist', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setToastType('success');
        setToastMessage('Thanks for joining the waitlist!');
        setShowToast(true);
        setEmail(''); // Clear the email input field
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      } else {
        const errorData = await response.json();
        console.error('Failed to join the waitlist:', errorData);
        setToastType('error');
        setToastMessage(`Failed to join the waitlist: ${errorData.message}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setToastType('error');
      setToastMessage(`Failed to join the waitlist. Please try again. Error: ${JSON.stringify(error)}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {showToast && (
        <div className={`fixed z-50 top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 rounded shadow-lg flex items-center ${toastType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {toastType === 'success' ? (
            <IconCheck className="h-6 w-6 mr-2" />
          ) : (
            <IconX className="h-6 w-6 mr-2" />
          )}
          {toastMessage}
        </div>
      )}

      <input
        type="email"
        className="input text-lg input-bordered w-full max-w-md mb-4 bg-white text-black"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="btn text-lg w-full max-w-md bg-gradient-to-br from-primary to-secondary border-none flex items-center justify-center group transition ease-in-out hover:scale-105 duration-300"
        onClick={handleJoinWaitlist}
      >
        Join Waitlist
        <IconArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
      </button>
    </div>
  );
}
