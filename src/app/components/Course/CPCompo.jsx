"use client";
import React, { useState } from "react";

export default function CoursePageComponent({ course }) {
  // State variables to manage section visibility
  const [showLectures, setShowLectures] = useState(true);
  const [showResources, setShowResources] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setShowLectures(section === "lectures");
    setShowResources(section === "resources");
    setShowFeedback(section === "feedback");
  };

  return (
    <div className="flex flex-col w-full gap-x-5 p-2">
      <div className="w-full h-fit">
        <img
          className="w-full h-64"
          src={course?.imageUrl}
          alt="Course Image"
        />
      </div>
      <div className="p-3 flex flex-row gap-x-8 justify-between w-3/4">
        <div>
          <h1 className="font-bold text-4xl">{course?.title}</h1>
          <h2 className="pt-1">{course?.description}</h2>
        </div>
      </div>
      <div className="flex flex-row gap-x-6 p-2 pt-4 justify-between w-1/2">
        <div>
          <button onClick={() => toggleSection("lectures")}>Lectures</button>
        </div>
        <div>
          <button onClick={() => toggleSection("resources")}>Resources</button>
        </div>
        <div>
          <button onClick={() => toggleSection("feedback")}>Feedback</button>
        </div>
        <hr className="bg-black" />
      </div>

      {/* Lecture content */}
      {showLectures && (
        <div className="flex flex-col p-1 py-4 gap-y-8 justify-center items-start">
          {/* ... (your lecture content) ... */}

          {course?.lessons?.map((lesson) => (
            <>
              <div className="flex flex-row gap-x-6 shadow-lg my-4 w-full">
                <iframe src={lesson?.videoUrl} allowFullScreen={true}></iframe>
                <div>
                  <h1 className="text-xl font-bold mt-3"> {lesson?.title}</h1>
                  <h1 className="mt-6">{lesson?.desc}</h1>
                </div>
              </div>
            </>
          ))}
        </div>
      )}

      {/* Resources section */}
      {showResources && <div>This is the Resources section</div>}

      {/* Feedback section */}
      {showFeedback && <div>This is the Feedback section</div>}
    </div>
  );
}
