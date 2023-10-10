export default function Footer() {
  return (
    <footer className="flex bg-purple-light justify-center items-center py-2">
      <div className="text-m flex flex-grow justify-center items-center text-center">
        <p>
          Designed, developed, and hosted by
          <a
            href="https://RooneyIT.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline"
          >
            {' '}
            RooneyIT Solutions, LLC
          </a>
        </p>
      </div>
    </footer>
  );
}
