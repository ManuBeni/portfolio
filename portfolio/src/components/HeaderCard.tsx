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
        Box
        
        } from '@chakra-ui/react'
import styles from "./HeaderCard.module.css"
import ProfilePic from "../resources/ProfilePic.png"
import ThemeButton from './ThemeButton'

const HeaderCard = () => {

  const color = useColorModeValue('gray.800','white' )  
  const { isOpen, onToggle } = useDisclosure()
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
                ml="8px"
                mr="8px"
                size='2xl' 
                py="5"
                // bgGradient='linear(to-l, #E07A5F, #F2CC8F)'
                // bgClip='text'
                fontSize='6xl'
                fontWeight='700'
                fontFamily='Syne'>
                Hi! I'm Manuel Benitez
              </Heading>
              <Text py='3' fontSize={28}>
                Full Stack Developer - Front End Designer
              </Text>
              <Text py='3' fontSize={20} wordBreak='break-all'>
                React, Node, Express, Redux, JS, Typescript, <br/>
                Material UI, CSS, Sass, HTML, PostgresSQL, Figma
              </Text>
            </CardBody>

            <CardFooter sx={{ justifyContent:"center"}}>
              <Button variant='solid' color= {color} size="xlg" sx={{ bottom:"10px", padding:"2rem"}}
              onClick={onButtonClick}>
                Download CV
              </Button>
              <Button ml="20px" mt="10px" onClick={onToggle}>Projects</Button>
            </CardFooter>
          </Stack>
        </Card>
        </div>
        <div>
        <Collapse in={isOpen} animateOpacity>
            <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo at iste, error accusantium, eveniet dolorem totam voluptatem eius a sequi distinctio vitae itaque perferendis ipsam nemo molestias quis quas?
        
      
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo at iste, error accusantium, eveniet dolorem totam voluptatem eius a sequi distinctio vitae itaque perferendis ipsam nemo molestias quis quas?

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo at iste, error accusantium, eveniet dolorem totam voluptatem eius a sequi distinctio vitae itaque perferendis ipsam nemo molestias quis quas?

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo at iste, error accusantium, eveniet dolorem totam voluptatem eius a sequi distinctio vitae itaque perferendis ipsam nemo molestias quis quas?

        </Box>
      </Collapse>
        </div>
        </>
    )
}

export default HeaderCard