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
        
        } from '@chakra-ui/react'
import styles from "./HeaderCard.module.css"

import ProfilePic from "../resources/ProfilePic.png"
import ThemeButton from './ThemeButton'

const HeaderCard = () => {

  const color = useColorModeValue('gray.800','white' )  

  const onButtonClick = ()=>{
      // using Java Script method to get PDF file
      fetch('Manuel-Benitez-CV-PDF.pdf').then(response => {
      response.blob().then(blob => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'Manuel-Benitez-CV-PDF.pdf';
      alink.click();
      })
      })
      }
    return (
      <> 
      <div className={styles.themeButton}>
      <ThemeButton/>
      </div>
      <div className={styles.body}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          sx={{  
          color:"white",
          backdropFilter: "blur(6px)",
          textAlign:"center",
          webkitBackdropFilter : "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          maxWidth: "100%",
          maxHeight:"50%",
          
          }}
        >
          
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '300px' }}

            src={ProfilePic}
            alt='Caffe Latte'
          />

          <Stack>
            
            <CardBody color={color}>
              <Heading 
                size='2xl' 
                py="5"
                // bgGradient='linear(to-l, #E07A5F, #F2CC8F)'
                // bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'>
                Hi! I'm Manuel Benitez
              </Heading>
              <Text py='3' fontSize={21}>
                Full Stack Developer - Front End Designer
              </Text>
              <Text py='3' >
                React, Node, Express, Redux, JS, Typescript,
                Material UI, CSS, Sass, HTML, PostgresSQL, Figma
              </Text>
            </CardBody>

            <CardFooter sx={{ justifyContent:"center"}}>
              <Button variant='solid' color= {color} size="lg" sx={{ bottom:"10px", padding:"2rem"}}
              onClick={onButtonClick}>
                Download CV
              </Button>
              
            </CardFooter>
          </Stack>
        </Card>
        </div>
        </>
    )
}

export default HeaderCard