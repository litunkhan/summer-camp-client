import logo from '../assets/695509_medical_512x512.png'
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col w-full">
            <img className="h-24 w-24 mb-2" src={logo} alt="Logo" />
            <h2 className="text-lg font-bold">Weight Loss School</h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>123 Main Street</p>
            <p>City, State, Zip Code</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: weightlossschool@gmail.com</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-bold mb-4">About</h3>
            
            <p>Our team of experienced nutritionists and fitness trainers are committed to providing the support and education needed for long-term success. Whether youre looking to lose a few pounds or embark on a transformative journey, we are here to guide you every step of the way.</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="list-none">
              <li><a href="/" className="text-gray-300 hover:text-gray-400">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-gray-400">About</a></li>
              <li><a href="/classes" className="text-gray-300 hover:text-gray-400">Classes</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Weight Loss School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


