import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const color = useColorModeValue("gray.800", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID!;

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.currentTarget, userID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
        setFormData({
          email: "",
          name: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
  };

  const handleChange = (e: { target: { id: string; value: string } }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleOnClose = () => {
    setFormData({
      email: "",
      name: "",
      message: "",
    });
    onClose()
  }

  return (
    <>
      <Button style={{ top: "0.57rem" }} onClick={onOpen} color={color}>
        Contact me!
      </Button>

      <Modal
        initialFocusRef={initialRef}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Contact form</ModalHeader>
            <ModalCloseButton onClick={handleOnClose}/>
            <ModalBody>
              <FormControl>
                <FormLabel>Your E-mail</FormLabel>
                <Input
                  name="email"
                  id={"email"}
                  ref={initialRef}
                  placeholder="E-mail"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Your / Your company's name</FormLabel>
                <Input
                  name="name"
                  id={"name"}
                  placeholder="Name"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Your Message</FormLabel>
                <Input
                  name="message"
                  id={"message"}
                  height={"150px"}
                  placeholder="Message"
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              {formData.name === "" ||
              formData.name === "" ||
              formData.message === "" ? (
                <Button
                  type="submit"
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  isDisabled
                >
                  Send
                </Button>
              ) : (
                <Button
                  type="submit"
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                >
                  Send
                </Button>
              )}
              <Button variant="ghost" onClick={handleOnClose}>
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
