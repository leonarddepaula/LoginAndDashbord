import { Flex, Button, Stack } from "@chakra-ui/react";
import{FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email:string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha orbigatória'),
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
   resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn:SubmitHandler<FieldValues> = async(values)=>{
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
           error={errors.email}
           {...register("email")} 
           />
          <Input 
          
          type="password" 
          label="senha" 
          error={errors.password}
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
