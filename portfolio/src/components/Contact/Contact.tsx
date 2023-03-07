import { Button, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import ContactModal from "../ContactModal";

export default function Contact() {
  const color = useColorModeValue("gray.800", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  return (
    <>
      <Button style={{ top: "0.57rem" }} onClick={onOpen} color={color}>
        Contact me!
      </Button>

      <ContactModal
        isOpen={isOpen} onClose={onClose}
      />
    </>
  );
}
