import { Facebook, LinkedIn } from "@mui/icons-material";

export default function FooterSection() {
  return (
    <footer className="bg-blue-800 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">
            IESL STUDENT CHAPTER - <br /> UNIVERSITY OF PERADENIYA
          </h2>
          <p className="text-sm font-semibold">
            YOUNG ENGINEERS FOR A BETTER FUTURE
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
          <p>Bandaranayake Mawatha,</p>
          <p>Peradeniya 10400</p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            iesluopstudentschapter@gmail.com
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              <LinkedIn />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">USEFUL LINKS</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://www.pdn.ac.lk/" className="hover:underline">
                University of Peradeniya
              </a>
            </li>
            <li>
              <a href="https://iesl.lk/index.php?lang=en" className="hover:underline">
                IESL
              </a>
            </li>
            <li>
              <a href="https://iesl.lk/index.php?option=com_chapters&view=committees&stdcom=181&Itemid=224&lang=en" className="hover:underline">
                IESL YMS
              </a>
            </li>
            <li>
              <a href="https://www.ecsl.gov.lk/" className="hover:underline">
                ECSL
              </a>
            </li>
          </ul>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/logo.svg"
            alt="IESL Logo"
            className="h-35 bg-white p-2 rounded"
          />
        </div>
      </div>
    </footer>
  );
}
