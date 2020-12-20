import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';

import { useAuth } from '@/lib/auth';
import { createSite } from '@/lib/db';
import { fetcher } from '@/utils/fetcher';
import { Site } from '@/utils/types';

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register, errors } = useForm();

  const auth = useAuth();
  const toast = useToast();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const createSiteHandler = ({ name, link }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      link
    };

    createSite(newSite);
    toast({
      title: 'Success.',
      description: "We've added your site.",
      status: 'success',
      duration: 3000,
      isClosable: true
    });
    mutate(
      '/api/sites',
      async (data: { sites: Site[] }) => {
        return { sites: [...data.sites, newSite] };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="cyan"
        variant="solid"
        size="md"
        _active={{
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSiteHandler)}>
          <ModalHeader>Add Site</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                ref={
                  initialRef &&
                  register({
                    required: true
                  })
                }
                placeholder="Name"
              />
              {errors.name && <h1>name is required</h1>}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                name="link"
                placeholder="https://website.com"
                ref={register({ required: 'Required' })}
              />
              {errors.link && <h1>link is required</h1>}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="cyan" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
