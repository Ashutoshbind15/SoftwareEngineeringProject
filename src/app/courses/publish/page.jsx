"use client";

import CoursePublisher from "@/app/components/Course/CoursePublisher";
import LessonUploadForm from "@/app/components/UI/Components/CourseUploadForm";
import React from "react";

const CourseCreate = () => {
  // const [imageUrl, setImageUrl] = React.useState("");
  // const [title, setTitle] = React.useState("");
  // const [description, setDescription] = React.useState("");
  // const [category, setCategory] = React.useState("");

  return (
    // <div>
    //   <UploadButton
    //     endpoint="imageUploader"
    //     onClientUploadComplete={async (res) => {
    //       // Do something with the response
    //       setImageUrl(res[0].url);
    //       const { data } = await axios.post("/api/fileupload", res);
    //       console.log(data);
    //     }}
    //     onUploadError={(error) => {
    //       // Do something with the error.
    //       alert(`ERROR! ${error.message}`);
    //     }}
    //   />

    //   <form
    //     onSubmit={async (e) => {
    //       e.preventDefault();
    //       const { data } = await axios.post("/api/course", {
    //         title: e.target.title.value,
    //         description: e.target.description.value,
    //         category,
    //         imageUrl,
    //       });
    //       console.log(data);
    //     }}
    //   >
    //     <input
    //       type="text"
    //       name="title"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       name="description"
    //       value={description}
    //       onChange={(e) => setDescription(e.target.value)}
    //     />

    //     <input
    //       type="text"
    //       name="category"
    //       value={category}
    //       onChange={(e) => setCategory(e.target.value)}
    //     />

    //     <button
    //       type="submit"
    //       className="bg-blue-700 text-white px-4 py-2 rounded-md"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <LessonUploadForm />
  );
};

export default CourseCreate;
