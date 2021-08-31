import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { sendEmail } from "../../../utils/sessions";

import ContactSvgWave from "./ContactSvgWave";
import ServerMessage from "./ServerMessage";

import {
  addServerErrorMessage,
  addServerSuccessMessage,
  clearServerMessage,
} from "../../../reduxeStore/actions/actionServerMessages";

import "./ContactSection.scss";

import { addSingleSection } from "../../../reduxeStore/actions/actionSections";
import useObserverContactWave from "./useObserverContactWave";

const ContactSection = () => {
  const contactRef = useRef(null);
  const dispatch = useDispatch();
  const dataMsgServer = useSelector((store) => store.serverMsgData);
  const idTimeout = useRef(null);

  useObserverContactWave();

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, submitProps) => {
    submitProps.resetForm();

    const { data, status } = await sendEmail(values);

    if (status !== 200) {
      dispatch(addServerErrorMessage(data.alert));
    } else {
      dispatch(addServerSuccessMessage(data.success));
    }
  };

  useEffect(() => {
    if (dataMsgServer.successServerMsg || dataMsgServer.errorServerMsg) {
      setTimeout(() => {
        idTimeout.current = dispatch(clearServerMessage());
      }, 1000);
    }

    return () => clearTimeout(idTimeout.current);
  }, [dataMsgServer.errorServerMsg, dataMsgServer.successServerMsg]);

  const errorMsg = (props) => {
    return <p className="contact__error-msg">{props.children}</p>;
  };

  useEffect(() => {
    if (contactRef.current) {
      dispatch(addSingleSection(contactRef.current));
    }
  }, []);

  return (
    <section className="contact" ref={contactRef}>
      <div className="contact__wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <div className="contact__form-wrapper">
                <h3 className="contact__title">Contact</h3>
                <Form className="contact__form" onSubmit={formik.handleSubmit}>
                  {!Boolean(Object.keys(formik.errors).length) &&
                  dataMsgServer.errorServerMsg ? (
                    <ServerMessage />
                  ) : (
                    <ServerMessage />
                  )}
                  <ErrorMessage name="name" component={errorMsg} />
                  <label className="contact__label">Name:</label>
                  <Field
                    className="contact__input"
                    name="name"
                    placeholder="Name surname"
                    type="text"
                  />
                  <ErrorMessage name="email" component={errorMsg} />
                  <label className="contact__label">Email:</label>
                  <Field
                    className="contact__input"
                    name="email"
                    type="email"
                    placeholder="Your email"
                  />
                  <ErrorMessage name="message" component={errorMsg} />
                  <label className="contact__label">Message:</label>
                  <Field
                    as="textarea"
                    className="contact__textarea"
                    name="message"
                    placeholder="Type in your message..."
                  />
                  <button
                    className="contact__button"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Send
                  </button>
                </Form>
                <a className="contact__icon" href="https://www.linkedin.com">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            );
          }}
        </Formik>

        <svg
          className="contact__blob-1"
          preserveAspectRatio="none"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg"
        >
          <defs>
            <linearGradient id="gradient-15" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop stopColor="rgba(253, 200, 48, 0.55)" offset="0%"></stop>
              <stop stopColor="rgba(243, 115, 53, 0.4)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            id="blob"
            d="M313.5,326Q299,402,237,353Q175,304,132,218.5Q89,133,201.5,93Q314,53,321,151.5Q328,250,313.5,326Z"
            fill="url(#gradient-15)"
          ></path>
        </svg>
      </div>
      <ContactSvgWave />
    </section>
  );
};

export default ContactSection;
