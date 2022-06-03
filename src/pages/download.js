import React, {useEffect} from 'react';
import {
  isAndroid,
  isIOS
} from "react-device-detect";

function Download() {

  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/";
    }else if(isIOS) {
      window.location.href =
        "https://apps.apple.com";
    } else{
      window.location.href =
        "https://play.google.com/store/";
    }
  }, []);

  return (
    <div className="Download">
    </div>
  );
}

export default Download;