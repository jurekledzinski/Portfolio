import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { projectStorage } from "../../../firebase/config";

const useFetchCertificates = () => {
  const [downloadPrecentaCertificates, setDownloadPrecentageCertificates] =
    useState(0);
  const timeClearTwo = useRef(null);

  const handleFetchCertificates = () => {
    let percent = 0;
    const pathRef = projectStorage.ref("Certificates test.pdf");

    pathRef
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
            setDownloadPrecentageCertificates(percent);
          },
        })
          .then((response) => {
            const toUrl = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = toUrl;
            link.setAttribute("download", "Certificates.pdf");
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            timeClearTwo.current = setTimeout(
              () => setDownloadPrecentageCertificates(0),
              400
            );
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    return () => clearTimeout(timeClearTwo.current);
  }, []);

  return { downloadPrecentaCertificates, handleFetchCertificates };
};

export default useFetchCertificates;
