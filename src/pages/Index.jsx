import React from "react";
import { Box, Button, Container, Flex, Heading, Icon, Image, Link, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { FaBrain, FaTachometerAlt, FaUserMd, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <>
      <Box bg="purple.500" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Link href="#" fontWeight="bold" fontSize="xl">
              LaudIA
            </Link>
            <Stack direction="row" spacing={4} display={{ base: "none", md: "flex" }}>
              <Link href="#inicio">Início</Link>
              <Link href="#recursos">Recursos</Link>
              <Link href="#precos">Preços</Link>
              <Link href="#contato">Contato</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Box bg="purple.600" color="white" textAlign="center" py={20} id="inicio">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Revolucione a Radiologia com IA
          </Heading>
          <Text fontSize="xl" mb={8}>
            LaudIA é o seu copiloto de IA para relatórios radiológicos. Experimente uma eficiência e precisão incomparáveis.
          </Text>
          <Button as="a" href="forms.html" colorScheme="white" size="lg">
            Começar Agora
          </Button>
        </Container>
      </Box>

      <Box py={20} id="recursos">
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between">
            <Box textAlign="center" mb={{ base: 8, md: 0 }}>
              <Icon as={FaBrain} boxSize={16} color="purple.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Análise Alimentada por IA
              </Heading>
              <Text>Aproveite o poder da inteligência artificial para analisar exames radiológicos e gerar relatórios precisos.</Text>
            </Box>
            <Box textAlign="center" mb={{ base: 8, md: 0 }}>
              <Icon as={FaTachometerAlt} boxSize={16} color="purple.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Aumento da Eficiência
              </Heading>
              <Text>Agilize seu fluxo de trabalho radiológico e economize tempo valioso com os relatórios automatizados do laudIA.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaUserMd} boxSize={16} color="purple.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Assistência Especializada
              </Heading>
              <Text>Beneficie-se da experiência de nossos modelos de IA, treinados com grandes quantidades de dados radiológicos.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Box textAlign="center" mb={8}>
            <Heading as="h2" size="xl" mb={4}>
              Depoimentos
            </Heading>
          </Box>
          <Stack spacing={8}>
            <Box textAlign="center">
              <Text fontSize="xl" mb={4}>
                "O laudIA revolucionou nosso departamento de radiologia. Os relatórios alimentados por IA são incrivelmente precisos e eficientes, nos poupando incontáveis horas de trabalho."
              </Text>
              <Image src="https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTE4Mjk2NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dr. João Silva" borderRadius="full" boxSize={20} mx="auto" mb={2} />
              <Text fontWeight="bold">Dr. João Silva</Text>
              <Text>Radiologista</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="xl" mb={4}>
                "Como radiologista, eu era cético sobre a IA no início, mas o laudIA me conquistou. É como ter um copiloto altamente qualificado ao meu lado, aumentando minha produtividade e precisão."
              </Text>
              <Image src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMGZlbWFsZXxlbnwwfHx8fDE3MTE4Mjk2NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dra. Maria Santos" borderRadius="full" boxSize={20} mx="auto" mb={2} />
              <Text fontWeight="bold">Dra. Maria Santos</Text>
              <Text>Radiologista</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="xl" mb={4}>
                "O laudIA é uma ferramenta indispensável em nossa clínica. Seu desempenho excepcional e interface intuitiva tornaram-no uma parte integral de nossa rotina diária."
              </Text>
              <Image src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTE4Mjk2NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dr. Pedro Souza" borderRadius="full" boxSize={20} mx="auto" mb={2} />
              <Text fontWeight="bold">Dr. Pedro Souza</Text>
              <Text>Radiologista</Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box py={20} id="precos">
        <Container maxW="container.lg">
          <Box textAlign="center" mb={8}>
            <Heading as="h2" size="xl" mb={4}>
              Planos de Preços
            </Heading>
          </Box>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between">
            <Box borderWidth={1} borderRadius="lg" p={6} textAlign="center" mb={{ base: 8, md: 0 }} mr={{ md: 4 }}>
              <Heading as="h3" size="lg" mb={4}>
                Básico
              </Heading>
              <Text fontSize="4xl" fontWeight="bold" mb={4}>
                R$299
                <Text as="span" fontSize="xl" color="gray.500">
                  /mês
                </Text>
              </Text>
              <List spacing={2} mb={6}>
                <ListItem>10 exames por mês</ListItem>
                <ListItem>Análise básica de IA</ListItem>
                <ListItem>Suporte por e-mail</ListItem>
              </List>
              <Link href="forms.html" colorScheme="purple" size="lg">
                Assinar
              </Link>
            </Box>
            <Box borderWidth={1} borderRadius="lg" p={6} textAlign="center" mb={{ base: 8, md: 0 }} mr={{ md: 4 }}>
              <Heading as="h3" size="lg" mb={4}>
                Pro
              </Heading>
              <Text fontSize="4xl" fontWeight="bold" mb={4}>
                R$599
                <Text as="span" fontSize="xl" color="gray.500">
                  /mês
                </Text>
              </Text>
              <List spacing={2} mb={6}>
                <ListItem>50 exames por mês</ListItem>
                <ListItem>Análise avançada de IA</ListItem>
                <ListItem>Suporte prioritário por e-mail</ListItem>
              </List>
              <Link href="forms.html" colorScheme="purple" size="lg">
                Assinar
              </Link>
            </Box>
            <Box borderWidth={1} borderRadius="lg" p={6} textAlign="center">
              <Heading as="h3" size="lg" mb={4}>
                Empresarial
              </Heading>
              <Text fontSize="4xl" fontWeight="bold" mb={4}>
                Personalizado
              </Text>
              <List spacing={2} mb={6}>
                <ListItem>Exames ilimitados</ListItem>
                <ListItem>Modelos dedicados de IA</ListItem>
                <ListItem>Suporte premium</ListItem>
              </List>
              <Link href="forms.html" colorScheme="purple" size="lg">
                Entre em Contato
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box py={20} id="contato">
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between">
            <Box mb={{ base: 8, md: 0 }} mr={{ md: 8 }}>
              <Heading as="h2" size="xl" mb={4}>
                Entre em Contato
              </Heading>
              <Stack as="form" spacing={4}>
                <Box>
                  <Text mb={1}>Nome:</Text>
                  <Box as="input" type="text" borderWidth={1} borderRadius="md" p={2} />
                </Box>
                <Box>
                  <Text mb={1}>E-mail:</Text>
                  <Box as="input" type="email" borderWidth={1} borderRadius="md" p={2} />
                </Box>
                <Box>
                  <Text mb={1}>Mensagem:</Text>
                  <Box as="textarea" borderWidth={1} borderRadius="md" p={2} rows={5} />
                </Box>
                <Button colorScheme="purple" size="lg">
                  Enviar Mensagem
                </Button>
              </Stack>
            </Box>
            <Box>
              <Text mb={4}>LaudIA é uma solução de relatórios radiológicos alimentada por IA que aumenta a eficiência e a precisão para radiologistas.</Text>
              <List spacing={2}>
                <ListItem>
                  <Icon as={FaMapMarkerAlt} mr={2} />
                  Av. Paulista, 1000, São Paulo - SP
                </ListItem>
                <ListItem>
                  <Icon as={FaPhone} mr={2} />
                  +55 11 9999-9999
                </ListItem>
                <ListItem>
                  <Icon as={FaEnvelope} mr={2} />
                  contato@laudia.com.br
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" mb={8}>
            <Box mb={{ base: 4, md: 0 }}>
              <Heading as="h5" size="sm" mb={2}>
                Links
              </Heading>
              <List>
                <ListItem>
                  <Link href="#inicio">Início</Link>
                </ListItem>
                <ListItem>
                  <Link href="#recursos">Recursos</Link>
                </ListItem>
                <ListItem>
                  <Link href="#precos">Preços</Link>
                </ListItem>
                <ListItem>
                  <Link href="#contato">Contato</Link>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Heading as="h5" size="sm" mb={2}>
                Entre em Contato
              </Heading>
              <List>
                <ListItem>
                  <Icon as={FaEnvelope} mr={2} />
                  <Link href="mailto:contato@laudia.com.br">contato@laudia.com.br</Link>
                </ListItem>
                <ListItem>
                  <Icon as={FaPhone} mr={2} />
                  <Link href="tel:+5511999999999">+55 11 9999-9999</Link>
                </ListItem>
              </List>
            </Box>
          </Flex>
          <Box borderTopWidth={1} pt={8} textAlign="center">
            <Text>&copy; 2023 LaudIA. Todos os direitos reservados.</Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Index;
