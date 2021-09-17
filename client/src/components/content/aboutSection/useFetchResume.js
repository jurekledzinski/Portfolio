import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { projectStorage } from "../../../firebase/config";

import { displayErrorFirebase } from "../../../reduxeStore/actions/actionHandleErrorFirebase";

const useFetchResume = () => {
  const dispatch = useDispatch();
  const [downloadPrecentageResume, setDownloadPrecentageResume] = useState(0);
  const timeClearOne = useRef(null);

  const handleFetchResume = () => {
    let percent = 0;
    const pathReference = projectStorage.ref("Resume Jerzy Ledzinski.pdf");

    pathReference
      .getDownloadURL()
      .then((url) => {
        axios({
          url: url,
          method: "GET",
          responseType: "blob",
          onDownloadProgress: (progressEvent) => {
            percent = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setDownloadPrecentageResume(percent);
          },
        })
          .then((response) => {
            const toUrl = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = toUrl;
            link.setAttribute("download", "Resume Jerzy Ledzinski.pdf");
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            timeClearOne.current = setTimeout(
              () => setDownloadPrecentageResume(0),
              400
            );
          })
          .catch((err) => {
            dispatch(displayErrorFirebase("Can't fetch resume"));
          });
      })
      .catch((err) => {
        dispatch(displayErrorFirebase("Can't fetch resume"));
      });
  };

  useEffect(() => {
    return () => clearTimeout(timeClearOne.current);
  }, []);

  return { downloadPrecentageResume, handleFetchResume };
};

export default useFetchResume;
