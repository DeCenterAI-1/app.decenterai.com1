'use client'
import Image from 'next/image'
import useUserStore from '@/state/userStore'
import { myImageLoader } from '@/lib/imageHelper'
import { AiOutlineCamera } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import lighthouse from "@lighthouse-web3/sdk"
import { useRef, useState } from 'react'


async function uploadImage(selectedImage) {
    return await lighthouse.upload(selectedImage, process.env.NEXT_PUBLIC_LH_API);
}

export default function Page() {

    const { push } = useRouter()
    const userStore = useUserStore()
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [fileName, setFileName] = useState<string>('avatar');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleBioChange = (event) => {
        setBio(event.target.value)
    }


    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handleImageChange = () => {
        fileInputRef.current.click();  // Trigger file input click
    };

    const areAllFieldsFilled = () => {
        return firstName && lastName && username && email;
    };


    const handleFileInputChange = async (event) => {

        const selectedFile = event.target.files[0];

        console.log(selectedFile)

        if (selectedFile) {
            try {
                // Convert the selected file to a data URL
                const dataUrl = await readFileAsDataURL(selectedFile);

                // console.log("Data URL: " + dataUrl)


                // Ensure dataUrl is a string before updating userStore
                if (typeof dataUrl === 'string') {
                    // Update the userStore with the data URL
                    userStore.setUser({
                        profileImage: dataUrl,
                    });

                    // Update the src prop of the Image component
                    setSelectedImage(selectedFile);
                } else {
                    console.error('Error converting file to data URL. Invalid data URL format.');
                }

            } catch (error) {
                console.error('Error converting file to data URL:', error);
            }
        }
    };


    // Helper function to read file as data URL
    const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                resolve(reader.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };


    type Url = {
        url: string
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const fullName = `${firstName} ${lastName}`;

        if (userStore.user) {
            userStore.setUser({
                name: fullName,
                userName: username,
                bio: bio
            })
        }

        if (selectedImage) {
            try {
                const response = await uploadImage(selectedImage);

                console.log("IMAGE UPLOADED : ", response)

                // Redirect to the dashboard
                push('/dashboard');
            } catch (error) {
                console.error('Image upload failed', error);
            }
        } else {
            // If no image is selected, proceed without uploading
            push('/dashboard');
        }
    };




    return (
        <div className="bg-primary_13 h-screen flex flex-col gap-4 relative overflow-y-auto">
            <div className="h-[10%] flex pl-10">
                <div className="w-[20%] lg:w-[10%] relative">
                    <Image
                        src="/logo.png"
                        alt="logo image"
                        fill={true}
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
            <div className="flex-1 flex-1 flex justify-center items-center">
                <div className="w-[560px] border border-primary_11 rounded-3xl px-[36px] py-[40px] flex justify-center">
                    <div className="w-[90%] flex flex-col gap-8">
                        <div>
                            <h1 className="font-logirentBold text-primary_1 text-center font-bold text-5xl"
                            >
                                {' '}
                                Welcome
                            </h1>
                            <p className="text-primary_1 text-sm text-center">boyefalode@gmail.com <span className="text-primary_7">kindly fill you information your below</span></p>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex justify-center">
                                {!fileName ?
                                    <div className="w-[120px] h-[120px] border border-primary_11 rounded-full flex justify-center items-center relative">
                                        <img src="/avatars/avatar-0.png" className="w-[88px] h-[88px]" />
                                        <button className="absolute -bottom-2 left-10 text-primary_7 bg-primary_10 p-1.5 rounded-full">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                id="imageInput"
                                                ref={fileInputRef}
                                                onChange={handleFileInputChange}
                                            />
                                            <AiOutlineCamera size={20} onClick={handleImageChange} />
                                        </button>
                                    </div>
                                    :
                                    <div className="w-[120px] h-[120px] border border-primary_11 rounded-full flex justify-center items-center relative">
                                        <img src="/avatars/image.png" className="w-[100%] h-[100%]" />
                                        <button className="absolute bottom-0 right-2 text-primary_7 bg-primary_10 p-1.5 rounded-full">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                id="imageInput"
                                                ref={fileInputRef}
                                                onChange={handleFileInputChange}
                                            />
                                            <AiOutlineCamera size={20} onClick={handleImageChange} />
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-grow">
                                <label htmlFor="name" className="font-bold text-sm text-primary_2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    className="text-primary_7 border border-primary_8 rounded-xl px-4 focus:outline-none bg-transparent h-[56px] w-[100%]"
                                />
                            </div>
                            <div className="flex-grow">
                                <label htmlFor="name" className="font-bold text-sm text-primary_2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    className="text-primary_7 border border-primary_8 rounded-xl px-4 focus:outline-none bg-transparent h-[56px] w-[100%]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="Username" className="font-medium text-primary_2 text-sm">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                className="text-primary_7 border border-primary_8 rounded-xl px-4 focus:outline-none bg-transparent h-[56px] w-[100%]"
                                id="Username"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-bold text-sm text-primary_2">
                                Email address
                            </label>
                            <input
                                type="text"
                                value={email}
                                className="text-primary_7 border border-primary_8 rounded-xl px-4 focus:outline-none bg-transparent h-[56px] w-[100%]"
                                id="email"
                                name="email"
                                onChange={handleEmailChange}

                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label htmlFor="bio" className="font-medium text-primary_2 text-sm ">
                                Bio
                            </label>
                            <textarea
                                name="bio"
                                id="bio"
                                value={bio}
                                className="text-primary_7 border border-primary_8 rounded-xl p-4 focus:outline-none bg-transparent h-12 overflow-y-hidden h-[56px] w-[100%]"
                                onChange={handleBioChange}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                onClick={handleSubmit}
                                className={`bg-primary_10 bg-blue text-primary_4 rounded-full px-4 py-2 h-[48px] w-[100%] text-center mt-4 ${areAllFieldsFilled() ? '' : 'opacity-50 cursor-not-allowed'
                                    }`}
                                disabled={!areAllFieldsFilled()}
                            >
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
