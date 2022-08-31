import { Flex, Button, Stack } from "@chakra-ui/react";
import{ SubmitHandler, useForm } from 'react-hook-form'
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email:string;
  password: string;
}

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
   // resolver: youResolver()
  })

  const handleSignIn:SubmitHandler<SignInFormData> = async(values)=>{
    await new Promise(resolve => setTimeout(resolve, 2000)) 

    console.log(values)
    
  }
  return (
    <Flex 
      width="100vw" 
      h="100vh" 
      align="center" 
      justifyContent="center"
      >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
           
           type="email" 
           label="E-mail" 
           {...register("email")} 
           />
          <Input 
          
          type="password" 
          label="senha" 
          {...register("password")}
           />
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg"
          isLoading={formState.isSubmitting}
          >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
