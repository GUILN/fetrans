const Footer = () => (
  <footer className="container bg-white divide-y">
    This is the footer
    <div className="inline-flex">
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
        Prev
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
        Next
      </button>
    </div>
  </footer>
);

export default Footer;
