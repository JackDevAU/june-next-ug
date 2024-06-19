// "use client";
// import React from "react";
// import AutoForm, { AutoFormSubmit } from "./ui/auto-form";
// import { z } from "zod";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

// export default function AutoFormDemo() {
//   return (
//     <AutoForm
//       onSubmit={(values) => console.log("submitted", values)}
//       formSchema={formSchema}
//       fieldConfig={{
//         username: {
//           inputProps: {
//             placeholder: "shadcn",
//           },
//           description: "This is your public display name.",
//         },
//       }}
//     >
//       <AutoFormSubmit formNoValidate>Submit</AutoFormSubmit>
//     </AutoForm>
//   );
// }
