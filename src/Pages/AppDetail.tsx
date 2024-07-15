import React, { useState } from 'react';
import {
  Box,
  Text,
  useColorModeValue,
  useBreakpointValue,
  VStack,
  Image,
  Divider,
  Button,
  Stack,
  HStack,
  Icon,
  IconProps,
  Container,
  SimpleGrid,
  Textarea,
  FormControl,
  FormLabel,
  Avatar,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import DetailLayout from '../Layouts/DetailLayout';
import SingleAppList from '../Components/List/SingleAppList';
import { mockData } from './mockData';

// Define a demo AppItem for testing
const demoAppItem = {
  title: 'Demo App',
  packageName: 'com.demo.app',
  image: 'https://via.placeholder.com/150', // Placeholder image URL
  rating: 4,
  description: 'This is a demo application used for testing purposes. It showcases the features of a typical app detail page.',
  features: [
    'Feature 1: High performance',
    'Feature 2: User-friendly interface',
    'Feature 3: Reliable and secure',
  ],
  screenshots: [
    'https://via.placeholder.com/200x150',
    'https://via.placeholder.com/200x150',
    'https://via.placeholder.com/200x150',
  ],
  versions: [
    { version: '1.0.0', architecture: 'x86', link: '#', size: '15MB' },
    { version: '1.1.0', architecture: 'ARM', link: '#', size: '16MB' },
    { version: '1.2.0', architecture: 'ARM64', link: '#', size: '17MB' },
  ],
  comments: [
    { user: 'Alice', text: 'Great app! Really useful.', avatar: 'https://via.placeholder.com/40' },
    { user: 'Bob', text: 'I had some issues with the installation.', avatar: 'https://via.placeholder.com/40' },
  ],
};

const StarIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .587l3.668 7.431 8.205 1.186-5.931 5.771 1.397 8.148-7.339-3.85-7.338 3.85 1.397-8.148-5.93-5.771 8.204-1.186z" />
  </Icon>
);

const AppDetail: React.FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Background color
  const textColor = useColorModeValue('gray.600', 'gray.200'); // Text color
  const cardBg = useColorModeValue('white', 'gray.700'); // Card background color
  const shadow = useColorModeValue('md', 'dark-lg'); // Shadow for the card

  // Initialize the state with the last version from the versions array
  const lastVersion = demoAppItem.versions[demoAppItem.versions.length - 1];
  const [selectedVersion, setSelectedVersion] = useState(lastVersion);

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const version = demoAppItem.versions.find(
      (version) => version.version === event.target.value
    );
    setSelectedVersion(version || lastVersion);
  };

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(demoAppItem.comments);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, { user: 'Anonymous', text: comment, avatar: 'https://via.placeholder.com/40' }]);
      setComment('');
    }
  };

  return (
    <DetailLayout>
      <Box bg={bgColor} color={textColor} p={4} width="100%">
        <Container maxW="container.xl" p={0}>
          <Box
            bg={cardBg}
            p={6}
            borderRadius="md"
            shadow={shadow}
            width="100%" // Ensure the card uses the full width of its container
          >
            {/* App Image and Title */}
            <HStack spacing={4} align="start" overflow="hidden" w="full">
              <Image src={demoAppItem.image} alt={demoAppItem.title} boxSize="150px" borderRadius="md" />
              <VStack align="start" spacing={2} overflow="hidden" w="full">
                <Text fontSize="2xl" fontWeight="bold" noOfLines={1}>
                  {demoAppItem.title}
                </Text>
                <Text fontSize="sm" color={textColor} noOfLines={1}>
                  {demoAppItem.packageName}
                </Text>
                <HStack spacing={1}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} boxSize={4} color={i < demoAppItem.rating ? 'teal.500' : 'gray.300'} />
                  ))}
                </HStack>
              </VStack>
            </HStack>
            <Divider my={4} />

            {/* App Description */}
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Description
            </Text>
            <Text mb={4}>{demoAppItem.description}</Text>

            {/* App Features */}
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Features
            </Text>
            <Stack spacing={1} mb={4}>
              {demoAppItem.features.map((feature, index) => (
                <Text key={index} as="li">
                  {feature}
                </Text>
              ))}
            </Stack>

            {/* App Screenshots */}
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Screenshots
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mb={4}>
              {demoAppItem.screenshots.map((screenshot, index) => (
                <Image key={index} src={screenshot} alt={`Screenshot ${index + 1}`} borderRadius="md" />
              ))}
            </SimpleGrid>

            {/* Download Versions */}
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Available Versions
            </Text>
            <Stack spacing={3} mb={4}>
              <FormControl mb={4}>
                <FormLabel htmlFor="version">Select Version</FormLabel>
                <Select
                  id="version"
                  onChange={handleVersionChange}
                  value={selectedVersion.version}
                >
                  {demoAppItem.versions.map((version) => (
                    <option key={version.version} value={version.version}>
                      {version.version}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <Box overflowX="auto">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Link</Th>
                      <Th>Architecture</Th>
                      <Th>Size</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Button as="a" href={selectedVersion.link} colorScheme="teal" size="sm" target="_blank" rel="noopener noreferrer">
                          Download
                        </Button>
                      </Td>
                      <Td>{selectedVersion.architecture}</Td>
                      <Td>{selectedVersion.size}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Stack>

            {/* Comment Section */}
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Comments
            </Text>
            <Stack spacing={4} mb={4}>
              {comments.map((comment, index) => (
                <Box key={index} p={3} borderWidth={1} borderRadius="md" borderColor="gray.200" bg="gray.50">
                  <HStack spacing={3}>
                    <Avatar src={comment.avatar} size="md" />
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold">{comment.user}</Text>
                      <Text>{comment.text}</Text>
                    </VStack>
                  </HStack>
                  <Divider my={2} />
                </Box>
              ))}
            </Stack>
            <FormControl>
              <FormLabel htmlFor="comment">Leave a Comment</FormLabel>
              <Textarea
                id="comment"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Write your comment here..."
                size="sm"
              />
              <Button mt={2} colorScheme="teal" onClick={handleCommentSubmit}>
                Submit
              </Button>
            </FormControl>
          </Box>
        </Container>
        
      </Box>
      <Box>
            <SingleAppList title='Similar' items={mockData}/>
            </Box>
    </DetailLayout>
  );
};

export default AppDetail;
