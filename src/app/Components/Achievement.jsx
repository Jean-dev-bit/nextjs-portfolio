"use client";
import React from 'react';
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});
const achiviementsLists = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "5",
    },
];
const Achievement = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flec-col sm:flex-row items-center justify-between">
                {
                    achiviementsLists.map((achievement, index) => {
                        return(
                            <div key={index} className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                                <h2 className="text-white text-4xl font-bold flex flex-row">
                                    {achievement.prefix}
                                    <AnimatedNumbers 
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        locale="en-US"
                                        className="text-white text-4xl font-bold"
                                        configs={(_, index) => {
                                            return {
                                                mass: 1,
                                                friction: 100,
                                                tension: 260 * (index + 1)
                                            };
                                        }}
                                    /> 
                                     {achievement.postfix}   
                                </h2>
                                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                            </div>
                           
                        );

                    })
                }
        </div>
    </div>
  )
}

export default Achievement