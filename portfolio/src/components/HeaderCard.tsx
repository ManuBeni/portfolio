import {
  Card,
  Stack,
  Image,
  Heading,
  Button,
  CardBody,
  CardFooter,
  Text,
  useColorModeValue,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import styles from "./HeaderCard.module.css";
import ProfilePic from "../resources/ProfilePic.png";
import ThemeButton from "./ThemeButton";
import { motion } from "framer-motion";
import ProjectsGrid from "./ProjectsGrid";
import Contact from "./Contact";

const HeaderCard = () => {
  const color = useColorModeValue("gray.800", "white");
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Manuel-Benitez-CV-English.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Manuel-Benitez-CV-English.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <motion.div
        className={styles.body}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
      <div className={styles.themeButton}>
        <ThemeButton />
      </div>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          sx={{
            color: "white",
            backdropFilter: "blur(6px)",
            textAlign: "center",
            webkitBackdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            // maxWidth: "100%",
            // maxHeight: "100%",
          }}
        >
          <Image
            className="header-image"
            objectFit="cover"
            alignSelf="center"
            mb={["-1rem","0"]}
            maxW={{ base: "200px", sm: "350px" }}
            borderBottomLeftRadius={{md:"1px"}}
            borderRadius={["full", "15%"]}
            mt={["0.2rem","0"]}
            src={ProfilePic}
            alt="Loading..."
          />

          <Stack>
            <CardBody color={color}>
              <Heading
                ml="8px"
                mr="8px"
                // size={["xl","3xl"]}
                py="5"
                fontSize={["2.2em","4em"]}
                fontWeight="700"
                fontFamily="Syne"
              >
                Hi! I'm Manuel Benitez
              </Heading>

              <Text py={["0","3"]} fontSize={["24","28"]}>
                Full Stack Developer - Front End Designer
              </Text>

              <Text py="3" fontSize={["18","20"]} display={["none","block"]}>
                React, Node, Express, Sequelize, Redux, JS, Typescript, <br />
                Material UI, CSS, Sass, HTML, PostgresSQL, Figma
              </Text>
            </CardBody>

            <CardFooter
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
              flexDirection={["column", "row"]}
            >
              <motion.div
                animate={{ rotate: [0, 0, -20, 20, 0] }}
                transition={{ duration: 1 }}
              >
                <Button
                  variant="solid"
                  color={color}
                  size="xlg"
                  sx={{
                    bottom: "10px",
                    padding: "2rem",
                  }}
                  mt={["-1rem","0"]}
                  onClick={onButtonClick}
                >
                  Download CV
                </Button>
              </motion.div>
              <Button mt="10px" onClick={onToggle} color={color}>
                {isOpen ? "Hide Projects" : "Show Projects"}
              </Button>
              <Contact></Contact>
            </CardFooter>
          </Stack>
        </Card>
      </motion.div>
      <Collapse in={isOpen} animateOpacity>
          <ProjectsGrid/>
      </Collapse>
    </>
  );
};

export default HeaderCard;
