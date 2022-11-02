import Avatar from '../../../Assets/earlLogoHead.png';

const About = () => {
    return (
        <div className="h-full mb-[5em] md:mb-0">
            <div className="h-full">
                <div className="w-full md:w-1/2 mx-auto">
                    <h1 className=" font-bold md:text-[2em] text-center"><span className="text-[#FFAB00]">---[ </span>About Earl<span className="text-[#FFAB00]"> ]---</span></h1>
                </div>

                <div className="w-11/12 md:w-3/4 mx-auto bg-slate-200 p-6 my-4">
                    <p className="my-6 italic text-[0.8em] md:text-[1em] md:w-3/4 mx-auto text-center">
                        "Let me tell a story, once lived an evil genius, who invented time and space, everything existed in perfect symphony of float, curled in integer and strings of logics, until an avatar came!" -
                    </p>

                    <p className="my-4 text-center text-[0.8em] md:text-[1em]">
                        I am Earl, would have been a frontend developer but my curiosity and superpower pushed me to be a genius developer with great teamwork ability, great mastery of the tools I wield and burning zeal to get stuffs done. I'm in my early development stage, learning the spells and working the potions. Like a crypto trader wit vision for the future will scream, "Buy the dip!", I'm advicing Startup and Companies to lure me to their team.
                    </p>

                    <p className="my-4 text-center text-[0.8em] md:text-[1em]">
                        Like I didn't mention earlier, I have lots of skills and learn extremely fast. Again, "buy the dip!!".
                    </p>

                    <div className='flex items-center gap-2'>
                        <div className='w-1/12'>
                            <img src={Avatar} alt="" className='w-full'/>
                        </div>

                        <div>
                            <p className='font-semibold'>Earl Pappi</p>
                            <p className=' font-light italic  text-center'>Avatar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;