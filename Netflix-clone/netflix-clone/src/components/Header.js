import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { toggleGptSearchView } from "../utils/slices/gptSlice";
import { changeLanguage } from "../utils/slices/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector(store=>store.config.lang);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-between">
          <button
            className="py-2  my-2 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? lang[langKey]["home"] : lang[langKey]["gptSearch"]}
          </button>
            <select
              className="p-2 m-6 bg-black text-white rounded-lg" 
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name }
                </option>
              ))}
            </select>
          
          {/* <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          /> */}
          <button onClick={handleSignOut} className="font-bold text-white ">
            🕕  {lang[langKey]["signOut"]}
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
