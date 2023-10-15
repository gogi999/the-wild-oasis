import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { signup as signupApi } from '../../services/apiAuth';

export function useSignup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            toast.success(
                "Account successfully created! Please verify the new account from the user's email address."
            );
            // queryClient.setQueryData(['user'], user.user);
            // navigate('/dashboard', { replace: true });
        },
        // onError: (err) => {
        //     console.log('ERROR', err);
        //     toast.error('Provided email or password is incorrect!');
        // },
    });

    return { signup, isLoading };
}