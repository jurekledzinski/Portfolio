import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import "./ContactSection.scss";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";

const ContactSection = () => {
  const contactRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contactRef.current) {
      dispatch(addSingleSection(contactRef.current));
    }
  }, []);

  return (
    <section className="contact" ref={contactRef}>
      <div className="contact__wrapper">Contact section</div>
    </section>
  );
};

export default ContactSection;
