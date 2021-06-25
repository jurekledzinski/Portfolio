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

const ContactSection = () => {
  const contactRef = useRef(null);
  const dispatch = useDispatch();
  const dataMsgServer = useSelector((store) => store.serverMsgData);
  const idTimeout = useRef(null);

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
        {/* <h3 className="contact__title">Contact</h3> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            console.log(formik);
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
                <span className="contact__icon">
                  <i className="fab fa-linkedin"></i>
                </span>
              </div>
            );
          }}
        </Formik>
      </div>
      <ContactSvgWave />
    </section>
  );
};

export default ContactSection;
