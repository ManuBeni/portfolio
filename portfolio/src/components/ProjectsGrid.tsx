import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const ProjectsGrid = () => {
  const bg = {
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    webkitBackdropFilter: "blur(10px)",
  };

  return (
    <>
      <SimpleGrid
        spacing={5}
        maxWidth="700px"
        
        sx={{marginTop:"3rem"}}
      >
        <Card sx={bg}>
          <CardHeader>
            <Text fontSize="3xl">Athens - Sport Apparel and  E-commerce</Text>
            {/* <Heading size="md"> Athens - Sport Apparel and  E-commerce</Heading> */}
          </CardHeader>
          <CardBody>
          <a href="https://athens-theta.vercel.app/" >
          <img src="https://user-images.githubusercontent.com/85205823/192325244-1e46ba81-e6da-4f26-b3f0-ff3fd068a8eb.gif" width="700"/>
          </a>
          <br/>
            <Text fontSize="lg" >
              This was the final project of the "Henry" bootcamp in which I cooperated with another 7 students.
              <br/>
              <br/>
              We created a complete e-commerce that displays: 
              <br/>
              * Neat landing page.
              <br/>
              * Contact, checkout and log in controlled forms.
              <br/>
              * Products page and controlled filtering.
              <br/>
              * Shopping Cart.
              <br/>
              * Complete purchase Checkout. 
              <br/>
              * Admin control panel for items and users.
              <br/>
              <br/>
              My contribution, besides working in conjunction with my teammates on the landing page, contact form, products page, filtering, and admin pannel, was primarily to come up with the overall design of the page, as well as to unify the styles as a whole.
              To accomplish this I learned to use Figma and some design principles needed for the assignment.
              I also helped with the general organization of the team in terms of work flow. 
              <br/>
              <br/>
              I'm happy to say that we passed the assignment with merits!
            </Text>
          </CardBody>
          <CardFooter>
            <Link href="http://athens-theta.vercel.app/" isExternal>
            <Button >View here</Button>
            </Link>
            <Link href="https://www.figma.com/file/yakoREjsnKFagDZSgrSKeV/Manuel-Benitez's-team-library?node-id=0%3A1" isExternal>
            <Button ml="2">Figma Mockup</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card sx={bg}>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button isDisabled>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default ProjectsGrid;
