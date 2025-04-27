import React from 'react';

const ProfileCard = ({member}) => {
    const { name, image, role } = member;
    return (
        <div className='bg-white shadow-md rounded-lg p-4 border border-gray-300'>
            <img src={image} alt="" className='w-32 h-32 rounded-full mx-auto mb-4 object-cover' />

            <h2 className='text-xl font-semibold text-gray-800 text-center'>{name}</h2>
            <p className='text-gray-600 text-center'>{role}</p>
        </div>
    );
};

export default ProfileCard;