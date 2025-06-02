export default function About() {
    return(
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* Top gradient background */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div 
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
                        style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
                    ></div>
                </div>

                {/* What Is sitesbybeltran Section */}
                <div className="gap-8 lg:gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">What Is sitesbybeltran</h2>
                        <p className="mb-4 text-base sm:text-lg leading-relaxed">
                            Sites by Beltran is a solo web design & development studio dedicated to helping businesses stand out online. I create clean, modern, and effective websites that are fully tailored to your goals — with custom code built from the ground up, not off-the-shelf templates.
                            Every website is handcrafted to reflect your brand, fit your business needs, and perform smoothly across all devices.     
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <img className="w-full rounded-lg " src="./images/about-1.png" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg " src="./images/about-2.png" alt="office content 2" />
                    </div>
                </div>

                {/* Mission Section */}
                <div className="flex flex-col gap-8 lg:gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1 mt-8 lg:mt-0">
                        <img className="w-full rounded-lg " src="./images/about-3.png" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg " src="./images/about-4.png" alt="office content 2" />
                    </div>
                    <div className="text-center lg:text-left order-1 lg:order-2 mb-8 lg:mb-0">
                        <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">Mission</h2>
                        <p className="mb-4 text-base sm:text-lg leading-relaxed">
                            My mission is to build high-performing, custom websites that make your business stand out. 
                            I focus on delivering clean, modern designs that clearly showcase what you offer and attract more traffic.
                            From design to deployment — and beyond — I handle everything, including maintenance and updates, so you can stay focused on your business without the extra overhead.
                        </p>
                    </div>
                </div>

                {/* About Me Section */}
                <div className="gap-8 lg:gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">👋 About Me</h2>
                        <p className="mb-4 text-base sm:text-lg leading-relaxed">
                            Hi, I'm Angel Beltran — the person you'll be working with directly. 
                            I have around 2 years of experience building complex web applications and hands-on industry experience in software development and data. 
                            I'm passionate about crafting clean, stylish websites that not only look great but also serve a clear purpose.
                            My goal is to help your business succeed by creating a strong, professional online presence that gives your customers exactly what they need — and leaves a lasting impression.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img className="w-48 sm:w-56 lg:w-72 h-48 sm:h-56 lg:h-72 object-cover rounded-full shadow-lg" src="./images/headshot_pro.jpg" alt="profile picture" />
                    </div>
                </div>

                {/* Bottom gradient background */}
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div 
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
                        style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
                    ></div>
                </div>
            </div>
        </div>
    )
}