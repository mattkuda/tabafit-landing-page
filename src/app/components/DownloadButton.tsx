import { useState, useEffect } from 'react';
import { IconArrowRight, IconX } from '@tabler/icons-react';
import Image from 'next/image';

export default function DownloadButton() {
  const [isMobile, setIsMobile] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  // Detect if the user is on a mobile device
  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobileRegex = /iPhone|iPad|iPod|Android/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  // Function to handle "Download" button click
  const handleDownloadClick = () => {
    if (isMobile) {
      // Redirect to App Store on mobile devices
      window.location.href = 'https://apps.apple.com/app/idYOUR_APP_ID'; // Replace with your App Store link
    } else {
      // Show QR modal on desktop
      setShowQRModal(true);
    }
  };

  return (
    <>
      {/* {showQRModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Download TabaFit</h2>
            <p className="mb-4">Scan this QR code with your mobile device to download the app.</p>
            <Image
              src="/favicon.png"
              alt="Share your workout"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 300, height: 300 }} // optional
            />
                <div className="mt-4">
              <button
                className="btn text-lg w-full max-w-md bg-gradient-to-r from-primary to-secondary border-none flex items-center justify-center group transition ease-in-out hover:scale-105 duration-300"
                onClick={() => setShowQRModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
      {showQRModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative bg-white p-6 rounded-lg text-center">
            {/* Close Button in the top-right corner */}
            <button
              className="absolute top-2 right-2"
              onClick={() => setShowQRModal(false)}
            >
              <IconX className="h-6 w-6 text-black" />
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold mb-4 text-black">Scan to install TabaFit</h2>

            {/* QR Code */}
            <Image
              src="/favicon.png"
              alt="Share your workout"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 300, height: 300 }} // optional
            />          </div>
        </div>
      )}

      <div className="flex flex-col items-center w-full mt-4">
        <button
          className="btn text-lg w-full max-w-md bg-gradient-to-br from-primary to-secondary border-none flex items-center justify-center group transition ease-in-out hover:scale-105 duration-300"
          onClick={handleDownloadClick}
        >
          Download TabaFit
          <IconArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </>
  );
}
