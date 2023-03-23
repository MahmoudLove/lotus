import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <div className="bg-cyan-500 flex justify-between overflow-hidden">
      <div className="flex gap-6 mx-auto">
        <p className="uppercase text-xl font-bold py-2 text-white">follow us</p>
        <figure className="flex items-center py-2 gap-1 ">
          <FaFacebookSquare className=" font-bold text-white text-2xl" />
          <span className="uppercase text-xl text-white">facebook</span>
        </figure>
        <figure className="flex items-center py-2 gap-1">
          <FaInstagram className=" text-white text-2xl" />
          <span className="uppercase text-xl text-white">instagram</span>
        </figure>
      </div>
      <div>
        <img
          src={require('../images/headerLogo.png')}
          className=" transfrom rotate-[315deg] scale-150"
          alt="the ahghah"
        />
      </div>
    </div>
  );
}

export default Footer;
