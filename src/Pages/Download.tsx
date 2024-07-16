import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Heading, Text, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import DetailLayout from '../Layouts/DetailLayout';

interface DownloadData {
  id: number;
  name: string;
  description: string;
  // Add other fields as needed
}

const Download: React.FC = () => {
  const { upload_id } = useParams<{ upload_id: string }>();
  const [data, setData] = useState<DownloadData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/download/${upload_id}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    if (upload_id) {
      fetchData();
    }
  }, [upload_id]);

  if (loading) {
    return (
      <DetailLayout>
        <Box textAlign="center" p={4}>
          <Spinner size="xl" />
          <Text mt={4} fontSize="lg" color="teal.500">
            Loading...
          </Text>
        </Box>
      </DetailLayout>
    );
  }

  if (error) {
    return (
      <DetailLayout>
        <Box p={4}>
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        </Box>
      </DetailLayout>
    );
  }

  return (
    <DetailLayout>
      <Box p={4} maxWidth="800px" mx="auto" bg="gray.50" borderRadius="md" boxShadow="md">
        {data ? (
          <>
            <Heading mb={4} size="lg">
              {data.name}
            </Heading>
            <Text fontSize="md" color="gray.700">
              {data.description}
            </Text>
            {/* Render other data fields as needed */}
          </>
        ) : (
          <Text>No data found</Text>
        )}
      </Box>
    </DetailLayout>
  );
};

export default Download;
