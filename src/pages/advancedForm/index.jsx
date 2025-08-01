import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { motion } from 'framer-motion';

// Form validation schema
const schema = yup.object().shape({
    firstName: yup.string().required('First name is required').min(2, 'Too Short!'),
    lastName: yup.string().required('Last name is required').min(2, 'Too Short!'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup
        .string()
        .matches(/^[0-9]{10}$/, 'Phone number is not valid')
        .required('Phone is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

const AdvancedForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [serverError, setServerError] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setServerError('');

        try {
            // Simulate API call
            await axios.post('https://api.example.com/submit', data);
            setSubmitSuccess(true);
            reset();
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            setServerError(error.response?.data?.message || 'Submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Password strength indicator
    const [passwordStrength, setPasswordStrength] = useState(0);
    const watchPassword = useWatch({ control, name: 'password' });

    useEffect(() => {
        if (!watchPassword) {
            setPasswordStrength(0);
            return;
        }

        let strength = 0;
        if (watchPassword.length >= 8) strength += 1;
        if (/[A-Z]/.test(watchPassword)) strength += 1;
        if (/[0-9]/.test(watchPassword)) strength += 1;
        if (/[!@#$%^&*]/.test(watchPassword)) strength += 1;
        setPasswordStrength(strength);
    }, [watchPassword]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="sm:mx-auto sm:w-full sm:max-w-md"
            >
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Advanced User Registration
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
            >
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {submitSuccess && (
                        <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                            Form submitted successfully!
                        </div>
                    )}

                    {serverError && (
                        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                            {serverError}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        {...register('firstName')}
                                        className={`block w-full shadow-sm sm:text-sm rounded-md ${errors.firstName
                                                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                                : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                            }`}
                                    />
                                    {errors.firstName && (
                                        <p className="mt-2 text-sm text-red-600">{errors.firstName.message}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        {...register('lastName')}
                                        className={`block w-full shadow-sm sm:text-sm rounded-md ${errors.lastName
                                                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                                : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                            }`}
                                    />
                                    {errors.lastName && (
                                        <p className="mt-2 text-sm text-red-600">{errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    {...register('email')}
                                    className={`block w-full shadow-sm sm:text-sm rounded-md ${errors.email
                                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                        }`}
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone number
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    {...register('phone')}
                                    className={`block w-full shadow-sm sm:text-sm rounded-md ${errors.phone
                                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                        }`}
                                />
                                {errors.phone && (
                                    <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    {...register('password')}
                                    className={`block w-full shadow-sm sm:text-sm rounded-md ${errors.password
                                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                        }`}
                                />
                                {watchPassword && (
                                    <div className="mt-2">
                                        <div className="flex space-x-2">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div
                                                    key={i}
                                                    className={`h-1 flex-1 rounded ${passwordStrength >= i
                                                            ? i <= 2
                                                                ? 'bg-red-500'
                                                                : i === 3
                                                                    ? 'bg-yellow-500'
                                                                    : 'bg-green-500'
                                                            : 'bg-gray-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-xs mt-1 text-gray-500">
                                            {passwordStrength <= 2
                                                ? 'Weak password'
                                                : passwordStrength === 3
                                                    ? 'Moderate password'
                                                    : 'Strong password'}
                                        </p>
                                    </div>
                                )}
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    {...register('confirmPassword')}
                                    className={`block w-full shadow-sm sm:text-sm rounded-md ${errors.confirmPassword
                                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                            : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                        }`}
                                />
                                {errors.confirmPassword && (
                                    <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    {...register('terms')}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-medium text-gray-700">
                                    I agree to the{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Terms and Conditions
                                    </a>
                                </label>
                                {errors.terms && (
                                    <p className="mt-1 text-red-600">{errors.terms.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={!isDirty || !isValid || isSubmitting}
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${!isDirty || !isValid || isSubmitting
                                        ? 'bg-indigo-300 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    'Register'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default AdvancedForm;