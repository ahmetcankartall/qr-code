
function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#d6e3f8]">
      <div className="w-[320px] h-[499px] bg-white flex flex-col items-center justify-center rounded-lg p-6 shadow-lg">
        <img className="w-[288px] h-[288px]  rounded-lg"
          src="/images/image-qr-code.png"
          alt="QR Code"
        />

        <h1 className="text-center text-[#1f3251] font-bold text-[22px] mt-2 mb-2 ">
          Improve your front-end skills by building projects
        </h1>

        <p className="text-center text-[#7b879d] pb-6 ">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
 
      <footer className="pt-12 text-center text-[#7b879d]  ">
        Challenge by{' '}
        <a className="text-[#7b879d] hover:text-[#1f3251] underline"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
rel="noopener noreferrer">
          Frontend Mentor
        </a>
        .

        Coded by{' '}
        <a className="text-[#7b879d] hover:text-[#1f3251] underline "
          href="https://github.com/ahmetcankartall"
          target="_blank"
rel="noopener noreferrer"
        >
          Ahmet Can Kartal
        </a>
        .
      </footer>
    </main>
  )
}

export default App

