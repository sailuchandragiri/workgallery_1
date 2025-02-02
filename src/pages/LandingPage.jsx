import { useEffect, useState, useRef } from 'react';
const FriendsSinging =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/FiendsSinging.svg';
const ShareFriends =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/ShareFriends.svg';
const UploadToCloud =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/UploadToCloud.svg';
const HiHand =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/HifiHand.svg';
const GroupPortfolio =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/GroupPortfolio.svg';
const Snippet =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Snippit.svg';
const Snippet_2 =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Snippit_2.svg';
const Loading =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Loading.svg';
const Send = 'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Send.svg';
const Convert =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Convert.svg';
const Format =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Frame.svg';
const Search =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Search.svg';
const NetworkSearch =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/NetworkBackground.svg';
const NetworkGroup =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/NetworkGroup.svg';
const JoinBG =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/JoinBg.png';
const Instagram =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/instagram.svg';
//import XLogo from 'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/x-logo.svg';
const Connect =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Connect.svg';
const Desktop_12 =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Desktop_12.svg';
const NetworkBackground =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/NetworkBackground.svg';
const Horizontal =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Horizontal.svg';
const Create =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Create.svg';
const Elevate =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Elevate.svg';
const Sprinkle =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Sparkle.svg';
const Designer =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Designer.svg';
const FemaleDesigner =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/FemaleWebDesigner.svg';
const ColorPallet =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/ColorPellet.svg';
const Rocket =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Rocket.svg';
const Stairs =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Stairs.svg';
const PinkSun =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/PinkSun.svg';
const ChatBubble =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/ChatBubble.svg';
const Line =
  'https://workgallery-assets-bucket.s3.us-east-2.amazonaws.com/static-assets/Horizontal_1.svg';

const LandingPage = () => {
  const waitListButtonRef = useRef(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [email, setEmail] = useState('');
  const TitleImages = [Connect, Create, Elevate];
  const LeftTopImages = [FriendsSinging, Sprinkle, Rocket];
  const LeftBottomImages = [ShareFriends, Designer, Stairs];
  const RightTopImages = [UploadToCloud, FemaleDesigner, ChatBubble];
  const RightBottomImages = [HiHand, ColorPallet, PinkSun];
  const colors = ['bg-[#026BF6]', 'bg-[#43943C]', 'bg-[#9E00FF]'];
  const borderColors = ['border-[#4285F4]', 'border-[#1EA713]', 'border-[#B042F4]'];
  const shadowColors = ['shadow-teal-400', 'shadow-green-500', 'shadow-purple-500'];
  const [buttonText, setButtonText] = useState('Join Wait List');
  const handleClick = () => {
    setIsButtonClicked((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await .post('/waitlist', JSON.stringify({ email }));
      let response = fetch('http://localhost:3500/api/v1/waitlist', {
        method: 'POST',
      });
      response = await response.json();
      console.log(response);
      if (response.status === 200) {
        setButtonText('You are added');
        setIsButtonClicked((prev) => !prev);
      }
      handleClick();
    } catch (err) {
      console.log(e);
      setButtonText('Failed to add you..');
    }
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % TitleImages.length);
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [TitleImages.length]);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50); // Adjust the interval as needed

    return () => clearInterval(rotateInterval);
  }, []);

  const imageStyle = {
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.05s linear',
  };

  const radialGradientStyles = {
    borderRadius: '999px',
    opacity: 0.9421,
    backgroundImage:
      'radial-gradient(50% 50% at 50% 50%, rgba(2, 107, 246, 0.50) 0%, rgba(2, 107, 246, 0.00) 100%)',
    filter: 'blur(0.2px)',
  };
  function scrollToWaitList() {
    if (waitListButtonRef.current) {
      /*
      // @ts-expect-error :progress Event need to fix */
      waitListButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  return (
    <div className="bg-[#040102] pt-12 text-white font-montserrat text-center md:text-left">
      {/* <h1 className="text-[4rem] font-normal text-center mx-6 md:mx-20">workgallery</h1> */}
      {/* Desktop and tab view of connect */}
      <div className="md:block mx-6 md:mx-20">
        <div className="mt-14 flex justify-between">
          <div className="flex flex-col gap-48">
            <div className="w-[250px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ...">
                {LeftTopImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-[250px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ...">
                {LeftBottomImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center ...">
            <div className="relative overflow-hidden h-[90px] flex justify-center ">
              {TitleImages.map((image, index) => (
                <img
                  key={index}
                  className={`absolute bottom-0 transition-transform duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                  src={image}
                  alt={`Transforming Image ${index + 1}`}
                />
              ))}
            </div>
            <p className="font-gilroy mt-10 text-base text-subtitle font-normal text-center leading-8">
              Craft Your Profile with WorkGallery, Elevate Your Presence, and <br />
              Connect with Like-minded Creatives
            </p>
            <div className="flex justify-center items-center mt-20">
              <div className="flex justify-center items-center">
                {isButtonClicked ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex justify-center items-center flex-col "
                  >
                    <input
                      type="email"
                      placeholder="enter email"
                      onChange={(e) => {
                        if (e.target.value.length === 0) {
                          handleClick();
                        }
                        setEmail(e.target.value);
                      }}
                      value={email}
                      className="border-4 w-[200px] md:w-[530px]  text-center border-gray-700 rounded-full py-3 px-4 bg-transparent  font-thin focus:outline-none "
                    />
                    <button
                      className={`w-[530px]  text-center my-5 font-gilroy text-xl font-normal rounded-full shadow border-2 p-2 py-4 ${colors[currentImageIndex]} ${borderColors[currentImageIndex]} ${shadowColors[currentImageIndex]} text-white`}
                    >
                      Join Wait list
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={handleClick}
                    ref={waitListButtonRef}
                    className={`w-[530px] font-gilroy text-xl font-normal rounded-full shadow border-2 p-2 py-4 ${colors[currentImageIndex]} ${borderColors[currentImageIndex]} ${shadowColors[currentImageIndex]} text-white`}
                  >
                    {buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-48 pt-28">
            <div className="w-[250px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ">
                {RightTopImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-[150px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ">
                {RightBottomImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view of connect */}
      <div className="display-block md:hidden mx-6 md:mx-20">
        <div className="flex flex-col mt-10 gap-24 text-white ">
          <div className="flex justify-between ... px-14">
            <div className="w-[80px] h-[85px] mt-14 ">
              <div className="relative overflow-hidden h-[80px] flex justify-center ...">
                {LeftBottomImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-[80px] h-[85px] ">
              <div className="relative overflow-hidden h-[80px] flex justify-center ...">
                {LeftTopImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 ...">
            <div className="relative overflow-hidden h-[90px] flex justify-center ">
              {TitleImages.map((image, index) => (
                <img
                  key={index}
                  className={`absolute bottom-0 transition-transform duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                  src={image}
                  alt={`Transforming Image ${index + 1}`}
                />
              ))}
            </div>
            <div className="font-gilroy text-sm text-subtitle text-center leading-6">
              Craft Your Profile with WorkGallery, Elevate Your Presence, and <br />
              Connect with Like-minded Creatives
            </div>
          </div>
          <div className="flex justify-between px-14 ...">
            <div className="w-[80px] h-[85px] ">
              <div className="relative overflow-hidden h-[80px] flex justify-center ">
                {RightTopImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-[80px] h-[85px] mt-14">
              <div className="relative overflow-hidden h-[80px] flex justify-center ">
                {RightBottomImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex justify-center items-center">
              <button className=" w-[380px] py-3 px-6 text-sm font-gilroy shadow-sm shadow-teal-400 rounded-full border-2 border-accent bg-accent">
                Join the wait list
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Old Portfolio screen */}
      <div
        className="mt-10 mx-6 md:mx-10 flex flex-col gap-2 md:gap-3 font-gilroy justify-center p-6 md:p-6 md:mt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Desktop_12})` }}
      >
        <h3 className="text-lg md:text-4xl font-bold text-center font-gilroy">
          Say <strong className="text-accent">Goodbye to the Old Style</strong> of <br /> Editing
          Portfolio
        </h3>
        <p className="text-sm md:text-2xl text-pf_subtitle font-normal text-center">
          Choose from 1000s of themes based on your profession
        </p>
        <div className="flex justify-center ...">
          <div className="flex justify-between gap-4 rounded-xl md:rounded-2xl mt-8 md:mt-14 text-sm md:text-lg font-normal bg-accent py-3 px-10 md:py-5 md:px-16  w-[350px] md:w-[500px]">
            <p>Feasible</p>
            <p>|</p>
            <p>Scalable</p>
            <p>|</p>
            <p>Optimized</p>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-20">
          <img src={GroupPortfolio} alt="Group_Portfolio" />
        </div>
      </div>

      {/* WorkAI screen for Mobile View */}

      {/* WorkAI screen for Desktop and Tab View */}

      {/* Network screen for Desktop and Tab View */}
      <div className="mt-14 mx-6 md:mx-10 p-8 hidden md:block font-gilroy">
        <div className="flex gap-6 flex-col justify-center ">
          <h3 className="text-4xl font-bold text-center font-gilroy">
            <strong className="text-accent">Networking Just Got Better </strong> with <br /> The
            Work Gallery
          </h3>
          <h4 className="text-xl text-pf_subtitle font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </h4>
          <div className="mt-32  flex justify-center ...">
            <img src={Search} alt="Search_icon" />
          </div>
        </div>
      </div>

      {/* Connect create screen */}
      <div
        className="mt-44 h-[580px] flex justify-center flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${JoinBG})` }}
      >
        <div className="text-center text-xl md:text-4xl font-semibold md:font-bold  font-gilroy">
          Connect Create Elevate
        </div>
        <div className="flex justify-center mt-6">
          <div className="flex justify-center items-center">
            <button
              onClick={scrollToWaitList}
              className="w-[380px] md:w-[530px] text-sm md:text-xl font-gilroy shadow-sm shadow-teal-400 rounded-full border-2 border-accent bg-accent py-3 px-12"
            >
              Join the wait list
            </button>
          </div>
        </div>
      </div>

      {/* Footer for desktop and tab view */}
      <footer className=" md:block bg-[#131313] py-16 px-32 font-gilroy">
        <div className="flex flex-col gap-6 justify-center ...">
          <div className="flex justify-center gap-14 ...">
            <a href="https://www.instagram.com/workgallery.io/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/Workgallery_io/communities">
              <img src={''} alt="x-logo" />
            </a>
          </div>
          <div className="flex justify-center gap-10 leading-2 text-base font-normal text-footer_font ...">
            <a href="/blogs">Blogs</a>
            <a href="/about">About Us</a>
          </div>
          <div className="flex justify-center ...">
            <img src={Horizontal} alt="Horizontal" />
          </div>
          <p className="text-center font-normal text-base text-footer_font">Workgallery.io 2023</p>
        </div>
      </footer>

      {/* Footer for Mobile View */}
    </div>
  );
};

export default LandingPage;
