import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import dogGif from "../resources/simplescreenrecorder-2-6uyah0kx_OUzpg5UW.gif";

const ProjectsGrid = () => {
  const bg = {
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    webkitBackdropFilter: "blur(10px)",
  };

  return (
    <>
      <SimpleGrid spacing={5} maxWidth="700px" sx={{ marginTop: "3rem" }}>
        <Card sx={bg}>
          <CardHeader>
            <Text fontSize="3xl">
              Athens - Sports apparel and accessories e-commerce
            </Text>
            <br />
            <a href="https://athens-theta.vercel.app/">
              <img
                src="https://user-images.githubusercontent.com/85205823/192325244-1e46ba81-e6da-4f26-b3f0-ff3fd068a8eb.gif"
                width="700"
                alt="loading..."
              />
            </a>
          
          </CardHeader>
          <CardBody>
            <Text fontSize="lg">
              This was the final project of the "Henry" bootcamp in which I
              cooperated with another 7 students.
              <br />
              <br />
              We created a complete e-commerce that displays:
              <br />
              * Neat landing page.
              <br />
              * Contact, checkout and log in controlled forms.
              <br />
              * Products page and controlled filtering.
              <br />
              * Shopping Cart.
              <br />
              * Complete purchase Checkout.
              <br />
              * Admin control panel for items and users.
              <br />
              <br />
              My contribution, besides working in conjunction with my teammates
              on the landing page, contact form, products page, filtering, and
              admin pannel, was primarily to come up with the overall design of
              the page, as well as to unify the styles as a whole. To accomplish
              this I learned to use Figma and some design principles needed for
              the assignment. I also helped with the general organization of the
              team in terms of work flow.
              <br />
              <br />
              I'm happy to say that we passed the assignment with merits!
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="http://athens-theta.vercel.app/" isExternal>
              <Button>View here</Button>
            </Link>
            <Link href="https://github.com/mas2986/PG_Front.git" isExternal>
            <Button ml="2">Github repo</Button>
            </Link>
            <Link
              href="https://www.figma.com/file/yakoREjsnKFagDZSgrSKeV/Manuel-Benitez's-team-library?node-id=0%3A1"
              isExternal
            >
              <Button ml="2">Figma Mockup</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card sx={bg}>
          <CardHeader>
          <Text fontSize="3xl"> Dog Breed Finder </Text>
          <br />
          <img src={dogGif} alt="loading" />
          </CardHeader>
          <CardBody>
            <Text fontSize="lg">
              
              This was an individual project from the "Henry" full stack
              bootcamp, which had to be completed in less than 3 weeks.
              <br />
              <br />
              The tech stack used in this project was:
              <br />
              * React
              <br />
              * Redux
              <br />
              * Express
              <br />
              * Sequelize - Postgres
              <br />
              <br />
              I made use of an external api (thedogapi.com), populated my own database, created filters and a controlled form to create new data.
              <br />
            </Text>
          </CardBody>

          <CardFooter>
            <Link href="https://github.com/ManuBeni/PI-Dogs" isExternal>
            <Button >Github repo</Button>
            </Link>          
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default ProjectsGrid;
