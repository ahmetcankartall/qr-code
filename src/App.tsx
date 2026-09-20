function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#D5E1EF]">
      <div className="flex h-[499px] w-[320px] flex-col items-center rounded-2xl bg-white p-4 shadow-lg">
        <img
          className="h-[288px] w-[288px] rounded-2xl"
          src="/images/image-qr-code.png"
          alt="QR Code"
        />

        <h1 className="mt-6 text-center text-[22px] leading-[120%] font-bold text-[#1F314F]">
          Improve your front-end skills by building projects
        </h1>

        <p className="mt-4 text-center text-[16px] leading-[140%] tracking-[0.2px] text-[#68778D]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>

      <footer className="pt-12 text-center text-[#68778D]">
        Challenge by{' '}
        <a
          className="underline hover:text-[#1F314F]"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          className="underline hover:text-[#1F314F]"
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